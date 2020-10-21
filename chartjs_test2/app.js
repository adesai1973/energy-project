var DATA_COUNT = 12;

var utils = Samples.utils;

utils.srand(110);

function getLineColor(ctx) {
    return utils.color(ctx.datasetIndex);
}

function alternatePointStyles(ctx) {
    var index = ctx.dataIndex;
    return index % 2 === 0 ? 'circle' : 'rect';
}

function makeHalfAsOpaque(ctx) {
    return utils.transparentize(getLineColor(ctx));
}

function adjustRadiusBasedOnData(ctx) {
    var v = ctx.dataset.data[ctx.dataIndex];
    return v < 10 ? 5
        : v < 25 ? 7
        : v < 50 ? 9
        : v < 75 ? 11
        : 15;
}

function generateData() {
    return utils.numbers({
        count: DATA_COUNT,
        min: 0,
        max: 100
    });
}

var data = {
    labels: utils.months({count: DATA_COUNT}),
    datasets: [{
        data: generateData()
    }]
};

var options = {
    legend: false,
    tooltips: true,
    elements: {
        line: {
            fill: false,
            backgroundColor: getLineColor,
            borderColor: getLineColor,
        },
        point: {
            backgroundColor: getLineColor,
            hoverBackgroundColor: makeHalfAsOpaque,
            radius: adjustRadiusBasedOnData,
            pointStyle: alternatePointStyles,
            hoverRadius: 15,
        }
    }
};

var chart = new Chart('chart-0', {
    type: 'line',
    data: data,
    options: options
});


// eslint-disable-next-line no-unused-vars
function addDataset() {
    chart.data.datasets.push({
        data: generateData()
    });
    chart.update();
}

// eslint-disable-next-line no-unused-vars
function randomize() {
    chart.data.datasets.forEach(function(dataset) {
        dataset.data = generateData();
    });
    chart.update();
}

// eslint-disable-next-line no-unused-vars
function removeDataset() {
    chart.data.datasets.shift();
    chart.update();
}