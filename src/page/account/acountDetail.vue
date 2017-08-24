<template>
  <div class="">
    vdfv
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
    type: {
      type: String,
      default: ''
    },
    money: {
      type: Number,
      default: 0
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
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.type {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  line-height: 0.35rem;
  border-bottom: 1px solid #C8C7CC;
}

</style>
