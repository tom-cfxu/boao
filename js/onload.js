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
    left: '20',
    right: '50',
    total: '70',
    speed: '50'
};
var tunnelObj = {
    temp: "0",//温度
    brightness: "0",//亮度
    speedLimit1: "0",//限速1
    speedLimit2: "0",//限速2
    speedLimit3: "0",//限度3
    speedLimit4: "0",//限速4
};
var infoBoardArr = [
    { title: '情报板Z1', content: '前方发生事故,请减速慢行!' },
    { title: '情报板Z2', content: '前方发生事故,请减速慢行!' },
    { title: '情报板Y1', content: '前方发生事故,请减速慢行!' },
    { title: '情报板Y2', content: '前方发生事故,请减速慢行!' },
]
//近一个月车流
var length = 31;
var yArr = new Array(length).fill(null).map(() => {
    return r(20, 100);
}).reverse();
function testCef() {
    window.alert("你好!")
}
window.onload = () => {
    info_tunnel(tunnelObj);
    info_board(infoBoardArr);
    initPage();
    car_flow(934000);
    info_car(carObj);
    carFlow_line(yArr, length);//当月车流
    setMyEchart8();
    alarmList(alarmArr);
}
