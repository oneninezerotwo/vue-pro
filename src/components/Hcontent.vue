<template>
    <section class="g-section product g-space">
        <div class="product-list">
            <div class="partial-list" index="0">
                <a href="https://www.xiaoyusan.com/insurance/detail?chn=h5index&amp;id=136956" v-for="(item,index) in shoplist" :key="index" class="product-item row" data-id="136956" data-classid="2" data-track="index_buy_new">
                    <div class="product-img">
                        <i class="shine green">新品</i><img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1559730018.jpg" data-src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1559730018.jpg" alt=""></div>
                    <div class="product-info col row">
                        <div class="detail col">
                            <h3 v-text="item.title"></h3>
                            <div class="desc">
                                <p>国民重疾险，超高性价比</p>
                                <p>前10年重疾保额增35%，癌症可赔2次</p>
                            </div>
                            <div class="tag row">
                                <em>智能核保</em>
                            </div>
                        </div>
                        <div class="func row">
                            <div class="col">
                                <span class="price">
                                    <b>231</b>元</span>
                                <span class="comment">91条评价</span>
                            </div>
                            <button class="btn-buy">立即投保</button>
                        </div>
                    </div>
                </a>

            </div>
            <!-- <div class="partial-list hide" index="10">
                <a href="https://www.xiaoyusan.com/insurance/detail?chn=h5index&amp;id=135415" class="product-item row" data-id="135415" data-classid="10" data-track="index_buy_new">
                    <div class="product-img">
                        <i class="shine red">热卖</i><img src="" data-src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1559116235.png" alt=""></div>
                    <div class="product-info col row">
                        <div class="detail col">
                            <h3>大富翁少儿教育金</h3>
                            <div class="desc">
                                <p>1元也可以随时投，100%保证领取</p>
                                <p>收益高达5.73%，IRR高达3.94%</p>
                            </div>
                            <div class="tag row">
                                <em class="favorpack">限时活动</em>
                            </div>
                        </div>
                        <div class="func row">
                            <div class="col">
                                <span class="price">
                                    <b>1</b>元</span>
                                <span class="comment">85条评价</span>
                            </div>
                            <button class="btn-buy">立即投保</button>
                        </div>
                    </div>
                </a>
            </div> -->
        </div>
        <div class="product-more hide">
            <a href="/class/itemlist?id=2&amp;chn=h5index" class="btn-more" data-track="index_moreInsurance">
                <span>查看全部21款成人保险</span>
                <i class="icon-arrow-right"></i>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            shoplist: []
        }
    },
    created() {
        this.getshoplist();
    },
    methods: {
        //异步请求数据函数
        async getshoplist() {
            const data = await this.$axios("https://www.easy-mock.com/mock/5cf651657d25197d5b67909a/example/home");
            console.log(data);
            const productList = data.data.data.productList.slice(0, 8)
            this.shoplist = [...this.shoplist, ...productList];//数组拼接
        },
    }
}
</script>

<style>
.product-list {
  margin-top: 0.6rem;
}
.product .product-item {
  margin-bottom: 2rem;
}
.product .product-img {
  position: relative;
  margin-right: 1.2rem;
}
.product .product-img .shine.green {
  background-color: #63dc91;
}

.product .product-img .shine {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 2rem;
  background-color: #bfb4ff;
  text-align: center;
  width: 6.8rem;
  line-height: 3rem;
  border-radius: 0.8rem 0;
  color: #fff;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.product .product-img img {
  display: block;
  border-radius: 0.4rem;
  width: 9rem;
  height: 11.8rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABIBAMAAAC0FO6AAAAAMFBMV…juDTzBZBMIXUg4ZHfs96dHy4SXGBo8S+rb2FnGqX8wGJVfSFoC0fjqLIQAAAAASUVORK5CYII=);
  background-size: 3.2rem;
}

img {
  border: 0 none;
  vertical-align: top;
}
.product .product-info {
  min-width: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.product .product-info h3 {
  font-size: 1.6rem;
  color: #333;
}
.product .product-info .desc {
  color: #999;
  font-size: 1.3rem;
  line-height: 1.4;
  padding: 0.2rem 0 0.4rem;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.product .product-info .desc {
  color: #999;
  font-size: 1.3rem;
  line-height: 1.4;
  padding: 0.2rem 0 0.4rem;
}
.product .product-info .tag {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 1;
}
.product .product-info .tag em {
  font-size: 1.1rem;
  color: #999;
  padding: 0.2rem 0.4rem;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  border: 1px solid #e2e5e7;
  border-radius: 0.3rem;
  white-space: nowrap;
}
.product .product-info .func {
  line-height: 1;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}
.product .product-info .price {
  font-size: 1.1rem;
}
.product .product-info .price b {
  font-size: 1.8rem;
  color: #ff5a6e;
  margin-right: 0.4rem;
}
.product .btn-buy {
  display: inline-block;
  width: 7.6rem;
  font-size: 1.3rem;
  color: #fff;
  line-height: 2.6rem;
  border-radius: 3px;
  text-align: center;
  background-image: -webkit-linear-gradient(0deg, #ff8695, #ff5a6e);
  background-color: #ff5a6e;
}
button {
  border: none;
}
</style>

