<template>
  <div>
    <div class="nav-wrapper">
      <div class="nav">
        <div @click="goDate">日历</div>
        <div @click="goBill">清单</div>
      </div>
      <p>+</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    goDate () {

    },
    goBill () {

    }
  },
  mounted () {
    // do something after mounting vue instance
  },
  props: {
    navOn: {
      type: String,
      default: 'data'  // 0-默认为日历，1-清单
    }
  }
}
</script>

<style lang="scss">
.nav-wrapper {
  height: 0.5rem;
  color: #fff;
  background: #EB7F13;
  font-size: 0.16rem;
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 0.8rem;
      height: 0.3rem;
      margin-top: 0.1rem;
      line-height: 0.3rem;
      border: 1px solid #fff;
      border-radius: 0.04rem;
    }
    div:first-child {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background: #fff;
      color: #EB7F13;
    }
    div:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  p {
    position: absolute;
    top: 0;
    right: 0.1rem;
    line-height: 0.5rem;
    font-size: 0.25rem;
  }
}
</style>
