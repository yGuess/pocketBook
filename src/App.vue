<template>
  <div id="app">
    <div class="month-btn">
      <div @click="prev"><</div>
      <div @click="next">></div>
    </div>
    <datePicker :date="date"></datePicker>
  </div>
</template>

<script>
import datePicker from './components/datePicker.vue'
export default {
  name: 'app',
  data () {
    return {
      date: new Date()
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
.month-btn {
  width: 100%;
  font-size: 0.14rem;
}
.month-btn > div:first-child {
  float: left;
  margin-left: 0.1rem;
}
.month-btn > div:last-child {
  float: right;
  margin-right: 0.1rem;
}
</style>
