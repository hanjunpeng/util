
/*
* 获取当前时间 yyyy-MM-dd HH:MM:SS
*/
// Date方法扩展一个方法 使用方法： (new Date).format("yyyy-MM-dd hh:mm:ss")
Date.prototype.format = function (t) {
    var n = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var r in n) {
        var e = n[r];
        new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e : ("00" + e).substr(("" + e).length)))
    }
    return t
},
<!-----------------------------------------优美的下划线------------------------------------------------------->
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
<!-----------------------------------------优美的下划线------------------------------------------------------->

/*
* 获取每年多少天，以过去多少天，所占百分比
*/
    var box = document.getElementById('box');
   //获取每年是否是瑞年或者平年
    function isLeapYear(){
        var leapyear = getYear();
        if(leapyear%400 === 0){
            return true
        }else if(leapyear%4===0 && leapyear%100!==0){
            return true
        }else{
            return false
        }
    };
    //获取每年总共多少天
    function getDayOfYear(){
        return isLeapYear()?366:365
    };
    //获取是哪一年
    function getYear(){
        return new Date().getFullYear()
    };
    //获取已过去多少天
    function getDays(){
        var start = new Date();
        start.setMonth(0);
        start.setDate(1);
        // start就是今年的第一天
        var offset = new Date().getTime() - start.getTime();
        return parseInt(offset/1000/60/60/24)+1
    };
    //获取多少天所占比重
    function getPercent(){
        return (getDays()*100/getDayOfYear()).toFixed(1)
    };
    //初始化
    function init(){
        var year = getYear();
        var day = getDays();
        var precent = getPercent();
        console.log(year+'年,'+'已过去'+day+'天,'+'所占百分比'+precent)
        box.innerHTML = year+'年,'+'已过去'+day+'天,'+'所占百分比'+precent+'%'
    }
    init();
<!-----------------------------------------优美的下划线------------------------------------------------------->

/*
* 滚动到顶部
*/
    function setScrollTop(height){
        if(document.documentElement&&document.documentElement.scrollTop){
        document.documentElement.scrollTop=height;
        }else if(document.body){
            document.body.scrollTop=height;
        }
    }
    setScrollTop(0)
<!-----------------------------------------优美的下划线------------------------------------------------------->
/*
* 取窗口滚动条高度 
*/
    function getScrollTop(){
        var scrollTop=0;
        if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
        }else if(document.body){
            scrollTop=document.body.scrollTop;
        }
        return parseFloat(scrollTop);
    }
<!-----------------------------------------优美的下划线------------------------------------------------------->
/*
*封装ajax
*/
 function ajax(options) {
      var xhr = null;
      var params = formsParams(options.data);
      //创建对象
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      // 连接
      if (options.type == "GET") {
        xhr.open(options.type, options.url + "?" + params, options.async);
        xhr.send(null)
      } else if (options.type == "POST") {
        xhr.open(options.type, options.url, options.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          options.success(xhr.responseText);
        }
      }
      function formsParams(data) {
        var arr = [];
        for (var prop in data) {
          arr.push(prop + "=" + data[prop]);
        }
        return arr.join("&");
      }
    }
    ajax({
          url:'',
          type:'POST',
          async:true,
          data:{
            name:'h',
            age:18
          },
          success:function(data){
            console.log(data)
          }
        })
<!-----------------------------------------优美的下划线------------------------------------------------------->
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

<!-----------------------------------------优美的下划线------------------------------------------------------->
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

接收方：const that=this;
       window.addEventListener('message', function(ev) {
        var data = ev.data;
        that.initData(data)
       }, false);
<!-----------------------------------------优美的下划线------------------------------------------------------->
 
/*
*深度复制
*/
var array = [1,2,3,4,5]; 
var array1 = array; 
array[0] = 'hhhh'; 
console.log(array); //直接赋值 指针引用还是原来那个 导致两个都会变
解决办法：var array = [1,2,3,4,5]; var array1 = JSON.parse(JSON.stringify(array)); array[0] = 'hhhh'; console.log(array);
解决办法：var array = [1,2,3,4,5]; var array1 = array.map(resp=>{return resp}); array[0] = 'hhhh'; console.log(array);
<!-----------------------------------------优美的下划线------------------------------------------------------->

/*
* 列表上下移动 效果
*/
   列表是一个数组，使用splice（当前项索引,2,下一向或者上一项,当前项）

