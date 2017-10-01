<template>
  <div>
    <div class="operate">
      <div><span>编辑</span></div>
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
      <list-item leftTitle="现金" :money="money" path="account/acountDetail" color="red" class="list-item"></list-item>
      <list-item leftTitle="银行" color="#006600" class="list-item"></list-item>
      <list-item leftTitle="银行" color="#006600" class="list-item"></list-item>
    </div>
  </div>
</template>

<script>
import listItem from '../../components/listItem.vue'
export default {
  name: 'app',
  data () {
    return {
      money: -1200
    }
  },
  components: {
    listItem
  },
  methods: {
    bottomLayout () {
    }
  },
  mounted () {
    this.bottomLayout()
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
  .assets-detail {
    display: flex;
    justify-content: space-around;
    font-size: 0.12rem;
    line-height: 0.16rem;
    background: #fff;
    padding: 0.05rem 0;
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
  padding-left: 0.15rem;
  text-align: left;
  font-size: 0.12rem;
  line-height: 0.30rem;
  color: #6D6D72;
  .list-item {
    margin-left: -0.15rem;
  }
}
</style>
