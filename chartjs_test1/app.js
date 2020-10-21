var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            fill: false,
            lineTension: 0,
            pointStyle: 'rectRot',
        },{
        label: 'My Second dataset',
        backgroundColor: 'rgb(100, 200, 132)',
        borderColor: 'rgb(100, 200, 132)',
        data: [50, 10, 35, 12, 70, 20, 43],
        fill: false,
        borderDash: [5, 5],
        pointRadius: 5,
        pointHoverRadius: 10,
        pointBorderColor: 'rgb(0, 0, 0)',
        pointHoverColor: 'rgb(0, 0, 0)'
        //cubicInterpolationMode: 'monotone'
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        legend: {
            labels: {
                usePointStyle: true
            }
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
});