<template>
    <div class="bottom_btn_group iphonex_padding iphonex_white">
        <div class="bottom_btn_row row"><a href="javascript:;" class="bottom_btn zhiCustomBtn">
                <div class="new_consult"></div> <span class="new_consult_unread"></span>
                <p style="color: rgb(140, 127, 238);">在线咨询</p>
            </a> <a href="tel:400-919-7788" class="bottom_btn"><i class="bottom phone"></i>
                <p>电话咨询</p>
            </a>
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!----> <a href="javascript:;" class="bottom_btn col buy_btn">立即投保</a></div>
    </div>
</template>


<style lang="scss" scoped>
.bottom_btn_group {
  position: fixed;
  left: 50%;
  bottom: 0;
  width: 100%;
  max-width: 750px;
  background-color: #fff;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 100;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.bottom_btn_row {
    height: 5.7rem;
}
.row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.bottom_btn {
    width: 6.55rem;
    padding-top: 1.1rem;
    font-size: 1rem;
    color: #999;
    text-align: center;
    position: relative;
    border-top: 1px solid #e2e5e7;
}
a {
    text-decoration: none;
    color: #333;
}

.new_consult {
    margin: 0 auto .2rem;
    height: 2.3rem;
    width: 2.3rem;
    background: url(https://sslstatic.xiaoyusan.com/insuranceV2/img/consult.089e4e96d9acb8f1.png) no-repeat;
    background-size: 2.3rem 2.3rem;
}

.new_consult_unread {
    position: absolute;
    background-color: #ef3631;
    top: .5rem;
    right: .9rem;
    border-radius: 50%;
    text-align: center;
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #fff;
    font-size: 1rem;
    display: none;
}

blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}

.bottom_btn {
    width: 6.55rem;
    padding-top: 1.1rem;
    font-size: 1rem;
    color: #999;
    text-align: center;
    position: relative;
    border-top: 1px solid #e2e5e7;
}
a {
    text-decoration: none;
    color: #333;
}

.bottom.phone {
    height: 2.2rem;
    width: 2rem;
    background-position: 0 -3rem;
}
.bottom {
    display: block;
    margin: 0 auto .3rem;
    background: url(https://sslstatic.xiaoyusan.com/insuranceV2/img/bottom.f5c6cd0e6b305c61.png) no-repeat;
    background-size: 2.6rem 35.2rem;
}
em, i {
    font-style: normal;
}

.bottom_btn.buy_btn {
    padding-top: 0;
    background-color: #fe5b70;
    line-height: 5.7rem;
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    border: none;
}
.bottom_btn {
    width: 6.55rem;
    padding-top: 1.1rem;
    font-size: 1rem;
    color: #999;
    text-align: center;
    position: relative;
    border-top: 1px solid #e2e5e7;
}
.col {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
a {
    text-decoration: none;
    color: #333;
}


</style>
