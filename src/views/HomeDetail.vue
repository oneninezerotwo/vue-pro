<template>
    <div class="homedetail">
        <Hdhead/>
        <hdabout1/>
        <Hdabout2/>
        <Hdabout3/>
        <Hdabout4/>
        <Hdcon/>
        <Hdfoot/>
        <Hdlogo/>
    </div>
</template>
<script>
    // @ is an alias to /src
    import Hdhead from '@/components/Hdhead.vue';
    import Hdabout1 from '@/components/Hdabout1.vue';
    import Hdabout2 from '@/components/Hdabout2.vue';
    import Hdabout3 from '@/components/Hdabout3.vue';
    import Hdabout4 from '@/components/Hdabout4.vue';
    import Hdcon from '@/components/Hdcon.vue';
    import Hdfoot from '@/components/Hdfoot.vue';
    import Hdlogo from '@/components/Hdlogo.vue';
   

    export default {
        name: 'homedetail',
        components: {
           Hdhead,
           Hdabout1,
           Hdabout2,
           Hdabout3,
           Hdabout4,
           Hdcon,
           Hdfoot,
           Hdlogo,
        }
    }
</script>
<style lang="scss" scoped>

</style>