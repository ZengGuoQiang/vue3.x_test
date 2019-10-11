import {Module} from 'vuex'
import num from './types'
import {countNum} from '../types'
import {actions} from './actions'
import {mutations} from './mutations'

const state : num ={
    nums:0
}
const namespaced  =true
export const addNum : Module<num,countNum>={
    namespaced ,
    state,
    actions,
    mutations
}

export default state