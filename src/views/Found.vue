<template>
  <div class="about">
    <Fnav01/>
    <Fnav02/>
    <Fnav03/>
    <Fnav04/>
  </div>
</template>
<script>
import Fnav01 from "@/components/Fnav01.vue";
import Fnav02 from "@/components/Fnav02.vue";
import Fnav03 from "@/components/Fnav03.vue";
import Fnav04 from "@/components/Fnav04.vue";
export default {
  components: {
    Fnav01,
    Fnav02,
    Fnav03,
    Fnav04,
  }
};
</script>
<style scoped>
body {
    background-color: #fff;
    margin: 0 auto;
    color: #666;
}
</style>
