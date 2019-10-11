import {MutationTree} from 'vuex'
import num from './types'

export const mutations: MutationTree<num>={
    increments(state,count){
        count = state.nums++
    }
}