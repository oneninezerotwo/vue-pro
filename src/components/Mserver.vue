<template>
    <section class="g-section apply-entrance row g-space"><a href="/renewal/myList?chn=my" class="apply-item"
            data-track="my_2renewal_new">
            <div class="icon-area" id="apply-renew"><i class="icon icon-renew"></i></div>
            <p>申请续保</p>
        </a><a href="/my/claimsdeal?chn=my" class="apply-item" data-track="my_2settle_new">
            <div class="icon-area"><i class="icon icon-apply-claims"></i></div>
            <p>申请理赔</p>
        </a><a href="/static/page/name/license?page=section3&amp;chn=my" class="apply-item"
            data-track="my_2testingpolicy_new">
            <div class="icon-area"><i class="icon icon-verify"></i></div>
            <p>保单验真</p>
        </a><a href="/my/dealquery?chn=my" class="apply-item" data-track="my_2checkpolicy_new">
            <div class="icon-area"><i class="icon icon-find"></i></div>
            <p>证件查保单</p>
        </a><a href="/insurancedlist?chn=my#/familypolicy" class="apply-item" data-track="my_familypolicy_new">
            <div class="icon-area"><i class="icon icon-family-policy"></i> <i class="tip">new</i></div>
            <p>家庭保单管理</p>
        </a><a href="/invite/invite/actid/103?chn=my" class="apply-item" data-track="my_share_new">
            <div class="icon-area"><i class="icon icon-invite"></i></div>
            <p>邀请有奖</p>
        </a><a href="/question/help?chn=my#/faq" class="apply-item" data-track="my_questions_new">
            <div class="icon-area"><i class="icon icon-faq"></i></div>
            <p>在线咨询</p>
        </a><a href="/question/adviceAndComplain?source=my&amp;channeltype=1&amp;chn=my" class="apply-item"
            data-track="my_suggestion_new">
            <div class="icon-area"><i class="icon icon-refund"></i></div>
            <p>投诉建议</p>
        </a></section>
</template>

<style lang="scss" scoped>
.apply-entrance {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 1.1rem 0;
  margin-bottom: 2.2rem;
}
.g-space {
  border-bottom: 1px solid #f5f5f5;
}
.g-section {
  margin: 0 1.2rem;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
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

.apply-entrance .apply-item {
  padding: 1.1rem 0;
  text-align: center;
  width: 25%;
  color: #777;
  font-size: 1.3rem;
}
a {
  color: inherit;
}
a {
  text-decoration: none;
  color: #333;
}

.apply-entrance .apply-item .icon-area {
  display: inline-block;
  position: relative;
}

.apply-entrance .apply-item .icon.icon-renew {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-renew.c0e6b34e3a5ee8bb.png);
}
.apply-entrance .apply-item .icon {
  display: block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
em,
i {
  font-style: normal;
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

.apply-entrance .apply-item .icon.icon-apply-claims {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-apply-claims.010f018bacfaca17.png);
}

.apply-entrance .apply-item .icon.icon-verify {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-verify.42eca2a1c4600a3f.png);
}

.apply-entrance .apply-item .icon.icon-find {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-find.d30abe1efa33ea87.png);
}

.apply-entrance .apply-item .icon.icon-family-policy {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-family-policy.6bb7121a53bc8cd9.png);
}

.apply-entrance .apply-item .icon.icon-invite {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-invite.d0b2f28ba255d701.png);
}

.apply-entrance .apply-item .icon.icon-faq {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-faq.acfb71ce23b387e5.png);
}

.apply-entrance .apply-item .icon.icon-refund {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-refund.31a434ccae077a97.png);
}

.apply-entrance .apply-item .tip {
  line-height: 2.4rem;
  min-width: 4.8rem;
  padding: 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 2rem;
  color: #fff;
  position: absolute;
  left: 1.4rem;
  top: -0.7rem;
  opacity: 0.8;
  border-radius: 2.4rem 2.4rem 2.4rem 0;
  background-image: -webkit-linear-gradient(0deg, #ff8695, #ff5a6e);
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
</style>
