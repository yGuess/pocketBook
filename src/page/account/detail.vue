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
  </div>
</template>

<script>
import spendItem from '../../components/spendItem.vue'

export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
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
</style>
