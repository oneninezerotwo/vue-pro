<template>
    <div class="mine">
        <Mhead />
        <Mlist/>
        <Mmine/>
        <Mserver/>
        <Mcons/>
        <Hfooter/>
    </div>
</template>
<script>
// @ is an alias to /src
import Mhead from '@/components/Mhead.vue';
import Mlist from '@/components/Mlist.vue';
import Mmine from '@/components/Mmine.vue';
import Mserver from '@/components/Mserver.vue';
import Mcons from '@/components/Mcons.vue';
import Hfooter from '@/components/Hfooter.vue';

export default {
    name: 'mine',
    components: {
        Mhead,
        Mlist,
        Mmine,
        Mserver,
        Mcons,
        Hfooter,
    }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

body {
  background-color: #fff;
  margin: 0 auto;
  color: #666;
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  min-width: 320px;
  max-width: 750px;
  background: #fff;
  font: 14px/1.5 "Helvetica Neue", Helvetica, "Microsoft Yahei", Arial,
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  line-height: 1.4;
  color: #666;
  -webkit-text-size-adjust: 100% !important;
  -webkit-user-select: none;
  user-select: none;
  background-color: #fff;
  line-height: 1.5;
}
</style>