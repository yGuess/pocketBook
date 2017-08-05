<template>
  <div class="nav-container">
    <router-link :to="item.path" v-for="item in navList">
      <img :src="'../../static/' + item.src">
      <div v-if="item.state" style="color: #FBB252">{{item.title}}</div>
      <div v-if="!item.state">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'bottomNav',
  data () {
    return {
    }
  },
  props: {
    navList: {
      type: Array,
      default: [{src: '', name}]
    }
  },
  created () {
    // do something after creating vue instance
  },
  methods: {
  },
  watch: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-container {
  padding-top: 0.1rem;
  display: flex;
  justify-content: space-around;
  font-size: 0.14rem;
  border-top: 1px solid #DEDADA;
  img {
    width: 0.23rem;
  }
  a {
    text-decoration: none;
    color: #000;
  }
}
</style>
