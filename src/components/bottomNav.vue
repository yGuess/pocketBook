<template>
  <div class="nav-container">
    <router-link v-for="(item, index) in navList" :to="item.path" :key="index" :style="{color: item.color}">
      <div @click="navLayout(index)">
        <span v-if="index === 0">&#xE800;<br></span>
        <span v-if="index === 1">&#xE801;<br></span>
        <span v-if="index === 2">&#xE802;<br></span>
        {{item.title}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'bottomNav',
  data () {
    return {
      index: 0,
      navList: [
        {title: '记账本', path: '/', color: '#FBB252'},
        {title: '账户', path: '/account', color: '#000'},
        {title: '设置', path: '/setUp', color: '#000'}
      ]
    }
  },
  props: {
  },
  created () {
    // do something after creating vue instance
  },
  methods: {
    navLayout: function (index) {
      this.index = index
      this.navList.map((item) => {
        item.color = '#000'
      })
      this.navList[index].color = '#FBB252'
    }
  },
  watch: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
font-family: 'icon';
src: url('/static/font-icon/icon.eot'); /* IE9 Compat Modes */
src: url('/static/font-icon/icon.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('/static/font-icon/icon.woff') format('woff'), /* Modern Browsers */
           url('/static/font-icon/icon.ttf')  format('truetype'), /* Safari, Android, iOS */
           url('/static/font-icon/icon.svg#icon') format('svg'); /* Legacy iOS */
}

.nav-container {
  padding-top: 0.1rem;
  margin-bottom: 0.1rem;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  border-top: 1px solid #DEDADA;
  img {
    width: 0.23rem;
  }
  div {
    font-family: icon;
    span {
      display: block;
      margin-bottom: 0.05rem;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
}
</style>
