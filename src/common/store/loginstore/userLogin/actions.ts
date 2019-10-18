import {userInfo} from './types'
import {ActionTree} from 'vuex'
import {userState} from '../types'

export const actions:ActionTree<userInfo,userState>={
    userLogin({commit},userParams):void{
        // const userParams:userInfo= {
        //     userName:"",
        //     password:"",
        //     email:"",
        //     age:0
        // }
        console.log('actions',userParams)
        commit('userLogin',userParams)
    }
}