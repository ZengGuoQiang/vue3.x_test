<template>
	<el-form :model="baseMes" :rules="rules" ref="baseMes" label-width="100px">
		<el-form-item label="用户名" prop="userName">
			<el-input name="userName" v-model="baseMes.userName"></el-input>
		</el-form-item>

		<el-form-item label="密码" prop="password">
			<el-input name="password" v-model="baseMes.password"></el-input>
		</el-form-item>

		<el-form-item label="邮箱" prop="email">
			<el-input name="email" v-model="baseMes.email"></el-input>
		</el-form-item>

		<el-form-item label="年龄" prop="age">
			<el-input name="age" v-model.number="baseMes.age"></el-input>
		</el-form-item>

		<el-form-item>
			<el-upload
				action="/"
				headers=""
				multiple="true"
				data="baseMes"
				accept=""
				on-preview=""
				on-remove=""
				on-success=""
				on-error=""
				on-progress=""
				on-change=""
				before-upload=""
				before-remove=""
				list-type="text"
				http-request=""
			>
				<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
				<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
			</el-upload>
		</el-form-item>

		<el-form-item>
			<el-button value="提交" @click="submit('baseMes')">提交</el-button>
			<el-button value="提交" @click="reset('baseMes')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script lang="ts">
// import {Vue,Component,Prop} from 'vue-property-decorator'
import Vue from 'vue'
import Component from 'vue-class-component'
import {namespace} from 'vuex-class'
import store from '@/common/store/loginstore'
import {Form,Message} from "element-ui"

const formSub = namespace('users')

@Component({
	store
})
export default class about extends Vue{
	@formSub.Action('userLogin') public userLogin!:Function
	data(){
		var validateEmail = (rule:any,value:any,callback:Function)=>{
			if(value === ""){
				return callback(new Error("请输入邮箱"))
			}else{
				var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(reg.test(value)){
					return callback()
				}else{
					return callback(new Error("邮箱格式错误"))
				}
			}
		};
		var validateAge = (rule:any,value:any,callback:Function)=>{
			if(value < 18){
				return callback(new Error("未满18岁的小赤佬"))
			}
		}
		return {
			baseMes:{
				userName:"",
				password:"",
				email:"",
				age:0
			},
			rules:{
				userName:[
					{required:true,message:"请输入用户名",trigger:"blur"},
					{min:3,max:5,message:"用户名在3到5个字符之间",trigger:"blur"}
				],
				password:[
					{required:true,message:"请输入您的密码",trigger:"blur"},
					{min:6,max:18,message:"密码在6到18位之间",trigger:"blur"}
				],
				email:[
					{validator:validateEmail,trigger:"blur"}
				],
				age:[
					{required:true,message:"请输入年龄",trigger:"blur"},
					{validator:validateAge,trigger:"blur"}
				]
			}
		}
	}

	public submit(form:string){
		(this.$refs[form] as Form).validate((valid:any) => {
			if(valid){
				this.userLogin(this.$data)
			}else{
				Message({
					message:"提交失败",
					type:"warning",
					duration:1000,
					center:true,
					//iconClass:"el-icon-orange",//使用此属性type属性失效
					//customClass:"Warning"//自定义样式
				})
			}
		});
	}
}
</script>