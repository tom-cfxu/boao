//box7报警数据
// alarmListArr = [
//     {
//         startTime: "2020-10-11 10:12:10",
//         address: "分区1",
//         deviceName: "设备名称1",
//         alarmDetail: "报警详情1",
//         system: "所属系统1",
//         endTime: "2020-10-11 12:12:12",
//         alarmLevel: 'high',//hightest high normal
//     },
//     {
//         startTime: "2020-10-11 11:12:11",
//         address: "分区2",
//         deviceName: "设备名称2",
//         alarmDetail: "报警详情2",
//         system: "所属系统2",
//         endTime: "2020-10-11 12:12:12",
//         alarmLevel: 'normal',//hightest high normal
//     },
//     {
//         startTime: "2020-10-11 12:12:12",
//         address: "分区3",
//         deviceName: "设备名称3",
//         alarmDetail: "报警详情3",
//         system: "所属系统3",
//         endTime: "2020-10-11 12:12:12",
//         alarmLevel: 'normal',//hightest high normal
//     },
//     {
//         startTime: "2020-10-11 12:12:12",
//         address: "分区1",
//         deviceName: "设备名称3",
//         alarmDetail: "报警详情3",
//         system: "所属系统3",
//         endTime: "2020-10-11 12:12:12",
//         alarmLevel: 'normal',//hightest high normal
//     },
// ];
var carObj = {
    left: '10',
    right: '25',
    west: '35',
    east: '45'
};
var tunnelObj = {
    // temp: "0",//温度
    // brightness: "0",//亮度
    speedLimit1: "12",//限速1
    speedLimit2: "23",//限速2
    speedLimit3: "33",//限度3
    speedLimit4: "60",//限速4
};
var infoBoardArr = [
    { title: '情报板Z1', content: '报警内容1' },
    { title: '情报板Z2', content: '报警内容2' },
    { title: '情报板Y1', content: '报警内容3' },
    { title: '情报板Y2', content: '报警内容4' },
]
//近一个月车流
// var length = 31;
const random=(min,max)=>Math.random()*(max-min)+min
var yArr = new Array(12).fill(null).map(() => {
    return random(0,100);
}).reverse();
function testCef() {
    window.alert("你好!")
}
window.onload = () => {
    initPage();
    info_tunnel(tunnelObj);
    info_board(infoBoardArr);
    car_flow(456);
    info_car(carObj);
    carFlow_line(yArr);//当月车流
    setMyEchart8();
}
