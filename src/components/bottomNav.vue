<template>
  <div class="nav-container">
    <div v-for="item in navList">
      <img :src="'../../static/' + item.src">
      <div>{{item.title}}</div>
    </div>
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
  display: flex;
  justify-content: space-around;
  font-size: 0.14rem;
  img {
    width: 0.23rem;
  }
}
</style>
