<template>
  <div id="app">
    <router-view></router-view>
    <div class="bottom-nav">
      <bottomNav></bottomNav>
    </div>
  </div>
</template>

<script>
import bottomNav from './components/bottomNav.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    bottomNav
  },
  methods: {
  },
  mounted () {
    // do something after mounting vue instance
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.14rem;
}
.bottom-nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #FDFDFD;
  div:nth-child(2) {
    color: #FBB252;
  }
}
</style>
