<template>
    <div>
        <input type="number" name="" id="num1" value="0" ref="num1" @change="sums">
        <input type="number" name="" id="num2" value="0" ref="num2" @change="sums">
        <span>{{this.data.sum}}</span>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator"


export default class setUp extends Vue{
    constructor(props:any){
        super(props);
        this.sums = this.sums.bind(this)
    }
    data={
        sum:0
    }
    public sums(){
        //用于页面的渲染，由于页面不自动更新 forceUpdate可以自动更新页面
        this.$forceUpdate();
        var num1 =  Number((this.$refs.num1 as HTMLInputElement).value);
        var num2 =  Number((this.$refs.num2 as HTMLInputElement).value);
        this.data.sum = num1+num2;
        this.$set(this.data,"sum",num1+num2)
    }
}

</script>