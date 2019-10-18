<template>
	<form class="about">
		<input type="text" name="username" v-model="this.data.userName">
		<input type="text" name="password" v-model="this.data.password">
		<input type="text" name="email" v-model="this.data.email">
		<input type="number" name="age" v-model="this.data.age">
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
	// @formSub.State('userName') public userName!:string
	// @formSub.State('password') public password!:string
	// @formSub.State('email') public email!:string
	// @formSub.State('age') public age!:number
	data = {
		userName:"1",
		password:"2",
		email:"3",
		age:0
	}

	public submit(){
		console.log(this.data)
		this.userLogin(this.data)
	}
}
</script>