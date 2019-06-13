<template>
    <div id="auto3">
        <div class="box comment_box clearfix">
            <div class="box_tit">用户评价（88条）</div>
            <div class="commentlist">
                <div class="comment_li">
                    <div class="comment_head"><img
                            data-original="//thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLF3UjvnZEyxYyDDedM1iakgicic9LIPibULB4n6ibN9VOlZmG2ELpaN2hlIjrDJ8GnAFJmKU7l3RG10QA/132"
                            src="//thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLF3UjvnZEyxYyDDedM1iakgicic9LIPibULB4n6ibN9VOlZmG2ELpaN2hlIjrDJ8GnAFJmKU7l3RG10QA/132"
                            alt="" class="img">
                        <p class="comment_name">人**</p>
                    </div>
                    <div class="comment_de row middle"><span class="comment_star">
                            <div class="star lv5"></div>
                        </span> <span class="comment_phrase col">非常好</span>
                        <!---->
                    </div>
                    <p class="comment_text">超高性价比，我们全家都买了一份</p>
                    <!---->
                    <!---->
                </div>
                <div class="comment_li">
                    <div class="comment_head"><img data-original=""
                            src="https://sslstatic.xiaoyusan.com/insuranceV2/img/head.2cd05aa9c70de1d7.png" alt=""
                            class="img">
                        <p class="comment_name">**</p>
                    </div>
                    <div class="comment_de row middle"><span class="comment_star">
                            <div class="star lv5"></div>
                        </span> <span class="comment_phrase col">非常好</span>
                        <!---->
                    </div>
                    <p class="comment_text">购买流程方便，计划看上去不错</p>
                    <!---->
                    <!---->
                </div>
                <div class="comment_li">
                    <div class="comment_head"><img
                            data-original="//thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoQksu180KmMaINBITk5HOrsg0Yrs0SyWtWkOMMNibUcEQfHm8hReSensODV8Kf7A6Bq2u4QFghzaw/132"
                            src="//thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoQksu180KmMaINBITk5HOrsg0Yrs0SyWtWkOMMNibUcEQfHm8hReSensODV8Kf7A6Bq2u4QFghzaw/132"
                            alt="" class="img">
                        <p class="comment_name">M**</p>
                    </div>
                    <div class="comment_de row middle"><span class="comment_star">
                            <div class="star lv5"></div>
                        </span> <span class="comment_phrase col">非常好</span>
                        <!---->
                    </div>
                    <p class="comment_text">正好需要配置，正好出了这一款。</p>
                    <!---->
                    <!---->
                </div>
            </div> 
            <a href="https://www.xiaoyusan.com/comment/index/list?groupid=136956&amp;chn=h5index&amp;type=1&amp;page=1"
                class="arrow">
                <div class="comment_more">查看更多<span class="arrow"></span></div>
            </a>
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

.comment_box {
  margin-bottom: 1rem;
}
.box {
  background-color: #fff;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
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

.commentlist {
  padding: 0 1.3rem 0 1.4rem;
}

.comment_li:not(:last-of-type) {
  border-bottom: 1px solid #e2e5e7;
}
.comment_li {
  position: relative;
  width: 100%;
  padding: 1.8rem 0 1.5rem 5.3rem;
  min-height: 10.5rem;
}

.comment_head {
  position: absolute;
  top: 1.8rem;
  left: 0;
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 0.5rem;
}

.comment_head > img {
  border-radius: 50%;
}
.img {
  width: 100%;
  height: 100%;
}
img {
  border: 0 none;
  vertical-align: top;
}

.comment_name {
  font-size: 1.2rem;
  color: #3c3c3c;
  text-align: center;
  margin-top: 0.5rem;
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

.row.middle {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-flex-pack: center;
  flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.comment_de {
  margin: 0 0 0.7rem;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.comment_star {
  width: 9.75rem;
  height: 1.3rem;
  background: url(https://sslstatic.xiaoyusan.com/insuranceV2/img/star1.fedb622d9ca56dc4.png)
    no-repeat;
  background-size: 100%;
}

.comment_star .star.lv5 {
  width: 100%;
}
.comment_star .star {
  height: 100%;
  background: url(https://sslstatic.xiaoyusan.com/insuranceV2/img/star.612cf647f5cf98ca.png)
    no-repeat;
  background-size: 9.75rem 1.3rem;
}

.comment_phrase {
  font-size: 1.4rem;
  color: #ff8b17;
}
.col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

.comment_reply,
.comment_text {
  font-size: 1.4rem;
  color: #3c3c3c;
}
.comment_text {
  margin-bottom: 0.9rem;
  word-wrap: break-word;
}

a {
  text-decoration: none;
  color: #333;
}

.clearfix:after {
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
</style>




