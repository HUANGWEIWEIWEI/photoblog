<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="less">

/****** 淡紫色主题 ****/
@tcolors:#97dffd;//按钮和标签颜色
@tcolorm:#64609E;//分类的选中的颜色
@tcolord:#48456D;//按钮hover 的颜色
  
/*reset*/
html, body, div,  applet, object, iframe,
blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
 caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  text-align:center;
  font: inherit;
}
body{
  font-family:Arial,sans-serif;
  // font-family:Arial,"STHeiti", Helvetica, sans-serif;
  background:rgb(209, 215, 223);
  font-size:14px;
  color:#444!important;
  min-height:100vh;
  width:100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

a{
     text-decoration:none;
}
html{-webkit-text-size-adjust:none;width:100%;height:100% } /*????iphone??safari????????????*/
input[type="text"], input[type="button"], input[type="submit"], input[type="search"]{
  -webkit-appearance:none;
  border-radius:0;
}

/*************其他内容*************/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  color: #444;
}

h1, h2 {
  font-weight: normal;
}
a {
  color: #444;
}
.container{
    max-width: 80%;
    margin:0 auto;
    padding:0 10px;
    // overflow-x: hidden;
    // -webkit-overflow-x: hidden;
}
//时间和标题
.s-round-date{
    position: absolute;
    top:-20px;
    left:-35px;
    height:60px;
    width:70px;
    padding-top:10px;
    border-radius: 100px;
    color:#fff;
    background: @tcolors;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.s-round-date span{
    text-align: center;
    display: block;
}
.s-round-date .day{
    font-size: 30px;
    font-weight: 700;
}
// 相同的标题副标题
.tcommonBox{
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    position: relative;
    background: #fff;
    padding:15px;
    border-radius: 5px;
    margin-bottom: 40px;
    font-size: 15px;
}
.tcommonBox header{
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
}
.tcommonBox  header h1{
    margin: 10px 0;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    line-height: 30px;
}
.tcommonBox header h2{
    margin:10px 0;
    line-height: 24px;
    text-align: center;
    color:#555;
    font-size: 14px;
}
.tcommonBox section p{
    line-height: 24px;
    margin:10px 0;
}
.tcommonBox  header h2 .el-rate,.rateBox{
    display:inline-block;
}
.tcommonBox  header h2 .el-rate i{
    font-size: 16px;
}
.s-item .article-coontent{
    font-size: 15px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
}
//标题和按钮
.s-item .article-content p{
    margin:10px 0;
    line-height:24px;
}
.s-item .viewdetail{
    margin:10px 0 ;
    line-height: 24px;
    text-align: center;
}
.s-item .viewdetail a{
    color:#fff;
    font-size: 12px;
    padding:5px 10px;
    border-radius: 5px;
}

 .viewmore{
    text-align: center;
    width:100%;
}
 .viewmore a{
    /*background:  #97dffd;*/
    /*padding:6px 0;*/
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    color:#fff;
    height:30px;
    line-height: 30px;
    display: block;
}


</style>