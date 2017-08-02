<template>
  <div id="app">
    <datePicker :date="date" @selectDate="getSelectDate" @prev="prev" @next="next" class="time"></datePicker>
  </div>
</template>

<script>
import datePicker from './components/datePicker.vue'
export default {
  name: 'app',
  data () {
    return {
      date: new Date(),
      selectDate: new Date().getDate()
    }
  },
  components: {
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.time {
  margin-top: 0.1rem;
}
</style>
