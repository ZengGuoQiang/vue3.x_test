<template>
	<form class="about">
		<input type="text" name="username" v-model="obj.userName">
		<input type="text" name="password" v-model="obj.password">
		<input type="text" name="email" v-model="obj.email">
		<input type="number" name="age" v-model="obj.age">
		<button type="button" value="提交" @click="submit"></button>
	</form>
</template>

<script lang="ts">
// import {Vue,Component,Prop} from 'vue-property-decorator'
import Vue from 'vue'
import Component from 'vue-class-component'
import {namespace} from 'vuex-class'
import store from '@/common/store/loginstore'

const formSub = namespace('users')

@Component({
	store
})
export default class about extends Vue{
	@formSub.Action('userLogin') public userLogin!:Function
	data(){
		return {
			obj:{
				userName:"1",
				password:"2",
				email:"3",
				age:0
			}
		}
	}

	public submit(){
		this.userLogin(this.$data)
	}
}
</script>