<template>
  <div class="date-container">
    <div class="month">
      <div @click="prev" class="btn"><</div>
      <div>{{year}}年{{month}}月</div>
      <div @click="next" class="btn">></div>
    </div>
    <div class="week">
      <div v-for = "item in weeks">{{item}}</div>
    </div>
    <div class="dates">
      <div :style="{ height: height + 'rem', lineHeight: height + 'rem', width: height * firstDayOfMonth + 'rem' }"></div>
      <div v-for = "item in dayCountOfMonth" v-if="item < selectDate" @click="getSelectDate(item)" :style="{ height: height + 'rem', lineHeight: height + 'rem'}">{{item}}</div>
      <div v-for = "item in dayCountOfMonth" v-if="item === selectDate" @click="getSelectDate(item)" :style="{ height: height + 'rem', lineHeight: height + 'rem', background: '#FBB252', color: '#fff'}">{{item}}</div>
      <div v-for = "item in dayCountOfMonth" v-if="item > selectDate" @click="getSelectDate(item)" :style="{ height: height + 'rem', lineHeight: height + 'rem' }">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datePicker',
  data () {
    return {
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      selectDate: this.date.getDate()
    }
  },
  props: {
    date: {
      type: Date,
      default: new Date()
    }
  },
  computed: {
    // 年
    year () {
      return this.date.getFullYear()
    },
    // 月
    month () {
      return this.date.getMonth() + 1
    },
    // 星期
    dayOfWeek () {
      return this.date.getDay()
    },
    // 这个月的第一天的星期
    firstDayOfMonth () {
      return new Date(this.year, this.month - 1, 1).getDay()
    },
    // 本月的天数
    dayCountOfMonth () {
      let y = this.year
      let m = this.month
      let count = m === 2 ? ((y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) ? 29 : 28) : (m < 8 ? (m % 2 === 0 ? 30 : 31) : (m % 2 === 0 ? 31 : 30))
      return count
    },
    height () {
      return (screen.width - 20) / 700
    }
  },
  methods: {
    getSelectDate (selectDate) {
      this.selectDate = selectDate
      this.$emit('selectDate', selectDate)
    },
    prev () {
      this.$emit('prev')
    },
    next () {
      this.$emit('next')
    }
  },
  watch: {
    // 考虑到不同的月份不一定有相同的date,因此date不是本月的默认selectDate为本月第一天
    date () {
      if (new Date().getFullYear() !== this.year || new Date().getMonth() !== this.month - 1) {
        this.selectDate = 1
      } else {
        this.selectDate = this.date.getDate()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .month {
    width: calc(100% - 0.2rem);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    .btn {
      font-weight: bold;
      color: #FBB252;
    }
  }
  .week, .dates {
    width: calc(100% - 0.2rem);
    margin: 0.1rem auto;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.14rem;
  }
  .week {
    color: #BABABA;
    div {
      width: calc(100% / 7);
      border-radius: 50%;
    }
  }
  .dates {
  font-size: 0.16rem;
  font-weight: 500;
    div {
      width: calc(100% / 7);
      border-radius: 50%;
    }
  }
</style>
