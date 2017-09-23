<template>
  <div>
    <pocketNav :navOn="navOn"></pocketNav>
    <div class="month">
      <div @click="prev" class="btn"><</div>
      <div>{{year}}年{{month}}月</div>
      <div @click="next" class="btn">></div>
    </div>
    <div class="initial">
      <div>
        <p>0.00</p>
        <p>收入</p>
      </div>
      <div>
        <p>840.00</p>
        <p>支出</p>
      </div>
      <div>
        <p>840.00</p>
        <p>余额</p>
      </div>
    </div>
    <div class="list">
      <div class="day-list" v-for="i in 10">
        <p class="date">6月30日</p>
        <div class="count-list">
          <spend-item category="日常用品" spendDetail="7月13日/自己/纸巾" price="80"></spend-item>
        </div>
        <p class="day-total">支出：82.30</p>
      </div>
    </div>
    <div class="bottom-nav">
      <bottomNav :navList="navList"></bottomNav>
    </div>
  </div>
</template>

<script>
import pocketNav from './pocketNav.vue'
import spendItem from '../../components/spendItem.vue'
import bottomNav from '../../components/bottomNav.vue'
export default {
  name: 'app',
  data () {
    return {
      navOn: 1,
      date: new Date(),
      selectDate: new Date().getDate(),
      navList: [
        {src: 'write-icon1.png', title: '记账本', path: '/', state: true},
        {src: 'home-icon.png', title: '账户', path: '/account', state: false},
        {src: 'set-icon.png', title: '设置', path: '/setUp', state: false}
      ]
    }
  },
  components: {
    pocketNav,
    spendItem,
    bottomNav
  },
  props: {
    year: {
      type: Number,
      default: 2017
    },
    month: {
      type: Number,
      default: 9
    }
  },
  methods: {
    prev () {
      let year = this.date.getFullYear()
      let month = this.date.getMonth() - 1
      let date = this.date.getDate()
      this.date = new Date(year, month, date)
    },
    next () {
      let year = this.date.getFullYear()
      let month = this.date.getMonth() + 1
      let date = this.date.getDate()
      this.date = new Date(year, month, date)
    },
    getSelectDate (data) {
      this.selectDate = data
    }
  },
  mounted () {
    // do something after mounting vue instance
  }
}
</script>

<style lang="scss">
.month {
  padding: 0 0.1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.18rem;
  background: #fff;
  line-height: 0.3rem;
  .btn {
    font-weight: bold;
    color: #FDB347;
  }
}
.initial {
  display: flex;
  justify-content: space-around;
  margin: 0.05rem 0;
  line-height: 0.2rem;
  div:first-child p:first-child {
    color: #006600;
  }
  div:nth-child(2) p:first-child {
    color: #f00;
  }
}
.day-list {
  .date {
    text-align: left;
    background: #fff;
    line-height: 0.3rem;
    padding-left: 0.15rem;
    border-bottom: 1px solid #C8C7CC;
  }
  .count-list {
    text-align: left;
    font-size: 0.12rem;
    line-height: 0.30rem;
    color: #6D6D72;
  }
  .day-total {
    text-align: right;
    padding-right: 0.15rem;
    line-height: 0.3rem;
  }
}
.list .day-list:last-child {
  margin-bottom: 0.8rem;
}
.bottom-nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #FDFDFD;
}
</style>
