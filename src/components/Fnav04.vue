<template>
    <section class="g-section instruct-section">
        <h2 class="section-header">精算师讲保险
            <a href="/act/lesson?chn=discovery_new" data-track="discovery_moreContent_new">更多
                <i class="icon-arrow-right"></i>
            </a>
        </h2>
        <a href="https://www.xiaoyusan.com/article/content/articleid/35432991" class="intro-img"><img src="https://sslstatic.xiaoyusan.com/h5/img/article/lesson/lesson_1548748769.jpg" alt=""></a>
        <div class="instructs">
            <router-link v-for="(item,index) in XYSlist" :key="index" to="/FoundDetail" :data-id="item.articleid" class="instruct">
                <div class="row passage">
                    <div class="contents">

                        <h3 v-text="item.title"></h3>

                        <p v-text="item.subtitle"></p>

                    </div>
                    <img class="illus" :src="item.spic">
                </div>
            </router-link>
        </div>
    </section>
</template>
<script>
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data() {
    return {
      XYSlist: []
    };
  },
  async created() {
    const data = await axios(
      "https://www.easy-mock.com/mock/5cfc866239b15203098423b0/example/XYSlist#!method=get"
    );
    this.XYSlist = data.data.data.allLesson.slice(1,10)
  }
});
</script>
<style scoped>
.g-section {
  margin: 0 1.4rem;
}
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
.g-section {
  margin: 0 1.4rem;
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
.g-section > h2 a,
.g-section > h2 span {
  float: right;
  font-size: 1.3rem;
  font-weight: 400;
  color: #929292;
}
.icon-arrow-right {
  display: inline-block;
  margin-left: 0.6rem;
  vertical-align: 0.1rem;
  width: 0.6rem;
  height: 0.9rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAAPFBMV…e0mfiAam4igcSUK7STjS7QyaYIH4sLfLUfje/4o7FCV+4BIy4G1yHerr0AAAAASUVORK5CYII=);
  background-size: 100% 100%;
}
.instruct-section .intro-img {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 12rem;
  margin-top: 1.2rem;
  margin-bottom: 1.9rem;
  border-radius: 1rem;
  background-color: #eee;
}
.instruct-section .intro-img img {
  width: 100%;
  height: 100%;
}

img {
  border: 0 none;
  vertical-align: top;
}
.instruct-section .instruct .passage {
  margin-bottom: 2.2rem;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.instruct-section .instruct .passage .contents {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  width: 1px;
  margin-right: 1rem;
}
.instruct-section .instruct .passage .illus {
  width: 7rem;
  height: 7rem;
  border-radius: 0.5rem;
  background: #eee;
}
.instruct-section .instruct .passage .contents h3 {
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: #333;
  font-weight: normal;
}
.instruct-section .instruct .passage .contents h3,
.instruct-section .instruct .passage .contents p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.instruct-section .instruct .passage .contents p {
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #999;
}
</style>


