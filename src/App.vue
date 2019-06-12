<template>
  <div id="app">
    <router-view/>
    <hfooter/>
  </div>
</template>

<script>
import Hfooter from './components/Hfooter.vue';
//局部注册
export default {
  components: {
    Hfooter
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  font-size: 10px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
