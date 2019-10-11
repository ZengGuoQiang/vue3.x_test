<template>
	<div id="count_test">
		<p>{{nums}}</p>
		<button @click="addclick"> + </button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import countNum from '@/common/count_store/count'
import {namespace} from 'vuex-class'

const addCount = namespace('addNum')

@Component
export default class HelloWorld extends Vue {
	@Prop() private msg!: string;
	//data数据


	@addCount.Action('increment') public increment!:Function
	@addCount.State('nums') public nums!:number

	/**
	 * name
	 */
	public addclick() {
		this.increment()
	}
}
</script>