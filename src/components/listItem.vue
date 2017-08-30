<template>
  <div class="type" @click="goDetail">
    <div> {{leftTitle}} </div>
    <div v-if="type===1">
      <span :style="{color: color}">{{money.toFixed(2)}} &nbsp;&nbsp;</span>
      <span v-if="hasArrow">></span>
    </div>
    <div v-if="type===2">
      <span :style="{color: color}">{{rightTitle}}</span>
      <span v-if="hasArrow">></span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    leftTitle: {
      type: String,
      default: ''
    },
    type: {
      type: Number, // 1--数字， 2--文字，
      default: 1
    },
    hasArrow: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    money: {
      type: Number,
      default: 0
    },
    rightTitle: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    fontColor () {
      if (this.money < 0) {
        return 'red'
      } else {
        return '#006600'
      }
    }
  },
  methods: {
    goDetail () {
      this.$router.push({path: this.path})
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.type {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  line-height: 0.35rem;
  border-bottom: 1px solid #C8C7CC;
  div:last-child span {
    color: #C8C7CC;
    font-size: 0.15rem;
  }
}

</style>
