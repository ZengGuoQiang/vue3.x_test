<template>
	<div id="app">
		<el-header>
			<el-menu id="nav" tab-position="top" router :default-active="$route.path">
				<!-- <el-tab-pane v-for="item in menu" v-bind:key="item.component.cid" :label="item.name">
					<router-link :to={path:item.path}>{{item.name}}</router-link>
				</el-tab-pane> -->
				<!-- <el-menu-item-group>
				</el-menu-item-group> -->
				<el-row type="flex" justify="center">
					<el-col v-for="item in menu" v-bind:key="item.component.cid" :span="menuOneLen">
						<el-menu-item v-bind:index="item.path">{{item.name}}
							<!-- <router-link :to={path:item.path}>{{item.name}}</router-link> -->
						</el-menu-item>
					</el-col>
				</el-row>
			</el-menu>
		</el-header>
		<el-container>
			<router-view/>
		</el-container>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'
	// let menu = (routerList as VueRouter)
	export default Vue.extend({
		data(){
			return {
				menu:this.$router,
				menuOneLen:0
			}
		},
		beforeMount:function(){
			//设置初始化头部 目录
			this.$set(this.$data,"menu",this.$data.menu.options.routes)
			//设定一行，每个标签的长度
			this.$set(this.$data,"menuOneLen",Math.floor(24/this.$data.menu.length))
		}
	})
// v-for="item in menu" v-bind:key="item.name"
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
