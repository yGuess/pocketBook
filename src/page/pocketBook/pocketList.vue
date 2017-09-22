<template>
  <div>
    <pocketNav :navOn="navOn"></pocketNav>
    <div class="month">
      <div @click="prev" class="btn"><</div>
      <div>{{year}}年{{month}}月</div>
      <div @click="next" class="btn">></div>
    </div>
    <div class="bottom-nav">
      <bottomNav :navList="navList"></bottomNav>
    </div>
  </div>
</template>

<script>
import pocketNav from './pocketNav.vue'
import bottomNav from '../../components/bottomNav.vue'
import datePicker from '../../components/datePicker.vue'
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
    datePicker,
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
.time {
  background: #fff;
}
.bottom-nav {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #FDFDFD;
}
</style>
