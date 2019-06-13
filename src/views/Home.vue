<template>
  <div class="iphonex_padding">
    <Hheader/>
    <HviewPager/>
    <Hentries/>
    <Hadvertisement/>
    <Hproductnav/>
    <Hcontent/>
    <Hadvisers/>
    <Haboutme/>
    <HteamWor/>
    <Hservice/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src

import Hheader from "@/components/Hheader.vue";
import HviewPager from "@/components/HviewPager.vue";
import Hentries from "@/components/Hentries.vue";
import Hadvertisement from "@/components/Hadvertisement.vue";
import Hproductnav from "@/components/Hproductnav.vue";
import Hcontent from "@/components/Hcontent.vue";
import Hadvisers from "@/components/Hadvisers.vue";
import Haboutme from "@/components/Haboutme.vue";
import HteamWor from "@/components/HteamWor.vue";
import Hservice from "@/components/Hservice.vue";

@Component({
  components: {
    Hheader,
    HviewPager,
    Hentries,
    Hadvertisement,
    Hproductnav,
    Hcontent,
    Hadvisers,
    Haboutme,
    HteamWor,
    Hservice
  },
  //首页渲染数据后通知仓库显示尾部组件
  created() {
    this.$store.state.isfooter = 1;
  }
})
export default class Home extends Vue {}
</script>
