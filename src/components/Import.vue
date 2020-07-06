<template>
    <div>
        <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 class="text-2xl font-semibold text-gray-900">Import your data here:
                </h1>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <form id="importDataFile" class="w-full max-w-sm">
                    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input @change="parseData" id="importFile" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="file" placeholder="Jane Doe" aria-label="Full name" />
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>
<script>

export default {
    methods: {
        parseData: function (ev) {
            const reader = new FileReader();
            const file = ev.target.files[0];
            reader.onload = e => {
                const line = e.target.result;
                console.log(line);
                const lineSplit = line.split("\n");
                console.log(lineSplit);
                };
            reader.readAsText(file);
        }
    }
}
</script>