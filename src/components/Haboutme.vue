<template>
  <section class="g-section aboutus">
    <div class="aboutus-hd row">
      <h2 class="title col">关于我们</h2>
    </div>
    <div class="aboutus-bd row">
      <a href="/static/page/name/license" class="col" data-track="index_qualification">
        <i class="bg brand"></i>
        <span>资质牌照</span>
      </a>
      <a href="/aboutus" class="col" data-track="index_aboutUs">
        <i class="bg know"></i>
        <span>了解我们</span>
      </a>
    </div>
  </section>
</template>

<style>
.aboutus {
  margin-bottom: 2.4rem;
}
.g-section {
  margin: 0 1.2rem;
}
.aboutus .aboutus-hd {
  margin-bottom: 1rem;
}
.aboutus-hd h2 {
  text-align: left;
}
.aboutus .aboutus-hd {
  margin-bottom: 1rem;
}
/* h2.title {
    font-size: 1.7rem;
    font-weight: 700;
    color: #333;
    } */
.col {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
/* h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
} */
.aboutus .aboutus-bd {
  text-align: center;
}

element.style {
}
.aboutus .aboutus-bd > a {
  margin-right: 1rem;
  position: relative;
}
.col {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
a {
  text-decoration: none;
  color: inherit;
}
.aboutus .aboutus-bd .bg.brand {
  background-image: url(https://sslstatic.xiaoyusan.com/index/img/bg-brand.aa3e5ce675901878.png);
}

.aboutus .aboutus-bd .bg {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 38.8%;
  background-color: #f8f7ff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 0.8rem;
}
.aboutus .aboutus-bd span {
  position: absolute;
  left: 1.2rem;
  top: 1.2rem;
  font-size: 1.4rem;
  color: #333;
}
body {
  background-color: #fff;
  margin: 0 auto;
  color: #666;
  font-family: sans-serif;
}
</style>
