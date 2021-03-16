function initEchart(myChart, option) {
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

myEchart1 = echarts.init(document.getElementById('pie-car'));
function option1(left, right) {
    return {
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
                    { value: left, name: '左侧车道' },
                    { value: right, name: '右侧车道' },
                ]
            }
        ]
    }
};
function setEcahrt1(left, right) {
    initEchart(myEchart1, option1(left, right));
}
myEchart2 = echarts.init(document.getElementById('bar'));
function option2(xData, sData) {
    var color1 = '#3FA7DC'
    return {
        color: [color1],
        grid: {
            left: '5%',
            containLabel: true,
            bottom: '12%',
            right: '10%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        dataZoom: [
            {
                type: 'slider',
                height: 10,
                bottom: '5%',
                handleStyle: {
                    color: color1,
                },
                handleSize: '200%',
                handleIcon: 'M827.505255 195.268312C652.829957 20.593014 369.558335 20.593014 194.883037 195.269335 20.202623 369.94975 20.201599 653.220349 194.876897 827.895647c174.681438 174.681438 457.952037 174.679391 632.632451 0C1002.18567 653.220349 1002.18567 369.94975 827.505255 195.268312zM352.449679 703.530175l-63.700811 0L288.748868 319.832306l63.700811 0L352.449679 703.530175zM543.467177 703.530175l-63.700811 0L479.766366 319.832306l63.700811 0L543.467177 703.530175zM735.848743 703.530175l-63.700811 0L672.147932 319.832306l63.700811 0L735.848743 703.530175z',
                borderColor: 'transparent',
                textStyle: {
                    color: '#fff'
                }
            },
            // {
            //     type: 'inside'
            // },
        ],
        xAxis: {
            type: 'category',
            data: xData,
            axisTick: {
                show: false,

            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: color1,
                    width: 1,
                }
            },
            axisLabel: {
                color: color1,
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
                    color: color1,
                    width: 1,
                }
            },
            axisLabel: {
                color: color1,
                fontWeight: 'bolder',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: color1 + '11'
                }
            }
        },
        series: [{
            name: '本日车流',
            data: sData,
            type: 'line',
            areaStyle: {},
            // smooth: true,
            color: new echarts.graphic.LinearGradient(
                1, 0, 0, 1,
                [
                    { offset: 0, color: '#3FA7DC' },
                    { offset: 1, color: color1 + '11' }
                ]
            )
        }]
    };
}

function r(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};
//传入天数day,返回距离昨天day天的日期,格式月份-日期
function getDay(day) {
    var today = new Date();
    var yesterday = new Date(today.setTime(today.getTime() - 24 * 60 * 60 * 1000));
    // console.log(yesterday);
    var targetday_milliseconds = yesterday.getTime() + 1000 * 60 * 60 * 24 * day;
    yesterday.setTime(targetday_milliseconds); //注意，这行是关键代码
    // var tYear = today.getFullYear();
    var tMonth = yesterday.getMonth();
    var tDate = yesterday.getDate();
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
                // animation: false,
                type: 'pie',
                radius: ['55%', '80%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center',
                    fontSize: '24',
                    fontWeight: 'bold',
                    formatter: '{b}\n\n{d}%'
                },
                labelLine: {
                    show: false
                },
                silent: false,
                animation:false,
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
                        },
                        emphasis:{
                            itemStyle:{
                                color:'#D5D5D555',
                            }
                        }
                    },
                ]
            }
        ]
    };
}
function setMyEchart8() {
    initEchart(myEchart8('box8_1'), option8('#3FA7DC', '设备1', 60));
    // initEchart(myEchart8('box8_2'), option8('#00AC92', '设备2', 30));
    // initEchart(myEchart8('box8_3'), option8('#F95C5D', '设备3', 40));
    // initEchart(myEchart8('box8_4'), option8('#FE8642', '设备4', 50));
}


