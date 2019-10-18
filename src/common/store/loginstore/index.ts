import Vue from "vue"
import Vuex,{StoreOptions} from 'vuex'
import {userState} from './types'
import { users } from './userLogin'

Vue.use(Vuex)

const userStore:StoreOptions<userState>={
    modules:{
        users
    }
}

export default new Vuex.Store<userState>(userStore)