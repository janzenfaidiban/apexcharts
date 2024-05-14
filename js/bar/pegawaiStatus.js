var options = {
    chart: {
        type: 'bar'
    },
    series: [
        {
            name: 'PNS',
            data: [12], 
        },
        {
            name: 'Non PNS',
            data: [23]
        },
    ], 

    xaxis: {
        categories: [
            '',
        ]
    },

}

var pegawaiStatus = new ApexCharts(document.querySelector("#pegawaiStatus"), options);

pegawaiStatus.render();