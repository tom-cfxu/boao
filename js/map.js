

var outputPath = 'tiles/';    //地图瓦片所在的文件夹
var fromat = ".png";    //格式
var map = new BMap.Map("container")
var point = new BMap.Point(120.230066, 30.246839);  // 创建点坐标
map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别
map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map.setMinZoom(15);
map.setMaxZoom(19);
var ctrlNav = new window.BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    type: BMAP_NAVIGATION_CONTROL_LARGE
});
map.addControl(ctrlNav);
//第5步：向地图中添加缩略图控件  
var ctrlOve = new window.BMap.OverviewMapControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
    isOpen: 1
});
map.addControl(ctrlOve);


// map.setMapStyle({styleJson: mapStyleV1 });//样式
//自定义标注
function SquareOverlay(coordinate, title, type) {
    this._coordinate = coordinate;
    this._title = title;
    this._type = type;
    this._length = 50;

}
// 继承API的BMap.Overlay
SquareOverlay.prototype = new BMap.Overlay();
// 实现初始化方法  
SquareOverlay.prototype.initialize = function (map) {
    this._map = map;
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = "50px";
    div.style.height = "50px";
    div.classList.add("map-marker");
    if (this._type == 'site') {
        div.innerHTML = `
        <img class="map-marker-icon" src="img/icon/icon-marker-blue.svg" />
        <p class="map-marker-title">${this._title}</p>
        `
    } else if (this._type == 'workstation') {
        div.innerHTML = `
        <img class="map-marker-icon" src="img/icon/icon-marker-red.svg" />
        <p class="map-marker-title red">${this._title}</p>
        `
    }

    map.getPanes().markerPane.appendChild(div);

    this._div = div;
    this._div.addEventListener('click', () => {
        // window.alert(this._title);
        try {
            window.OnReceive(this._title);
        } catch (error) {
            console.log(error)
        }
    })
    return div;
    // div.style.background = this._color;
}
// 实现绘制方法   
SquareOverlay.prototype.draw = function () {
    // 根据地理坐标转换为像素坐标，并设置给容器    
    var position = this._map.pointToOverlayPixel(this._coordinate);
    this._div.style.left = position.x - this._length / 2 + "px";
    this._div.style.top = position.y - this._length / 2 + "px";
}
var pointArr = [
    { name: '站点1', point: new BMap.Point(120.236614, 30.242994), type: 'site' },
    { name: '站点2', point: new BMap.Point(120.23011, 30.246863), type: 'site' },
    { name: '站点3', point: new BMap.Point(120.223858, 30.250513), type: 'site' },
    { name: '工作站1', point: new BMap.Point(120.235285, 30.243774), type: 'workstation' },
    { name: '工作站2', point: new BMap.Point(120.224905, 30.249928), type: 'workstation' },
];
function map_marker() {
    pointArr.forEach((item) => {
        var mySquare = new SquareOverlay(item.point, item.name, item.type);
        map.addOverlay(mySquare);
    })
}
// map_marker();
