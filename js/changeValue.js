function box4_changevalue(input, input_show) {
    // console.log()
    if (input.value != '' && !isNaN(input.value)) {
        input_show.value = input.value;
        input.value = '';
    } else {
        window.alert('请输入数值!');
        input.value = '';
    }

}
function box6_changeMsg(title, msg) {

    var msgNew = window.prompt("请输入新值", msg.innerText);
    if (msgNew != null) {
        msg.innerText = msgNew;
        window.alert(title.innerText + msgNew);
    }

}