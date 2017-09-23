<template>
  <div>
    <div class="title">
      <p @click="goBack"> < 账户</p>
      <p>现金</p>
    </div>
    <div class="count-list">
      <p>2017年7月</p>
      <spend-item category="日常用品" spendDetail="7月13日/自己/纸巾" price="80"></spend-item>
    </div>
    <div class="bottom-nav">
      <bottomNav :navList="navList"></bottomNav>
    </div>
  </div>
</template>

<script>
import bottomNav from '../../components/bottomNav.vue'
import spendItem from '../../components/spendItem.vue'

export default {
  name: '',
  data () {
    return {
      navList: [
        {src: 'write-icon.png', title: '记账本', path: '/', state: false},
        {src: 'home-icon1.png', title: '账户', path: '/account', state: true},
        {src: 'set-icon.png', title: '设置', path: '/setUp', state: false}
      ]
    }
  },
  components: {
    bottomNav,
    spendItem
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    money: {
      type: Number,
      default: 0
    }
  },
  computed: {
    fontColor () {
      if (this.money < 0) {
        return 'red'
      } else {
        return '#006600'
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title {
    padding: 0.1rem;
    background: #FBB252;
    color: #fff;
    font-size: 0.16rem;
    font-weight: bold;
    p:first-child {
      float: left;
    }
  }
  .count-list {
    text-align: left;
    font-size: 0.12rem;
    line-height: 0.30rem;
    color: #6D6D72;
    p {
      padding-left: 0.15rem;
    }
  }
  .bottom-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #FDFDFD;
  }
</style>
