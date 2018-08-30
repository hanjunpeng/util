//javascript 控制input只允许输入的各种指定内容

1.只允许输入数字
  <input name="username" type="text"
  onkeyup="value=this.value.replace(/\D+/g,'')">
  
2.只允许输入输入大小写英文字母，数字和下划线
方法一：
  <input name="username" type="text"
  onkeyup="value=value.replace(/[^\w\.\/]/ig,'')">
方法二：
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9_]/g,'');">
  
3.只允许输入汉字
  <input name = "name" type = "text" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')">
  
4.只允许输入英文和数字
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9]/g,'');">
  
5.只允许输入问问字幕，数字和=&%
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9=&%]/g,'');">
  
6.不能输入特殊字符
  <input name = "name" type = "text" onkeyup="value=value.replace(/[\W]/g,'') 
  onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))">
  
7.只能输入数字和小数点
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^\0-9\.]/g,'');">
  
8.只允许输入英文
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'');">
  
9.只允许输入英文，数字，中文
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'');">
  
10.只允许输入英文，数字，中文，小数点
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g,'');">
  
11.只允许输入英文，数字，中文，小数点，下划线
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\._]/g,'');">
  
12.只允许输入英文，数字，中文，小数点，下划线，空格
  <input name  = "username" type = "text" onkeyup="this.value=this.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\._ ]/g,'');">
  
  参考网址：https://blog.csdn.net/u010931123/article/details/78479211
  /**************************************************优美的下划线*******************************************************************/




