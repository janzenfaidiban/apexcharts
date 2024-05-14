var options = {
    chart: {
        type: 'bar'
    },
    series: [
        {
            name: 'Laki-Laki',
            data: [12], 
        },
        {
            name: 'Perempuan',
            data: [23]
        },
    ], 

    xaxis: {
        categories: [
            '',
        ]
    },

}

var pegawaiJenisKelamin = new ApexCharts(document.querySelector("#pegawaiJenisKelamin"), options);

pegawaiJenisKelamin.render();