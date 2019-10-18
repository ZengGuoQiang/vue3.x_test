import {MutationTree} from 'vuex'
import { userInfo } from './types'

export const mutations : MutationTree<userInfo>={
    userLogin(state,userInfo){
        console.log(state,userInfo)
    }
}