<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods: {

    },
    mounted: function () {
      console.log('aaaa');
      this.$router.push({path: '/order'});
    }
}
</script>

<style lang="scss">
  @import "style/app.scss";
  #app{
    width: 7.5rem;
  }


</style>
