<template>
    <section class="g-section">
        <h2 class="section-header">活动专区</h2>
        <div class="activity g-space">
            <div class="box_act">
                <a class="act new-user-entry" id="actEntry" href="https://www.xiaoyusan.com/privilege/welfareV2?chn=discovery_new" data-track="dicovery_newbennifits_new"></a>
                <a class="act" href="https://www.xiaoyusan.com/score#/index?chn=discovery_new" data-track="discovery_points_new"></a>
            </div>
            <Carousel autoplay v-model="value2" loop>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img style="width:100%;" src="//sslstatic.xiaoyusan.com/discoveryV2/img/swiper2.996291f89561c104.png" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img style="width:100%;" src="//sslstatic.xiaoyusan.com/discoveryV2/img/swiper1.8a5830ce69d1a41b.png" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      value2: 0
    };
  }
};
</script>
<style scoped>
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #666;
}
.g-section > h2 {
  padding-top: 2.2rem;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1;
}
.g-section {
  margin: 0 1.4rem;
}
.g-space {
  border-bottom: 1px solid #f5f5f5;
}
.activity .box_act {
  overflow: hidden;
  margin-top: 1.3rem;
  margin-bottom: 1rem;
  background: #fcfcfc;
}
.activity .box_act .act.new-user-entry {
  background: #fcfcfc
    url(//sslstatic.xiaoyusan.com/discoveryV2/img/actbox_01.abc2d24524b4072b.png)
    100% 100%/100% no-repeat;
}

.activity .box_act .act {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 1rem;
  float: left;
  width: 48.8%;
  height: 6.15rem;
  background: #fcfcfc
    url(//sslstatic.xiaoyusan.com/discoveryV2/img/actbox_011.3c62aafa7c0fadba.png)
    100% 100%/100% no-repeat;
}
.activity .box_act .act:last-child {
  float: right;
  background: #fcfcfc
    url(//sslstatic.xiaoyusan.com/discoveryV2/img/actbox_02.bd3a46da748544b3.png)
    100% 100%/100% no-repeat;
}

.activity .box_act .act {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 1rem;
  float: left;
  width: 48.8%;
  height: 6.15rem;
}
.ivu-carousel {
  position: relative;
  overflow: hidden;
  margin-bottom: 2.25rem;
  border-radius: 1rem;
  height: 8.6rem;
  background: #fcfcfc;
}
/* element.style {
  width: 1364px;
} */
.activity .swiper-container .swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
element.style {
  width: 341px;
  z-index: 0;
  left: 0px;
  transition-duration: 400ms;
  transform: translate(341px, 0px) translateZ(0px);
  visibility: visible;
}

.activity .swiper-container .swiper-wrapper .swiper-slide {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.activity .swiper-container .swiper-wrapper .swiper-slide img {
  width: 200px;
  height: 100%;
  border-radius: 1rem;
}

img {
  border: 0 none;
  vertical-align: top;
}
.activity .swiper-container .swiper-pagination {
  position: absolute;
  bottom: 0.7rem;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 10;
}
.activity .swiper-container .swiper-pagination-bullet {
  margin: 0 0.3rem;
  width: 5px;
  height: 5px;
  display: inline-block;
  border-radius: 2.5px;
  background: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.ivu-carousel-track {
  width: 341px;
  height: 104px;
}
.ivu-carousel-track img {
  width: 100%;
  height: 104px;
}
</style>


