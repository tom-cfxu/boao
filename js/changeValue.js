//修改隧道基本信息
function box4_changevalue(input, input_show, title) {
    if (input.value != '' && !isNaN(input.value)) {
        input_show.value = parseFloat(input.value);
        input.value = '';
        // window.alert(input_show.value + title)
        try {
            window.OnReceive(title + ":" + input_show.value);
        } catch (error) {
            console.log(error)
        }
    } else {
        window.alert('请输入数值!');
        input.value = '';
    }

}
//修改情报板
function box6_changeMsg(title, msg) {
    var msgNew = window.prompt("请输入新值", msg.innerText);
    if (msgNew != null) {
        msg.innerText = limitNumber(msgNew, 13);
        msg.setAttribute('title', msgNew);
        try {
            window.OnReceive(title.innerText + ":" + msgNew);
        } catch (error) {
            console.log(error)
        }
        // window.alert(title.innerText + msgNew);
    }

}
