<template>
  <div>
    <div class="title">
      <p> < 账户</p>
      <p>现金</p>
    </div>
    <div class="assets">
      <div class="assets-amount">
        <p>-1402.63</p>
        <p>总资产</p>
      </div>
    </div>
    <list-item leftTitle="初始金额" :hasArrow=false  class="list-item" color="#006600"></list-item>
    <list-item leftTitle="账户类型" :type=2 :hasArrow=false color="#000" rightTitle="现金" class="list-item"></list-item>
    <div class="count-list">
      收支
      <list-item leftTitle="收入" class="list-item" color="#006600"></list-item>
      <list-item leftTitle="支出" class="list-item" color="red"></list-item>
    </div>
    <div class="count-list">
      转账
      <list-item leftTitle="转入" class="list-item" color="#006600"></list-item>
      <list-item leftTitle="转出" class="list-item" color="red"></list-item>
    </div>
    <div class="bottom-nav">
      <bottomNav :navList="navList"></bottomNav>
    </div>
  </div>
</template>

<script>
import bottomNav from '../../components/bottomNav.vue'
import listItem from '../../components/listItem.vue'

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
    listItem
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
  .assets {
    .assets-amount {
      padding: 0.15rem 0 0.05rem;
      font-size: 0.16rem;
      border-bottom: 1px solid #eee;
      background: #fff;
      p:first-child {
        color: #f00;
      }
      p:last-child {
        margin: 0.05rem 0;
        color: #aaa;
        font-size: 0.12rem;
      }
    }
  }
  .count-list {
    padding-left: 0.15rem;
    text-align: left;
    font-size: 0.12rem;
    line-height: 0.30rem;
    color: #6D6D72;
    .list-item {
      margin-left: -0.15rem;
    }
  }
  .bottom-nav {
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #FDFDFD;
  }
</style>
