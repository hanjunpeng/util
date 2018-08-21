
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
    
    
    
