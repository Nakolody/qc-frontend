<template>
    <div>
        <apexchart
            type="line"
            height="500"
            ref="chart"
            :options="chartOptions"
            :series="series"   
            class="p-10 m-4 bg-white shadow-md"
        >
        </apexchart>
    </div>
</template>
<script>



export default {
    data() {
        return {
            series: [   
                {
                    name: "Desktops",
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
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: [],
              type: "datetime"
            }
          }
        }
    },
    created(){
        this.$http.get('/api/measurements', {
            params: {
                start_date: '10-01-2019', //TODO make this dynamic
                end_date: '11-01-2020',   //TODO make this dynamic
                level: 3                  //TODO make this dynamic
            }
        })
        .then(response => { 
            response.data.forEach(measurement => {
                if(measurement.reagent.name === "BHCG"){
                    this.series[0].data.push(measurement.value);
                    this.chartOptions.xaxis.categories.push(Date.parse(measurement.measurement_time));
                }
            });
            console.log(this.chartOptions.xaxis.categories);
            this.$refs.chart.updateSeries(this.series, true)
        })
    }
}
</script>