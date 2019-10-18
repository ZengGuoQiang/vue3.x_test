import num from './types'
import {ActionTree} from 'vuex'
import {countNum} from '../types'

export const actions:ActionTree<num,countNum>={
    increment({commit}):void{
        const count:num={
            nums:0
        }
        commit('increments',count)
    }
}