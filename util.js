
/*
*获取当前时间 yyyy-MM-dd HH:MM:SS
*/
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

/*
*文字无线滚动
*/
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

/*
*postMessage 代替ifame
*/
<div class="iframe-box">
  <div class="phone">
    <iframe name="myiframe" style="width:100%;height:580px" id="iframeId" :src="iframeUrl" frameborder="0" align="left" width="200" height="200" scrolling="no">
    </iframe>
  </div>
</div>
<style>
  .iframe-box{
    overflow: hidden;
    box-sizing: border-box;
    .phone{
      margin:20px 100px 0;
      background-image:url("../../../../static/img/phone_icon.png");
      background-repeat:no-repeat;
      background-size:100%;
      height:100%;
      padding:100px 16px;
      box-sizing:border-box;
      width: 354px;
      overflow: hidden;
    }
  }
</style>
this.iframeUrl = "http://m.newgiftmall.com:8001/#/detail?id=1&preview=1";
let iframeId = document.getElementById('iframeId');
__detailPreviewObj = _data.data;
iframeId.onload = function(){
  iframeId.contentWindow.postMessage(__detailPreviewObj,'*');
  // window.frames[0].postMessage(__detailPreviewObj,"*");
}
 
/*
*深度复制
*/
var array = [1,2,3,4,5]; 
var array1 = array; 
array[0] = 'hhhh'; 
console.log(array); //直接赋值 指针引用还是原来那个 导致两个都会变
解决办法：var array = [1,2,3,4,5]; var array1 = JSON.parse(JSON.stringify(array)); array[0] = 'hhhh'; console.log(array);
解决办法：var array = [1,2,3,4,5]; var array1 = array.map(resp=>{return resp}); array[0] = 'hhhh'; console.log(array);

   
