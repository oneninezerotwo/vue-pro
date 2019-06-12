<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in swiper" :key="index">
        <a href="https://www.xiaoyusan.com/insurance/detail?id=135415&amp;chn=h5index_h5_banner0527_mira" class="banner-item" style="width: 375px; pointer-events: auto;"><img :src="item.url" alt="" class="banner-img" /></a>
      </div>
      <!-- <div class="swiper-slide">
        <a href="https://www.xiaoyusan.com/insurance/detail?id=136956&amp;chn=h5index_h5_banner0531" class="banner-item" style="width: 375px; pointer-events: auto;"><img src="https://sslstatic.xiaoyusan.com/act/img/1559619058.jpg" alt="" class="banner-img" /></a>
      </div>
      <div class="swiper-slide">
        <a href="https://www.xiaoyusan.com/insurance/detail?id=136968&amp;chn=h5index_h5_banner0610" class="banner-item" style="width: 375px; pointer-events: auto;"><img src="https://sslstatic.xiaoyusan.com/act/img/1559638058.png" alt="" class="banner-img" /></a>
      </div>
      <div class="swiper-slide">
        <a href="https://dwz.cn/E46ZJtHe?chn=h5index" class="banner-item" style="width: 375px; pointer-events: auto;"><img src="https://sslstatic.xiaoyusan.com/act/img/1559636656.jpg" alt="" class="banner-img" /></a>
      </div>
      <div class="swiper-slide">
        <a href="https://www.xiaoyusan.com/insurance/detail?id=133820&amp;chn=h5index_H5_banner0604_mira" class="banner-item" style="width: 375px; pointer-events: auto;"><img src="https://sslstatic.xiaoyusan.com/act/img/1559645000.jpg" alt="" class="banner-img" /></a>
      </div>
      <div class="swiper-slide">
        <a href="https://www.xiaoyusan.com/insurance/detail?id=135415&amp;chn=h5index_h5_banner0527_mira" class="banner-item" style="width: 375px; pointer-events: auto;"><img src="https://sslstatic.xiaoyusan.com/act/img/1559296728.png" alt="" class="banner-img" /></a>
      </div>
      <div class="swiper-slide">
        <a href="https://www.xiaoyusan.com/insurance/detail?id=136956&amp;chn=h5index_h5_banner0531" class="banner-item" style="width: 375px; pointer-events: auto;"><img src="https://sslstatic.xiaoyusan.com/act/img/1559619058.jpg" alt="" class="banner-img" /></a>
      </div> -->
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
//引入轮播图js
import '../chajian/swiper.min.js'

export default {
  data() {
    return {
      swiper: [{
        "url": 'https:sslstatic.xiaoyusan.com/act/img/1559619058.jpg'
      }, {
        "url": 'https://sslstatic.xiaoyusan.com/act/img/1559296728.png'
      }, {
        "url": 'https://sslstatic.xiaoyusan.com/act/img/1559638058.png'
      }, {
        "url": "https://sslstatic.xiaoyusan.com/act/img/1559636656.jpg"
      }
        , {
        "url": 'https://sslstatic.xiaoyusan.com/act/img/1559645000.jpg'
      }, {
        "url": 'https://sslstatic.xiaoyusan.com/act/img/1559296728.png'
      }, {
        "url": 'https://sslstatic.xiaoyusan.com/act/img/1559619058.jpg'
      }]
    }
  },
  mounted() {
    //轮播图内部script
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      //环路，loop设置为true 则开启loop模式,在滑动到最后一张时，可以滑倒第一张，无线循环
      loop: true,
      //自动轮播
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
}
</script>

<style>
/* 引入轮播图css */
@import "../chajian/swiper.min.css";
.banner {
  position: relative;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

element.style {
  width: 2625px;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0ms;
  transform: translate(-1125px, 0px) scale(1) translateZ(0px);
}
element.style {
  width: 375px;
  pointer-events: auto;
}

.banner .banner-item {
  position: relative;
  width: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
.banner .banner-item:before {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 32%;
}
.banner .banner-img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background-color: #e0ddff;
}

img {
  border: 0 none;
  vertical-align: top;
}
.banner .banner-dot {
  position: absolute;
  left: 50%;
  bottom: 0.8rem;
  z-index: 9;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
.banner .banner-dot i {
  width: 5px;
  height: 5px;
  margin: 0 3px;
  background-color: #fff;
  border-radius: 6px;
  opacity: 0.8;
}

em,
i {
  font-style: normal;
  font-size: inherit;
}
.banner .banner-dot i.active {
  opacity: 1;
  width: 1.2rem;
}

.banner .banner-dot i {
  width: 5px;
  height: 5px;
  margin: 0 3px;
  background-color: #fff;
  border-radius: 6px;
  opacity: 0.8;
}

.swiper-slide img {
  height: 100%;
  width: 100%;
}
.swiper-slide {
  height: 12rem;
}
.swiper-container {
  /* ackground: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAASCAMAAAAzDKuzAAAAmVBMV…2NNDA1gKuDRBFUgQmOCSBgWMiwkUXDswZh7ujNYe7ojfwCYf7vqWh694MAAAAASUVORK5CYII=); */
  margin-bottom: 1.5rem;
}
</style>
