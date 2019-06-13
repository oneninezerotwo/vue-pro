<template>
    <div class="pbft_aboutus">
        <div class="pbft_aboutus_grid grid">
            <a class="pbft_aboutus_link col-1" href="//www.xiaoyusan.com/aboutus" data-track="footer_aboutus">关于我们</a>
            <a class="pbft_aboutus_link col-1" href="//www.xiaoyusan.com/static/page/name/license" data-track="footer_license">资质牌照</a>
            <a class="pbft_aboutus_link col-1" href="//www.xiaoyusan.com/aboutus/news.html" data-track="footer_news">新闻报道</a>
        </div>
        <div class="pbft_aboutus_info">
            <p>客服热线：
                <a href="tel:400-919-7788" class="tel" data-track="footer_phone">400-919-7788</a> (7*24小时)</p>
            <!-- <p class="wechat">微信公众号：xysbaoxian</p> -->
        </div>
    </div>
</template>

<style>
.pbft_aboutus {
  padding: 0 1rem 1.3rem;
}
.pbft_aboutus {
  background: #f9f9f9;
}
.pbft_aboutus_grid {
  padding: 1rem 0;
}

.grid {
  display: -webkit-box;
  display: box;
}
.pbft_aboutus_link {
  position: relative;
  display: block;
  font-size: 1.3rem;
  color: #646464;
  text-align: center;
}

.col-1 {
  -webkit-box-flex: 1;
  box-flex: 1;
}
.pbft_aboutus_link:first-child:after {
  width: 0;
}

.pbft_aboutus_link:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0.1rem;
  background-color: #c8c8c8;
}
.pbft_aboutus_info {
  font-size: 1.2rem;
  color: #646464;
  text-align: center;
}
.tel {
  color: #8c7fee;
}
</style>
