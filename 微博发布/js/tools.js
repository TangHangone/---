var tools = {
showCenter: function (obj) {
    // 可以动态计算left和top， window.onresize的时候重新计算
    this.setStyle(obj, {
        display: "block",
        position: "absolute"
    })
    /* const center = () => {
        this.getBodySize()
    } */
    let _this = this;
    window.onresize = (function center () {
        
        let left = (_this.getBodySize().width - obj.offsetWidth) / 2 + "px",
            top = (_this.getBodySize().height - obj.offsetHeight) / 2 + "px";
        
        // 解构赋值
        _this.setStyle(obj, {left, top});
        return center;
    })();

},
 move: function (obj, attr, end, time, fn) {
    // 先清除上一次的timer
    clearInterval(obj.timer);
    // 获取起点值
    let start = parseInt(this.getStyle(obj, attr));
    // 计算总距离
    let distance = end - start;
    // 根据时间计算总步数, 为了避免超出终点值，向下取整
    let steps = Math.floor(time / 20);
    // 速度  px/步
    let speed = distance / steps;
    
    // 开始运动
    let n = 0; // 记录当前步数
    obj.timer = setInterval(function () {
        n++;
        obj.style[attr] = start + n*speed + "px";
        // 如果到达终点（步数走完）
        if(n === steps) {
            clearInterval(obj.timer);
            // 有可能距离终点还差0.几步
            obj.style[attr] = end + "px";
            // 执行回调
            fn && fn();
        }
    }, 20);
}}