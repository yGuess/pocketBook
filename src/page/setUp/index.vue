<template>
  <div>
    <div class="bottom-nav">
      <bottomNav :navList="navList"></bottomNav>
    </div>
  </div>
</template>

<script>
import bottomNav from '../../components/bottomNav.vue'
export default {
  name: 'app',
  data () {
    return {
      navList: [
        {src: 'write-icon.png', title: '记账本', path: '/', state: false},
        {src: 'home-icon.png', title: '账户', path: '/account', state: false},
        {src: 'set-icon1.png', title: '设置', path: '/setUp', state: true}
      ]
    }
  },
  components: {
    bottomNav
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style>
.bottom-nav {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #FDFDFD;
}
</style>
