//获取当前时间 yyyy-MM-dd HH:MM:SS
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    },
//文字无线滚动
    <style lang="">
        #box {width: 300px;overflow: hidden;}
        #inner {width: 1000px;overflow: hidden;}
        p { display: inline-block;}
    </style>
    <div id="box">
    <div id="inner">
      <p>文字如果超出了宽度自动向左滚动文字如果超出了宽度自动向左滚动。</p>
    </div>
    </div>
    var box = document.getElementById('box');
    var inner = document.getElementById('inner');
    var p = inner.getElementsByTagName('p')[0];
    var p_w = p.offsetWidth;  
    window.onload = function () {
    if (box.offsetWidth > p.offsetWidth) { return false }
    inner.innerHTML += inner.innerHTML;
    setInterval("fun2()", 1000);
    }
    function fun2() {
    if (p_w > box.scrollLeft) {
      box.scrollLeft++;
      setTimeout("fun2()", 30)
    } else {
      setTimeout("fun1()", 200);
    }
    };
    function fun1() {
    box.scrollLeft = 0;
    fun2();
    }
