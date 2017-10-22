<template>
  <div>
    <pocketNav :navOn="navOn"></pocketNav>
    <datePicker :date="date" @selectDate="getSelectDate" @prev="prev" @next="next" class="time"></datePicker>
    <div class="">
      {{test}}
    </div>
  </div>
</template>

<script>
import pocketNav from './pocketNav.vue'
import datePicker from '../../components/datePicker.vue'
import fetcher from 'axios'
export default {
  name: 'app',
  data () {
    return {
      navOn: 0,
      date: new Date(),
      selectDate: new Date().getDate(),
      test: 'hhh'
    }
  },
  components: {
    pocketNav,
    datePicker
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
    },
    getUserList () {
      fetcher.get('http://127.0.0.1:3000/test', {
        // 入参为空
      }).then((res) => {
        this.test = res.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    // do something after mounting vue instance
    this.getUserList()
  }
}
</script>

<style lang="scss">
.time {
  background: #fff;
}
</style>
