import Vue from "vue"
import Vuex,{StoreOptions} from 'vuex'
import {countNum} from './types'
import { addNum } from './count/index'

Vue.use(Vuex)

const countStore:StoreOptions<countNum>={
    modules:{
        addNum
    }
}

export default new Vuex.Store<countNum>(countStore)