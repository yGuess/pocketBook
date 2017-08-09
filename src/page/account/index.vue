<template>
  <div>
    <div class="operate">
      <div><span>编辑</span><span>转账</span></div>
      <div>账户</div>
      <div>+</div>
    </div>
    <div class="assets">
      <div class="assets-amount">
        <p>-1402.63</p>
        <p>总资产</p>
      </div>
      <div class="assets-detail">
        <div class="initial">
          <p>1200</p>
          <p>初始金额</p>
        </div>
        <div class="income">
          <p>1200</p>
          <p>收入</p>
        </div>
        <div class="expenditure">
          <p>1200</p>
          <p>支出</p>
        </div>
      </div>
    </div>
    <div class="count-list">
      账户列表
    </div>
    <div class="bottom-nav">
      <bottomNav :navList="navList"></bottomNav>
    </div>
  </div>
</template>

<script>
import bottomNav from '../../components/bottomNav.vue'
export default {
  name: 'app',
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
    bottomNav
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.operate {
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  background: #FBB252;
  color: #fff;
  font-size: 0.16rem;
  font-weight: bold;
  div span:first-child {
    margin-right: 0.2rem;
  }
}
.assets {
  .assets-amount {
    padding: 0.1rem 0;
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
  .assets-detail {
    display: flex;
    justify-content: space-around;
    font-size: 0.12rem;
    line-height: 0.15rem;
    background: #fff;
    p:nth-child(2) {
      color: #aaa;
    }
    p:nth-child(1) {
      color: #006600;
    }
    .expenditure {
      p:first-child{
        color: #f00;
      }
    }
  }
}
.count-list {
  text-align: left;
  font-size: 0.12rem;
  line-height: 0.18rem;
  color: #474545;
}
.bottom-nav {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #FDFDFD;
}
</style>
