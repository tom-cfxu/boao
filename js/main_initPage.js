function initPage() {
    var boxAll = document.querySelectorAll('.box');

    //各框菜单合集
    menuArr = [
        { title: "隧道车辆分布", iconUrl: './img/icon/icon-carInfo.svg' },
        { title: "隧道基本信息", iconUrl: './img/icon/icon-tunnel.svg' },
        { title: "柱状图", iconUrl: './img/icon/icon-bar.svg' },
        { title: "情报板信息", iconUrl: './img/icon/icon-infoBoard.svg' },
        { title: "报警信息", iconUrl: './img/icon/icon-alarm.svg' },
        { title: "故障率", iconUrl: './img/icon/icon-malfunction.svg' },
    ];
    //添加菜单
    boxAll.forEach((box, i) => {
        var menu = document.createElement('p');
        menu.classList.add("menu");
        menu.innerHTML = `
            <img class="menu-icon" src="${menuArr[i].iconUrl}" alt="">
            <span>${menuArr[i].title}</span>
        `
        box.appendChild(menu);
    })
}
function tunnelInfo() {
    var box4 = document.getElementById('box4');
    //隧道基本信息
    tunnelArr = [
        { id: "temp", title: "平均温度(℃)", value: "0", min: "", max: "" },
        { id: "brightness", title: "亮度(%)", value: "0", min: "", max: "" },
        { id: "speedLimit1", title: "限速1(km/h)", value: "0", min: "", max: "" },
        { id: "speedLimit2", title: "限速2(km/h)", value: "0", min: "", max: "" },
        { id: "speedLimit3", title: "限速3(km/h)", value: "0", min: "", max: "" },
        { id: "speedLimit4", title: "限速4(km/h)", value: "0", min: "", max: "" },
    ];
    box4.innerHTML = ``;
    tunnelArr.forEach((item, i) => {
        var info = document.createElement('div');
        info.classList.add("box4-info");
        info.classList.add(`info${i + 1}`);
        info.innerHTML = `
            <div class="box4-info-left">
                <input disabled type="text" value="${item.value}" id="${item.id}_show">
                <label >${item.title}</label>
            </div>
            <div class="box4-info-right">
                <input type="text" id="${item.id}">
                <a class="btn_change" onclick="box4_changevalue(${item.id},${item.id}_show)">设置</a>
            </div>
            
        `;
        box4.append(info);
    })
}
function infoBoard() {
    var box6 = document.getElementById('box6');
    //情报板信息
    infoBoardArr = [
        { title: '情报板Z1', content: '前方发生事故,请减速慢行!' },
        { title: '情报板Z2', content: '前方发生事故,请减速慢行!' },
        { title: '情报板Y1', content: '前方发生事故,请减速慢行!' },
        { title: '情报板Y2', content: '前方发生事故,请减速慢行!' },
    ]
    box6.innerHTML = ``;
    infoBoardArr.forEach((item, i) => {
        var info = document.createElement('p');
        info.classList.add('box6-p');
        info.innerHTML = `
            <span class="box6_title" id="box6_msg_title${i + 1}">${item.title}</span>
            <span class="box6_msg" >
                <span id="box6_msg${i + 1}">${item.content}</span>
            </span>
            <a class="btn_change" onclick="box6_changeMsg(box6_msg_title${i + 1},box6_msg${i + 1})">
                修改
            </a>
        `;
        box6.append(info);
    })
}
//当月车流
function carFlow(num) {
    var carflowNum = num;
    var box3 = document.getElementById('box3_value');
    box3.innerHTML = '';
    var value = '0'.repeat(5 - carflowNum.toString().length) + carflowNum;
    // console.log(value.length);
    var result = '';
    for (var i in value) {
        result += `<a class="box3-value-a a${i + 1}">${value[i]}</a>`
    }
    box3.innerHTML = result;
}
//故障率
// var process1;
// function failureRate() {
//     process1 = new ProgressBar('box8_1', '#1E9DD1', 34);

// }
// function test() {
//     process1.setValue(50);
// }
