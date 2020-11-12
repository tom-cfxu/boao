//车辆信息
function info_car(obj) {
    var { left, right, total, speed } = obj;
    setEcahrt1(left, right);
    var sum = document.getElementById('box1-sum');
    var avg = document.getElementById('box1-speed');
    sum.innerText = total + ' 辆';
    avg.innerText = speed + ' km/h';
}
//当日车流
function car_flow(num) {
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

//隧道信息
function info_tunnel(obj) {
    var { temp, brightness, speedLimit1, speedLimit2, speedLimit3, speedLimit4 } = obj;
    var box4 = document.getElementById('box4');
    //隧道基本信息
    var tunnelArr = [
        { id: "temp", title: "平均温度(℃)", isCanChange: false, value: temp, },
        { id: "brightness", title: "亮度(%)", isCanChange: false, value: brightness, },
        { id: "speedLimit1", title: "限速1(km/h)", isCanChange: true, value: speedLimit1, },
        { id: "speedLimit2", title: "限速2(km/h)", isCanChange: true, value: speedLimit2, },
        { id: "speedLimit3", title: "限速3(km/h)", isCanChange: true, value: speedLimit3, },
        { id: "speedLimit4", title: "限速4(km/h)", isCanChange: true, value: speedLimit4, },
    ];
    box4.innerHTML = ``;
    tunnelArr.forEach((item, i) => {
        var info = document.createElement('div');
        info.classList.add("box4-info");
        info.classList.add(`info${i + 1}`);
        info.innerHTML = `
            <div class="box4-info-left">
                <input disabled type="text" value="${item.value}" id="${item.id}_show">
                <label>${item.title}</label>
            </div>
            ${item.isCanChange ?
                `<div class="box4-info-right">
                <input type="text" id="${item.id}">
                <a class="btn_change" onclick="box4_changevalue(${item.id},${item.id}_show,'tunnel0${i + 1}')">设置</a>
            </div>`
                :
                ``
            }
            
            
        `;
        box4.append(info);
    })
}

function info_board(arr) {
    var box6 = document.getElementById('box6');
    //情报板信息
    box6.innerHTML = ``;
    arr.forEach((item, i) => {
        var info = document.createElement('p');
        info.classList.add('box6-p');
        info.innerHTML = `
            <span class="box6_title" id="box6_msg_title${i + 1}">${item.title}</span>
            <span class="box6_msg" >
                <span id="box6_msg${i + 1}" title="${item.content}">${limitNumber(item.content)}</span>
            </span>
            <a class="btn_change" onclick="box6_changeMsg(box6_msg_title${i + 1},box6_msg${i + 1})">
                修改
            </a>
        `;
        box6.append(info);
    })
}
//近一个月车流
function carFlow_line(yArr, length = 30) {
    length = parseInt(length);
    var dayArr = new Array(length).fill(null).map((_, i) => {
        return getDay(-i);
    }).reverse();
    var sData = yArr.map((item) => parseInt(item));
    initEchart(myEchart2, option2(dayArr, sData));
}
//报警信息
var alarmArr = getAlarmList() == null ? [] : getAlarmList();
//添加报警
function add_alarm(obj) {
    alarmArr.push(obj);
    alarmList(alarmArr);
}
//删除报警列表
function deleteAlarmList(index) {
    var r = window.confirm("确定删除?");
    if (r == true) {
        alarmArr.splice(index, 1);
        saveAlarmList(alarmArr);
        alarmList(alarmArr);
    }
}
//开启/关闭全局报警
function alarm_button(bool) {
    var alarmBorder = document.getElementById('alarm-border');
    if (bool) {
        alarmBorder.classList.remove('safe');
        alarmBorder.classList.add('alarm');
    } else {
        alarmBorder.classList.remove('alarm');
        alarmBorder.classList.add('safe');
    }

}
//故障率
function failure_rate(array) {
    initEchart(myEchart8('box8_1'), option8('#3FA7DC', array[0].title, array[0].precent));
    initEchart(myEchart8('box8_2'), option8('#00AC92', array[1].title, array[1].precent));
    initEchart(myEchart8('box8_3'), option8('#F95C5D', array[2].title, array[2].precent));
    initEchart(myEchart8('box8_4'), option8('#FE8642', array[3].title, array[3].precent));

}

