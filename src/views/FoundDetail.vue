<template>
    <div id="boisto">
        <Fdtail01/>
        <Fdtail02/>
        <Fdtail03/>
    </div>
</template>
<script>
import Fdtail01 from "@/components/Fdtail01.vue";
import Fdtail02 from "@/components/Fdtail02.vue";
import Fdtail03 from "@/components/Fdtail03.vue";
export default {
    components:{
        Fdtail01,
        Fdtail02,
        Fdtail03,
    }
}
</script>
<style scoped>
#boisto{
    background-color: #f0f0f0;
    font-family: "微软雅黑";
    margin: 0 auto !important;
}
</style>


