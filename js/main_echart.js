function initEchart(myChart, option) {
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

myEchart1 = echarts.init(document.getElementById('pie-car'));
option1 = {
    color: ['#00AC92', '#1D9CD1'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position: ['80%', '30%']
    },
    legend: {
        show: false,
        data: ['左侧车道', '右侧车道']
    },
    series: [
        {
            name: '车辆分布',
            type: 'pie',
            clockwise: false,
            radius: ['40%', '80%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                formatter: '{b} \n {d}%',
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 33, name: '左侧车道' },
                { value: 27, name: '右侧车道' },
            ]
        }
    ]
};
