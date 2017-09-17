<template>
  <div class="spend-item">
    <div class="spend-detial">
      <h1>{{category}}</h1>
      <p>{{spendDetail}}</p>
    </div>
    <p class="price">
      {{price}}
    </p>
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
    category: {
      type: String,
      default: '日常用品'
    },
    spendDetail: {
      type: String,
      default: '7月13日/自己/纸巾'
    },
    price: {
      type: String,
      default: '20'
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.spend-item {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.05rem 0.15rem;
  border-bottom: 1px solid #C8C7CC;
  .spend-detial {
    h1 {
      font-size: 0.14rem;
      margin: 0;
      line-height: 0.2rem;
    }
    p {
      font-size: 0.12rem;
      margin: 0;
      line-height: 0.2rem;
    }
  }
  .price {
    font-size: 0.14rem;
  }
}
</style>
