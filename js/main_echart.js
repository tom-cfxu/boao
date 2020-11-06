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
myEchart2 = echarts.init(document.getElementById('bar'));
option2 = {
    color: ['#1D9CD1'],
    grid: {
        left: '5%',
        containLabel: true,
        bottom: '15%',
        right: '10%',
    },
    tooltip: {

    },
    dataZoom: [
        {
            type: 'slider',
            handleStyle: {

            },
            textStyle: {
                color: '#fff'
            }
        },
        {
            type: 'inside'
        },
    ],
    xAxis: {
        type: 'category',
        data: ['11/1', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false,

        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#1D9CD1',
                width: 1,
            }
        },
        axisLabel: {
            color: '#1D9CD1',
            fontWeight: 'bolder',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#1D9CD111'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,

        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#1D9CD1',
                width: 1,
            }
        },
        axisLabel: {
            color: '#1D9CD1',
            fontWeight: 'bolder',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#1D9CD111'
            }
        }
    },
    series: [{
        name: '系列名',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.2)'
        }
    }]
};
function r(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};
function getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    // var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tMonth + "-" + tDate;
}
function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
}
function setMyEchart2() {
    var length = 31;
    var dayArr = new Array(length).fill(null).map((item, i) => {
        return getDay(-i);
    }).reverse();
    var yArr = new Array(length).fill(null).map((item, i) => {
        return r(20, 100);
    }).reverse();
    option2.xAxis.data = dayArr;
    option2.series[0].data = yArr;
    option2 = { ...option2 }
    initEchart(myEchart2, option2);
}

function myEchart8(div) {
    return echarts.init(document.getElementById(div));
}

function option8(color, name, precent) {
    return {
        color: [color, '#D5D5D555'],
        tooltip: {
            show: false,
            trigger: 'item',
            position: ['10%', '10%'],
            formatter: '{a} <br/>{b}:{d}%'
        },
        legend: {
            show: false,
            data: ['故障率', '2']
        },
        series: [
            {
                name: '故障率',
                animation: false,
                type: 'pie',
                radius: ['80%', '100%'],
                // center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    fontSize: '15',
                    fontWeight: 'bold',
                    formatter: '{b}\n\n{d}%'
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: precent,
                        name: name,
                        tooltip: {
                            show: true,
                        }
                    },
                    {
                        value: 100 - precent,
                        name: '2',
                        label: {
                            show: false,
                            position: 'center'
                        },
                        tooltip: {
                            show: false,
                        }
                    },
                ]
            }
        ]
    };
}
function setMyEchart8() {
    initEchart(myEchart8('box8_1'), option8('#3FA7DC', '设备1', 60));
    initEchart(myEchart8('box8_2'), option8('#7FFFD4', '设备2', 30));
    initEchart(myEchart8('box8_3'), option8('#F95C5D', '设备3', 40));
    initEchart(myEchart8('box8_4'), option8('#FE8642', '设备4', 50));
}


