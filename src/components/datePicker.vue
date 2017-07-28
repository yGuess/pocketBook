<template>
  <div class="date-container">
    <div class="month">
      <span>{{year}}年{{month}}月</span>
    </div>
    <div class="week">
      <div v-for = "item in weeks">{{item}}</div>
    </div>
    <div class="dates">
      <div v-for = "item in dayCountOfMonth" :style="{ height: height + 'px', lineHeight: height + 'px' }">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datePicker',
  data () {
    return {
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },
  props: {
    date: {
      type: Date,
      default: new Date()
    }
  },
  computed: {
    year () {
      return this.date.getFullYear()
    },
    month () {
      return this.date.getMonth() + 1
    },
    dayOfWeek () {
      return this.date.getDay()
    },
    firstDayOfMonth () {
      return new Date(this.year, this.month - 1, 1).getDay()
    },
    dayCountOfMonth () {
      let y = this.year
      let m = this.month
      let count = m === 2 ? ((y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) ? 29 : 28) : (m < 8 ? (m % 2 === 0 ? 30 : 31) : (m % 2 === 0 ? 31 : 30))
      let result = []
      for (var i = 0; i < this.firstDayOfMonth; i++) {
        result.push('')
      }
      for (let i = 1; i < count + 1; i++) {
        result.push(i)
      }
      return result
    },
    height () {
      return screen.width / 7
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .month {
    font-size: 0.18rem;
  }
  .week, .dates {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.14rem;
  }
  .week {
    margin-top: 0.1rem;
  }
  .week div, .dates div{
    width: calc(100% / 7);
  }
</style>