<!-----------------------------------------优美的下划线------------------------------------------------------->
/*
* 倒计时
*/
1：如果后台给时间戳  就不用在转化 
    this.showTime = ["00","00","00","00"]
    this.leftTime = this.list.countdown_nopay_order_cancel;//待付款
    this.timer = setInterval(()=>{
        this.leftTime = this.showCountDown(this.leftTime);
        this.leftTime = this.leftTime - 1;
    })
    //更新时间
    showCountDown(leftTimeNow){
      if(leftTimeNow<=0){
        return ["0","0","0","0"]
      };
       var days = parseInt(leftTimeNow / 60 / 60 / 24 , 10); //计算剩余的天数 
      var hours = parseInt(leftTimeNow / 60 / 60 % 24 , 10); //计算剩余的小时 
      var minutes = parseInt(leftTimeNow / 60 % 60, 10);//计算剩余的分钟 
      var seconds = parseInt(leftTimeNow % 60, 10);//计算剩余的秒数 
      days = this.checkTime(days); 
      hours = this.checkTime(hours); 
      minutes = this.checkTime(minutes); 
      seconds = this.checkTime(seconds);
      // leftTimeNow=leftTimeNow-1000;
      return [days,hours,minutes,seconds]
    }
    2:如果不是时间戳 需要转化为时间戳在进行计算
    this.leftTime=( (new Date(this.list.so_createTime)).getTime() + (30*60*1000)  - (new Date(this.list.now)).getTime() ) 30分钟
    this.leftTime=( (new Date(this.list.so_payTime)).getTime() + (72*60*60*1000) - (new Date(this.list.now)).getTime() ) 72小时
    
    <!-----------------------------------------优美的下划线------------------------------------------------------->
    /*
    *使用axios如何取消重复请求
    */
    vue项目里：
    处理axios的请求 http.js 文件中
    let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
    let cancelToken = axios.CancelToken;
    let removePending = (config) => {
        for(let p in pending){
            if(pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
                pending[p].f(); //执行取消操作
                pending.splice(p, 1); //把这条记录从数组中移除
            }
        }
    }
    
    axios.interceptors.request.use(
        config=>{
            removePending(config); //在一个ajax发送前执行一下取消操作
            config.cancelToken = new cancelToken((c)=>{
               // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
               pending.push({ u: config.url + '&' + config.method, f: c });  
           });
        }
    )

    axios.interceptors.response.use(
        response=>{
            removePending(response.config);  
        }
    )
    参考案例地址：https://www.jianshu.com/p/4445595488e2
    <!-----------------------------------------优美的下划线------------------------------------------------------->
    app调试 用vconsole 插件
    <loading v-if="!hideLoading" :show="$store.state.loading.isShow"></loading>
    if(window.location.search.match("debug=true")){
        this.hideLoading=true;
        new vconsole(); //url里面有debug参数进入调试模式
    } 
    <!-----------------------------------------优美的下划线------------------------------------------------------->

    在ui-组件库中，很多使用了锚点#, 
    <div class="anchor"><h2 id="变量覆盖">变量覆盖</h2><a href="#变量覆盖"></h2>#</div>
    a 链接的#后的和id=“”一样就行了，只要加id=“”就可以了，很方便。
    页面间跳转用锚点直接能确定到那个位置，
    <a href="http://www.baidu.com#变量覆盖"> 那个页面要有id=“变量覆盖”

    <!-----------------------------------------优美的下划线------------------------------------------------------->

    移动端rem适配，在写商城时候rem在曲面屏手机里样式错乱，参考文档：https://www.jianshu.com/p/8300a5ec6480
    添加js：
        <script type="text/javascript">
        !function(e){var t={};t.resizeEvt="orientationchange"in window?"orientationchange":"resize",t.Html=e.getElementsByTagName("html")[0],t.widthProportion=function(){var n=Number((e.body&&e.body.clientWidth||t.Html.offsetWidth)/10);return n>76.8?76.8:n<32?32:n},t.changePage=function(){t.Html.setAttribute("style","font-size:"+t.widthProportion()+"px"),t.correctPx()},t.correctPx=function(){var e=document.documentElement,n=e.clientWidth;if(n&&!(n>768)){var i=document.createElement("div");i.style.width="10rem",i.style.height="0",t.Html.appendChild(i);var o=n,d=i.clientWidth/o;1!==d&&(e.style.fontSize=n/10/d+"px"),t.Html.removeChild(i)}},t.changePage(),document.addEventListener&&(window.addEventListener(t.resizeEvt,t.changePage,!1),document.addEventListener("DOMContentLoaded",t.changePage,!1))}(document);
        </script>

    <!-----------------------------------------优美的下划线------------------------------------------------------->
    
    公共弹框
    <!-- 弹框 -->
    <section class="wrap-dialog" id="dialog">
        <div class="dialog-box">
            <div class="title">提示</div>
            <p>{$cellphone}</p>
            <div class="dialog-foot">
                <span id="sureBtn">确定</span>
                <span id="cancelBtn">取消</span>
            </div>
        </div>
    </section>
    /* 弹框 */
    #dialog{
        display:none;
    }
    .wrap-dialog{
        width:100%;
        height: 100%;
        background:rgba(0,0,0,0.2);
        z-index: 2;
        position:fixed;
        top:0;
        left:0;
    }
    .wrap-dialog .dialog-box{
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-58.5px;
        margin-left:-119px;
        width:238px;
        height:117px;
        background: #ffffff;
        color:#666666;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border:1px solid rgba(235, 235, 235, 1);
        z-index: 3;
        text-align:center;
        /* position:relative; */
    }
    .dialog-box .title{
        margin-top:17px;
        font-size:16px;
        color:#000;
    }
    .dialog-box p{
        font-size:14px;
        margin-top:10px;
        color:#333333bf;
    }
    .dialog-box .dialog-foot{
        width:100%;
        height:40px;
        position:absolute;
        bottom:0;
        display:flex;
        font-size:14px;
        border-top:1px solid #eee;
        background:#eeeeee54;
    }
    .dialog-foot span{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .dialog-foot span:nth-child(1){
        border-right:1px solid #eee;
    }
    .dialog-foot span:nth-child(1) a{
        color:#666666
    }
    <!-- android打电话弹框 -->
    <section class="wrap-phone" id="wrapPhone">
        <div class="phone-box">
            <p>{$cellphone}</p>
            <div class="phone-foot">
                <span id="phoneCancel">取消</span>
                <span id="phoneSure">呼叫</span>
            </div>
        </div>
    </section>
    /* android电话弹框 */
    #wrapPhone{
        display:none
    }
    .wrap-phone{
        width:100%;
        height: 100%;
        background:rgba(0,0,0,0.4);
        z-index: 4;
        position:fixed;
        top:0;
        left:0;
    }
    .wrap-phone .phone-box{
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-58.5px;
        margin-left:-119px;
        width:238px;
        height:95px;
        background: #ffffff;
        color:#666666;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border:1px solid rgba(235, 235, 235, 1);
        z-index: 5;
        text-align:center;
    }
    .phone-box p{
        margin-top:21px;
        color:#000;
        font-size:16px;
    }
    .phone-box .phone-foot{
        width:100%;
        height:34px;
        position:absolute;
        bottom:0;
        display:flex;
        font-size:16px;
        border-top:1px solid #eee;
    }
    .phone-box span{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#0659d6;
    }
    .phone-box span:nth-child(1){
        border-right:1px solid #eee;
    }
    //点击显示弹框 CustomJS.dail（）调用客户端方法  {$cellphone} 是php的方法获取字段
    sureBtn.onclick=function(){
        var phone = {$cellphone}+'';
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        dialog.style.display = "none";
        if (typeof CustomJS != 'undefined'){
            if (isAndroid){
                wrapPhone.style.display = 'block';   
                phoneSure.onclick=function(){
                    CustomJS.dail(phone)
                }
                phoneCancel.onclick=function(){
                    wrapPhone.style.display = 'none';
                    dialog.style.display = "none";
                }
            }else{
                location.href="tel:" + phone;
            }
        }
    }
    <!-----------------------------------------优美的下划线------------------------------------------------------->
    
    //对数组进行平等分 做分页时候遇到的
    function handleArraySplice(arr,len){
        let a_len = arr.length;
        var result = [];
        for(var i=0;i<a_len;i+len){
            result.push(arr.slice(i,i+len))
        }
        return result
    }
    var arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    var neeNum = handleArraySplice(arr,5)
    console.log(neeNum)
    //声明9位数组 做分页时候遇到的
    newArrayNiew(num,max){
        var cur = num;
        var max = max;
        var start = cur - 4;
        var list = [];
        if(max<9){
            start = 1;
            for(var i=0; i<max; i++) {
                list.push(start)
                start++
            }
        }else{
            if(cur<5) { //如果小于5
            start = 1
            } else if(cur>(max-4)) { //如果大于最大页码-4
                start = max-8
            }
            for(var i=0; i<9; i++) {
                list.push(start)
                start++
            }
        }
        return list
    }
