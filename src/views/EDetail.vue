<template>
    <div class="ed">
        <Eheader/>
        <Etypes/>
        <Elistcontent/>
        <Elistmore/>
        <Efooter/>
    </div>
</template>

<script>
// @ is an alias to /src
import Eheader from '@/components/Eheader.vue';
import Etypes from '@/components/Etypes.vue';
import Elistcontent from '@/components/Elistcontent.vue';
import Elistmore from '@/components/Elistmore.vue';
import Efooter from '@/components/Efooter.vue';

export default {
    name: 'homedetail',
    components: {
        Eheader,
        Etypes,
        Elistcontent,
        Elistmore,
        Efooter
    },
    //当前页面渲染后通知底部消失
    created() {
        this.$store.state.isfooter = 0
    },
}
</script>


