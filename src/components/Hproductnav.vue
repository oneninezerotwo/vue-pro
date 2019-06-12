<template>
    <nav class="product-nav sticky sticky_box">
        <div class="product-cat row">
            <a href="javascript: void 0;" v-for="(item,index) in types" :key="index" @click="toggle(index)" :class="{
                active:tab==index
            }" index="0" data-track="index_recommend_new">
                <span v-text="item.descript"></span>
            </a>
            <!-- <a href="javascript: void 0;" index="1" data-track="index_children_new" class="">
                <span>少儿</span>
            </a>
            <a href="javascript: void 0;" index="2" data-track="index_adult_new" class="">
                <span>成人</span>
            </a>
            <a href="javascript: void 0;" index="3" data-track="index_parents_new">
                <span>父母</span>
            </a>
            <a href="javascript: void 0;" index="8" data-track="index_family_new">
                <span>家庭</span>
            </a>
            <a href="javascript: void 0;" index="5" data-track="index_trip_new">
                <span>旅行</span>
            </a>
            <a href="javascript: void 0;" index="10" data-track="index_edu_new">
                <span>教育金</span>
            </a> -->
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            types: [{
                descript: "推荐",
                track: "index_recommend_new"
            }, {
                descript: "少儿",
                track: "index_children_new"
            }, {
                descript: "成人",
                track: "index_adult_new"
            }, {
                descript: "父母",
                track: "index_parents_new"
            }, {
                descript: "家庭",
                track: "index_family_new"
            }, {
                descript: "旅行",
                track: "index_trip_new"
            }, {
                descript: "教育金",
                track: "index_edu_new"
            }],
            tab: 0
        }
    },
    methods: {
        toggle(index) {
            this.tab = index
        }
    }
}
</script>
<style>
.sticky_box {
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 401;
}
.product-cat {
  line-height: 4.2rem;
  background: #fff;
  position: relative;
}
.product-cat a.active {
  color: #333;
  font-weight: 700;
  font-size: 1.6rem;
}

.product-cat a {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
  text-align: center;
  font-size: 1.4rem;
  position: relative;
  white-space: nowrap;
  max-width: 33.3333%;
}
.product-cat a span {
  display: inline-block;
  position: relative;
}
.product-cat a span:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 1rem;
  width: 100%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  padding: 0 0.2rem;
  height: 0.6rem;
  border-radius: 0.6rem;
  -webkit-box-shadow: 0 0.3rem 0.5rem 0 rgba(176, 165, 255, 0.5);
  box-shadow: 0 0.3rem 0.5rem 0 rgba(176, 165, 255, 0.5);
  background-color: #8f7ff0;
  opacity: 0;
}
</style>

