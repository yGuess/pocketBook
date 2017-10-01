<template>
  <div>
    <pocketNav :navOn="navOn"></pocketNav>
    <datePicker :date="date" @selectDate="getSelectDate" @prev="prev" @next="next" class="time"></datePicker>
  </div>
</template>

<script>
import pocketNav from './pocketNav.vue'
import datePicker from '../../components/datePicker.vue'
export default {
  name: 'app',
  data () {
    return {
      navOn: 0,
      date: new Date(),
      selectDate: new Date().getDate()
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
</style>
