var options = {
    chart: {
        type: 'area',
        width: '100%',
        height: 'auto',
        toolbar: {
            show: false,
        },
    },
    series: [{
        data: [100, 40, 135, 150, 9, 160, 70, 91, 125]
    }],
    markers: {
        size: 0
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    stroke: {
        width: 1
    },
    grid:{
        show: false
    }
}

var visits_chart = new ApexCharts(document.querySelector("#visits-chart"), options);
var conversions_chart = new ApexCharts(document.querySelector("#conversions-chart"), options);

visits_chart.render();
conversions_chart.render();