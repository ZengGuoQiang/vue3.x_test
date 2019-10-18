import {actions} from './actions'
import {mutations} from './mutations'
import {userInfo} from './types'
import {Module} from 'vuex'
import { userState } from '../types'

const namespaced  =true

const state:userInfo = {
    userName: "",
    password: "",
    email: "",
    age: 0
}

export const users:Module<userInfo,userState>={
    namespaced,
    actions,
    state,
    mutations,
}

export default state