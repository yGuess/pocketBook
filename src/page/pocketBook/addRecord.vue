<template>
  <div>
    <div class="nav">
      <div @click="cancel">取消</div>
      <div @click="save">存储</div>
    </div>
    <p class="date">2017年9月25日</p>
    <div class="content">
      <div class="type">
        <p>类别</p>
        <p>选择类别</p>
        <p>></p>
      </div>
      <div class="type">
        <p>金额</p>
        <input type="text" placeholder="金额输入" name="" value="">
      </div>
      <div class="type">
        <p>账户</p>
        <p>现金</p>
        <p>></p>
      </div>
      <div class="type">
        <p>备注</p>
        <input type="text" placeholder="备注" name="" value="">
      </div>
    </div>
    <div class="btn">
      <div @click="save">存储</div>
      <div @click="rememberAgain">再记一笔</div>
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
  },
  computed: {
  },
  methods: {
    cancel () {
      console.log('fev')
      this.$router.go(-1)
    },
    save () {
      this.$router.go(-1)
    },
    rememberAgain () {
    }
  },
  watch: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
  line-height: 0.5rem;
  color: #fff;
  background: #EB7F13;
  div {
    margin: 0 0.1rem;
  }
}
.date {
  line-height: 0.5rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.content {
  background: #fff;
  div {
    display: flex;
    justify-content: space-between;
    margin: 0 0.1rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #ddd;
    input {
      width: 3rem;
      background: #fff;
    }
  }
}
.btn {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  color: #fff;
  line-height: 0.4rem;
  div {
    width: 1.5rem;
    border-radius: 0.05rem;
  }
  div:first-child {
    background: #FB9B3D;
  }
  div:last-child {
    background: #59C131;
  }
}
</style>
