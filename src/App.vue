<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="item in menu" v-bind:key="item.component.cid" :to={path:item.path}>{{item.name}}|</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
	import Vue from 'vue'
	// let menu = (routerList as VueRouter)
	export default Vue.extend({
		data(){
			return {
				menu:this.$router
			}
		},
		beforeMount:function(){
			//设置初始化头部 目录
			this.$set(this.$data,"menu",this.$data.menu.options.routes)
		}
	})
// v-for="item in menu" v-bind:key="item.name"
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
