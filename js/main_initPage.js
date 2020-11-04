function initPage() {
    var boxAll = document.querySelectorAll('.box');

    //各框菜单合集
    menuArr = [
        { title: "隧道车辆信息", iconUrl: '' }
    ];
    //添加边框
    boxAll.forEach((box, i) => {
        var menu = document.createElement('div');
        menu.classList.add("menu");
        menu.innerHTML = `
            <p>${menuArr[i].title}</p>
        `
        box.appendChild(menu);
    })
}