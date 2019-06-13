<template>
<div>
    <!-- <div class="pb_imgcode" id="imgver_layer" style="display: block;">
    <div class="pb_imgcode_box">
        <a href="javascript:;" class="pb_imgcode_close" id="close_imgver_layer"><i class="iconfont icon-guanbi"></i></a>
        <div class="pb_imgcode_hd">图形验证码</div>
        <div class="pb_imgcode_bd">
            <div class="pb_imgcode_form">
                <div class="pb_imgcode_form_item grid" id="verimg">
                    <div class="col-1">
                        <input type="text" class="pb_imgcode_input" id="input_verimg" placeholder="请输入图形验证码">
                    </div>
                    <div class="col-0" style="margin-left:1rem;"><img id="verify_img" src="https://www.xiaoyusan.com/user/mverify?0.9190020386053193" alt="" class="pb_imgcode_img"></div>
                </div> 
            </div>
        </div>
        <a href="javascript:;" class="pb_imgcode_submit" id="sub_imgcode">确定</a>
    </div>
</div> -->
    <div class="mod_container">
        <!-- 这里开始你的模块 -->
        <form class="form_query">
            <h2 class="form_query_tit">验证手机号</h2>

            <div class="form_item grid">
                <label for="" class="col-0" style="width:9rem;" >手&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;号：</label>
                <input class="col-1" type="tel" id="input_phone" v-model="bb" placeholder="请输入手机号">

            </div>
            <div class="form_item grid">
                <label for="" class="col-0" style="width:9rem;">短信验证码：</label>
                <input class="col-1" type="tel" placeholder="请输入验证码" id="input_code" v-model="ee">
                <a ass="col-0" href="javascript:;" class="btn" style="padding:0.5rem 0;" id="get_verify" @click="get" v-text="aa" :style="gg" ></a>
                <!-- 倒计时 -->
                <input ass="col-0" href="javascript:;" class="btn disabled" :style="ff" id="time_left" v-model="hh"/>
            </div>
            <a href="javascript:;" class="buy" id="query" @click="sure">确定</a>
        </form>
        <!-- S 公共组件 提示信息 -->
        <div class="mod_tips" id="divTips" v-text="dd" :style="cc">
        </div>
        <!-- S 公共组件 提示信息 -->
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      aa: "获取验证码",
      bb: "",
      cc: "display:none",
      dd: "请输入正确的手机号码！",
      ee: "",
      ff: "display:none",
      gg: "display:block",
      hh: "剩余59秒",
      name: "mine",
      res: ""
    };
  },
  methods: {
    get() {
      if (/^1[3456789]\d{9}$/.test(this.bb)) {//正则验证手机号
        this.ff = "display:block";//倒计时出现
        this.gg = "display:none";//获取验证码隐藏
        var a = 5;
        var res = "";//验证码
        function randomCode() {
          var html =
            "0987654321qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP";
          for (var i = 0; i < 4; i++) {
            var now = parseInt(Math.random() * html.length);
            res += html[now];
          }
          return res;
        }
        randomCode();
        this.res = res;//循环随机验证码
        this.cc = "display:block";//显示验证码
        this.dd = this.res;//验证码赋值
        console.log(this.res);
        setTimeout(() => {
          this.cc = "display:none";//验证码5秒后消失
        }, 5000);

        let b = setInterval(() => {//倒计时
          a--;
          // console.log(this);
          this.hh = "剩余" + a + "秒";
          // console.log(this.hh);
          if (a == 0) {
            clearInterval(b);
            this.gg = "display:block";
            this.ff = "display:none";
            // console.log(this.gg, this.ff);
          }
        }, 1000);
        this.hh = "剩余" + a + "秒";
      } else {//手机号码不符合正则
        this.cc = "display:block";//弹出提示
        setTimeout(() => {//两秒后提示消失
          this.cc = "display:none";
        }, 2000);
      }
    },
    sure() {//确定按钮
      if (this.bb && this.ee) {//手机号，验证码不为空
        if (this.ee == this.res) {//输入的验证码=生成的验证码
          localStorage.setItem("username", this.bb);//写入localStorage
          this.$router.push({//跳转到我的页面
            name: this.name
          });
        } else {//输入的验证码不等于生成的验证码
          this.cc = "display:block";//弹出提示
          this.dd = "验证码错误";
          setTimeout(() => {//两秒后消失
            this.cc = "display:none";
          }, 2000);
        }
      } else {//手机号和验证码  有一个为空
        this.cc = "display:block";//弹出提示
        this.dd = "请完善您的登录信息";
        setTimeout(() => {//两秒后消失
          this.cc = "display:none";
        }, 2000);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.mod_container {
  min-height: 100%;
  background-color: #fff;
}
* {
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

.form_query {
  background-color: #fff;
  padding: 2rem 1rem;
  margin-bottom: 1.5rem;
}
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
* {
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

.form_query_tit {
  text-align: left;
  color: #3c3c3c;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
}
button,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select {
  font-size: 100%;
  font-family: inherit;
}
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
* {
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

.form_item {
  margin-bottom: 1rem;
}
.grid {
  display: -webkit-box;
  display: box;
}
* {
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
.form_item > label {
  display: block;
  font-size: 1.4rem;
  color: #969696;
  line-height: 3.4rem;
  width: 7.5rem;
}
.col-0 {
  -webkit-box-flex: 0;
  box-flex: 0;
}

.form_item > input {
  display: block;
  box-shadow: none;
  -webkit-box-shadow: none;
  height: 3.3rem;
  padding: 0.5rem;
  border: 0.1rem solid #d4d4d4;
  border-radius: 0.3rem;
  font-size: 1.4rem;
}
input[type="text"],
input[type="tel"],
textarea {
  -webkit-appearance: none;
}
.col-1 {
  -webkit-box-flex: 1;
  box-flex: 1;
}
button,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select {
  font-size: 100%;
  font-family: inherit;
}
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

.form_item {
  margin-bottom: 1rem;
}
.grid {
  display: -webkit-box;
  display: box;
}

.form_item > label {
  display: block;
  font-size: 1.4rem;
  color: #969696;
  line-height: 3.4rem;
  width: 7.5rem;
}
.col-0 {
  -webkit-box-flex: 0;
  box-flex: 0;
}

.form_item > input {
  display: block;
  box-shadow: none;
  -webkit-box-shadow: none;
  height: 3.3rem;
  padding: 0.5rem;
  border: 0.1rem solid #d4d4d4;
  border-radius: 0.3rem;
  font-size: 1.4rem;
}
input[type="text"],
input[type="tel"],
textarea {
  -webkit-appearance: none;
}
.col-1 {
  -webkit-box-flex: 1;
  box-flex: 1;
}

.btn {
  display: block;
  font-size: 1.4rem;
  height: 3.3rem;
  color: #8c7fee;
  border: 0.1rem solid #8c7fee;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  width: 9rem;
  text-align: center;
  margin-left: 1rem;
}
a {
  text-decoration: none;
  color: #333;
}

.btn.disabled {
  background-color: #d4d4d4;
  color: #646464;
  border: 0.1rem solid #d4d4d4;
}
.btn {
  display: block;
  font-size: 1.4rem;
  height: 3.3rem;
  color: #8c7fee;
  border: 0.1rem solid #8c7fee;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  width: 9rem;
  text-align: center;
  margin-left: 1rem;
}
a {
  text-decoration: none;
  color: #333;
}

.buy {
  display: block;
  height: 3.8rem;
  line-height: 3.8rem;
  border: 0.1rem solid #8c7fee;
  color: #8c7fee !important;
  text-align: center;
  margin-top: 2rem;
  font-size: 1.4rem;
}
a {
  text-decoration: none;
  color: #333;
}

.mod_tips {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 120px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  z-index: 501;
  padding: 15px 20px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  color: #fff;
  white-space: nowrap;
}

.form_item > label {
  display: block;
  font-size: 1.4rem;
  color: #969696;
  line-height: 3.4rem;
  width: 7.5rem;
}
.col-0 {
  -webkit-box-flex: 0;
  box-flex: 0;
}
</style>
