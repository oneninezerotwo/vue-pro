<template>
    <div class="login">
        <Lmain/>
    </div>
</template>
<script>
    // @ is an alias to /src
    import Lmain from '@/components/Lmain.vue';
   

    export default {
        name: 'login',
        components: {
            Lmain,
        }
    }
</script>
<style lang="scss" scoped>

html {
    height: 100%;
    font-size: 11.72px;
}

body {
    background-color: #f0f0f0;
    height: 100%;
}
body {
    margin: 0 auto;
    min-width: 320px;
    max-width: 640px;
    background: #FFF;
    font: 14px/1.5 "Helvetica Neue",Helvetica,"Microsoft Yahei",Arial,"Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
    line-height: 1.5;
    color: #666;
    -webkit-text-size-adjust: 100%!important;
    -webkit-user-select: none;
    user-select: none;
    background-color: #fff;
}
blockquote, body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, hr, input, legend, li, ol, p, pre, td, textarea, th, ul {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
</style>