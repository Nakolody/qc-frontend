<template>
    <div>
      <div>
        <date-range-picker
          ref="picker"
          :opens="opens"
          v-model="dateRange"
          class="w-full my-4 bg-white rounded-md shadow-md"
          :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY' }"
          :autoApply="autoApply"
          @update="updateValues"
        >
          <template v-slot:input="picker">
              <div class="rounded-md p-2 text-gray-700">{{ picker.startDate | date }} - {{ picker.endDate | date }}</div>
          </template>
        </date-range-picker>
      </div>
      <div v-if="showChart">
        <apexchart
            type="line"
            height="500"
            ref="chart"
            :options="chartOptions"
            :series="series"   
            class="p-4 bg-white rounded-md shadow-md"
        >
        </apexchart>
      </div>
    </div>
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker'
//you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { std, mean } from 'mathjs';


export default {
    components: { DateRangePicker },
    data() {
        return {
          showChart: false,
          opens: "center",
          dateRange: {
            startDate: null,
            endDate: null
          },
          autoApply: true,
          series: [   
              {
                  name: "Data",
                  data: []
              }
          ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              width: 3,
            },
            xaxis: {
              categories: [],
              type: "datetime"
            },
            yaxis: {
              min: 1,
              max: 5,
              tickAmount: 4,
              axisTicks: {
                show: false
              }
            },
            annotations: {
              yaxis: [
                {
                  y: null,
                  y2: null,
                  fillColor: '#fed7d7',
                  borderColor: 'red', 
                  label: {
                    borderColor: '#00E396',
                    style: {
                      color: '#fff',
                      background: '#00E396'
                    },
                    text: '-2 STD'
                  }
                },
                {
                  y: null,
                  y2: null,
                  fillColor: '#f0fff4',
                  borderColor: 'green'
                },
                {
                  y: null,
                  y2: null,
                  fillColor: '#c6f6d5',
                  borderColor: 'green',
                  label: {
                    borderColor: '#00E396',
                    style: {
                      color: '#fff',
                      background: '#00E396'
                    },
                    text: 'Mean'
                  }
                },
                {
                  y: null,
                  y2: null,
                  fillColor: '#c6f6d5',
                  borderColor: 'green'
                },
                {
                  y: null,
                  y2: null,
                  fillColor: '#f0fff4',
                  borderColor: 'green',
                    label: {
                    borderColor: '#00E396',
                    style: {
                      color: '#fff',
                      background: '#00E396'
                    },
                    text: '2 STD'
                  }
                },
                {
                  y: null,
                  y2: null,
                  fillColor: '#fed7d7',
                  borderColor: 'red'
                }
              ]
            }
          }
        }
    },
    filters: {
      date: function (date){
        if (!date) return '';
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        return month + '/' + day + '/' + year;
      }
    },
    created(){
        let dateBeginning = new Date();
        this.dateRange.startDate = dateBeginning.setDate(dateBeginning.getDate()-30);
        this.dateRange.endDate = new Date();
        this.updateValues();
    },
    methods: {
      updateValues(){
        console.log('updating')
        this.showChart = false;
        this.series[0].data = [];
        this.chartOptions.xaxis.categories = [];
        this.$http.get('/api/measurements', {
            params: {
                start_date: this.dateRange.startDate,
                end_date: this.dateRange.endDate,
                level: 3                                //TODO make this dynamic
            }
        })
        .then(response => { 
          if (! response.data.length) {
            this.showChart = true;
          } else {
            response.data.forEach(measurement => {
                if(measurement.reagent.name === "BHCG"){
                  this.series[0].data.push(measurement.value);
                  this.chartOptions.xaxis.categories.push(Date.parse(measurement.measurement_time));
                }
            });

            //this.$refs.chart.updateSeries(this.series);

            let standardDeviation = std(this.series[0].data);
            let average = mean(this.series[0].data);

            this.chartOptions.annotations.yaxis[0].y = average - (standardDeviation * 4);
            this.chartOptions.annotations.yaxis[0].y2 = average - (standardDeviation * 2);
            this.chartOptions.annotations.yaxis[1].y = average - (standardDeviation * 2);
            this.chartOptions.annotations.yaxis[1].y2 = average - (standardDeviation);
            this.chartOptions.annotations.yaxis[2].y = average - (standardDeviation);
            this.chartOptions.annotations.yaxis[2].y2 = average;
            this.chartOptions.annotations.yaxis[3].y = average;
            this.chartOptions.annotations.yaxis[3].y2 = average + (standardDeviation);
            this.chartOptions.annotations.yaxis[4].y = average + (standardDeviation);
            this.chartOptions.annotations.yaxis[4].y2 = average + (standardDeviation * 2);
            this.chartOptions.annotations.yaxis[5].y = average + (standardDeviation * 2);
            this.chartOptions.annotations.yaxis[5].y2 = average + (standardDeviation * 4);
            this.chartOptions.yaxis.min = (average - (standardDeviation * 4));
            this.chartOptions.yaxis.max = (average + (standardDeviation * 4));

            //this.$refs.chart.updateOptions(this.chartOptions);
            this.showChart = true;
          }
        })
      }
    }
}
</script>

<style>
.reportrange-text {
    cursor: pointer !important;
    padding: 0px 0px !important;
    border: 0px solid #ccc !important;
    border-radius: 0.375rem;
}

.daterangepicker {
  top: 45px !important;
}

.row {
  display: flex!important;
}
</style>