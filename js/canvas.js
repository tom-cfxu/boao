function ProgressBar(div, color, n) {
    this.div = div;
    this.color = color;
    this.n = n;
    this.canvas = null;//获取canvas元素
    // console.log(this.canvas);
    this.context = null;//获取画图环境,
    this.centerX = null;//获取canvasX轴中心点
    this.centerY = null;//获取canvasY轴中心点height
    this.rad = Math.PI * 2 / 100;//将360弧度分成100份,每份就是rad度
    this.speed = 0.2;//加载快慢
    this.radius = 30;//半径
    this.lineWidth = 10;//圆环厚度
    //
    this.initCanvas = function () {
        this.canvas = document.getElementById(this.div);//获取canvas元素
        this.context = this.canvas.getContext('2d');//获取画图环境,
        this.centerX = this.canvas.width / 2;//获取canvasX轴中心点
        this.centerY = this.canvas.height / 2;//获取canvasY轴中心点height
    }
    //绘制活动的进度条
    this.moveCircle = function (precent) {
        this.context.save();
        this.context.strokeStyle = this.color; //设置描边样式
        this.context.lineWidth = this.lineWidth; //设置线宽
        this.context.beginPath(); //路径开始
        //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针false/逆时针true)
        this.context.arc(this.centerX, this.centerY, this.radius, -Math.PI / 2, -Math.PI / 2 + precent * this.rad, false);
        this.context.stroke(); //绘制
        this.context.closePath(); //路径结束
        this.context.restore();//结束本次画笔
    }
    //绘制背景外圈
    this.bgCircle = function () {
        this.context.save();
        this.context.beginPath();
        this.context.lineWidth = this.lineWidth; //设置线宽
        this.context.strokeStyle = "#ffffff44";
        this.context.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, false);
        this.context.stroke();
        this.context.closePath();
        this.context.restore();
    }
    //百分比文字绘制
    this.text = function (precent) {
        this.context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
        this.context.strokeStyle = "transparent"; //设置描边样式
        this.context.fillStyle = "#fff"; //设置描边样式
        this.context.font = "bold  18px Arial"; //设置字体大小和字体
        //绘制字体，并且指定位置
        this.context.fillText(precent.toFixed(0) + "%", this.centerX - 18, this.centerY + 5);
        this.context.stroke(); //执行绘制
        this.context.restore();
    }
    //
    this.init = function () {
        this.initCanvas();
        this.bgCircle();
        this.moveCircle(this.n);
        this.text(this.n);
    };
    //修改当前值 清除画布,重新绘制
    this.setValue = function (n) {
        console.log('清除画布!')
        this.canvas.height = this.canvas.height;
        this.initCanvas();
        this.bgCircle();
        this.moveCircle(n);
        this.text(n);
    }
    this.init();
}
