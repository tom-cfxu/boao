//用js限制字数，超出部分以省略号...显示
function limitNumber(txt, length = 20) {
    var str = txt;
    if (txt.length > length) {
        str = str.substr(0, length) + '...';
    }
    return str;
}
function initPage() {
    var boxAll = document.querySelectorAll('.box');

    //各框菜单合集
    menuArr = [
        { title: "隧道车辆分布", iconUrl: 'img/icon/icon-carInfo.svg' },
        { title: "隧道基本信息", iconUrl: 'img/icon/icon-tunnel.svg' },
        { title: "当月车流", iconUrl: 'img/icon/icon-line.svg' },
        { title: "情报板信息", iconUrl: 'img/icon/icon-infoBoard.svg' },
        { title: "报警信息", iconUrl: 'img/icon/icon-alarm.svg' },
        { title: "故障率", iconUrl: 'img/icon/icon-malfunction.svg' },
    ];
    //添加菜单
    boxAll.forEach((box, i) => {
        var menu = document.createElement('p');
        menu.classList.add("menu");
        menu.innerHTML = `
            <img class="menu-icon" style="width:30px;height:30px" src="${menuArr[i].iconUrl}" >
            &nbsp;&nbsp;<span>${menuArr[i].title}</span>
        `
        box.appendChild(menu);
    })
}

//日期排序
function compareByDate(arr1, arr2) {
    var time1 = new Date(arr1); // year, month, day
    var time2 = new Date(arr2);
    return time2 - time1;
}

//保存报警列表到本地
function saveAlarmList(Arr) {
    window.localStorage.setItem('alarmList', JSON.stringify(Arr));
}
//获取本地存储的报警列表
function getAlarmList() {
    return JSON.parse(window.localStorage.getItem('alarmList'))
}

//生成报警列表
function alarmList(alarmListArr) {
    var ul = document.getElementById('box7-tbody');
    var result = ``;
    var sortArr = alarmListArr.sort((a, b) => compareByDate(a.startTime, b.startTime));
    saveAlarmList(sortArr);
    sortArr.forEach((item, i) => {
        result += `
            <li class="box7-tbody-li">
                <ul class="box7-tbody-tr ${item.alarmLevel == 'high' ? 'alarm' : ''}">
                    <li title="${item.startTime}" >
                        ${limitNumber(item.startTime)}
                    </li>
                    <li title="${item.address}">
                        ${limitNumber(item.address)}
                    </li>
                    <li title="${item.deviceName}">
                        ${limitNumber(item.deviceName)}
                    </li>
                    <li class="detail" title="${item.alarmDetail}">
                        ${limitNumber(item.alarmDetail)}
                    </li>
                    <li title="${item.system}">
                        ${limitNumber(item.system)}
                    </li>
                    <li title="${item.endTime}">
                        ${limitNumber(item.endTime)}
                    </li>
                    
                    <a class="btn btn_change delete" type="button" onclick="deleteAlarmList(${i})">删除</a>
                    
                </ul>
            </li>
        `;
    });
    ul.innerHTML = result;
}