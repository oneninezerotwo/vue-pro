<template>
    <div id="auto4">
        <div class="box claims_box">
            <div class="box_tit">嗖嗖理赔</div>
            <div class="claims_li">
                <div class="claims_tit"><span class="serial">1</span>理赔步骤<a
                        href="https://www.xiaoyusan.com/claims/priviewClaims?groupid=136956"
                        class="claims_link fr">查看理赔资料</a></div>
                <div class="claims_img lazyload"><img alt=""
                        src="//sslstatic.xiaoyusan.com/h5/img/insurance/claims/xys_offline.jpg?v=2017082902" class="img"
                        style="display: inline;"></div>
            </div>
            <div class="claims_li">
                <div class="claims_tit"><span class="serial">2</span>理赔案例</div>
                <p class="box_nodata">暂无理赔案例</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
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

.box {
  background-color: #fff;
}

.box_tit {
  position: relative;
  padding: 1.7rem 1.1rem 0;
  font-size: 1.7rem;
  color: #323232;
}

.box_tit:before {
  position: absolute;
  top: 2.3rem;
  left: 0;
  display: block;
  width: 0.3rem;
  height: 1.6rem;
  background-color: #8c7fee;
  content: "";
}

.claims_li:not(:last-of-type) {
  border-bottom: 1px solid #e2e5e7;
}
.claims_li:not(:first-of-type) {
  padding-top: 1.5rem;
}
.claims_li {
  margin: 0 1.4rem;
  padding-bottom: 2rem;
}

.claims_tit {
  font-size: 1.6rem;
  color: #3c3c3c;
}

.serial {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.6rem;
  background-color: #b4b4b4;
  border-radius: 50%;
  line-height: 1.8rem;
  font-size: 1.4rem;
  color: #fff;
  text-align: center;
  vertical-align: 0.1rem;
}

.claims_link {
  width: 8.9rem;
  height: 2.4rem;
  border: 1px solid #8c7fee;
  border-radius: 1.2rem;
  line-height: 2.3rem;
  font-size: 1.2rem;
  color: #8c7fee;
  text-align: center;
}
.fr {
  float: right;
}
a {
  text-decoration: none;
  color: #333;
}

.claims_img {
  width: 100%;
  min-height: 6.7rem;
  margin-top: 2.5rem;
}
.lazyload {
  background: url(https://sslstatic.xiaoyusan.com/insuranceV2/img/loading.a51c5608d01acf32.gif)
    no-repeat;
  background-position: 50%;
  background-size: 1.6rem 1.6rem;
}

.img {
  width: 100%;
  height: 100%;
}
img {
  border: 0 none;
  vertical-align: top;
}

.claims_li:not(:first-of-type) {
  padding-top: 1.5rem;
}
.claims_li {
  margin: 0 1.4rem;
  padding-bottom: 2rem;
}

.claims_tit {
  font-size: 1.6rem;
  color: #3c3c3c;
}

.serial {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.6rem;
  background-color: #b4b4b4;
  border-radius: 50%;
  line-height: 1.8rem;
  font-size: 1.4rem;
  color: #fff;
  text-align: center;
  vertical-align: 0.1rem;
}

.box_nodata {
  margin-top: 2rem;
  font-size: 1.4rem;
  color: #646464;
  text-align: center;
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
</style>







