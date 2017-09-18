<template>
  <div>
    <pocketNav :navOn="navOn"></pocketNav>
    <datePicker :date="date" @selectDate="getSelectDate" @prev="prev" @next="next" class="time"></datePicker>
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
