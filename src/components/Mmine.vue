<template>
    <section class="g-section my-entrance g-space"><a href="/my/couponlist?chn=my" id="my-coupon"
            class="entrance-item row items-center justify-between" data-track="my_coupons_new">
            <div class="name row items-center"><i class="icon icon-coupon"></i> <em>我的优惠券</em></div>
            <div class="detail row items-center"><i class="icon-arrow-right"></i></div>
        </a><a href="/AwardRelease/index?chn=my" id="my-gift" class="entrance-item row items-center justify-between"
            data-track="my_prize_new">
            <div class="name row items-center"><i class="icon icon-gift"></i> <em>我的奖品</em></div>
            <div class="detail row items-center"><i class="icon-arrow-right"></i></div>
        </a></section>
</template>

<style lang="scss" scoped>
.my-entrance {
  padding: 0.8rem 0;
}
.g-space {
  border-bottom: 1px solid #f5f5f5;
}
.g-section {
  margin: 0 1.2rem;
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

.my-entrance .entrance-item {
  line-height: 4rem;
}
.row.justify-between,
.column.justify-between {
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.row.items-center,
.column.items-center {
  -webkit-align-items: center;
  align-items: center;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
a {
  color: inherit;
}

a {
  text-decoration: none;
  color: #333;
}

.row.items-center,
.column.items-center {
  -webkit-align-items: center;
  align-items: center;
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

.my-entrance .entrance-item .icon.icon-coupon {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-coupon.e755b813b45aa350.png);
}
.my-entrance .entrance-item .icon {
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 1.6rem;
}
em,
i {
  font-style: normal;
}

.my-entrance .entrance-item em {
  display: block;
  font-size: 1.6rem;
}
em,
i {
  font-style: normal;
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

.row.items-center,
.column.items-center {
  -webkit-align-items: center;
  align-items: center;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.my-entrance .entrance-item .icon-arrow-right {
  opacity: 0.6;
}
.icon-arrow-right,
.icon-arrow-right-pp {
  display: inline-block;
  vertical-align: middle;
  width: 0.6rem;
  height: 0.9rem;
}
.icon-arrow-right {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAPFBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7PEAr77AAAAE3RSTlMA+fLpSOJeDdPEop57cjo0KyYbmQwhIAAAAFJJREFUCNddz1kOwCAIBFAFtPvK/e/ayrQhMn8vIcAkKXke0hdW1ekX6ZvxBlZtKRe0mfiAam4igcSUK7STjS7QyaYIH4sLfLUfje/4o7FCV+4BIy4G1yHerr0AAAAASUVORK5CYII=);
  background-size: 100% 100%;
}
em,
i {
  font-style: normal;
}

.my-entrance .entrance-item .icon.icon-gift {
  background-image: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-gift.f6b3c141b4d8f50c.png);
}
</style>
