// 无ts时普通写法
// import { createStore } from 'vuex'


// const store = createStore({
//     state: {
//         loginState: false 
//     },

//     getters: {
//         getLoginState: (state)=> {
//             return state.loginState
//         }
//     },

//     mutations: {
//         changeLoginState(state, loginState) {
//             state.loginState = loginState
//         }   
//     },

//     actions: {

//     }

// })


// export default store

// ts 类型写法
import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"

export interface State {
    loginState?: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        loginState: false
    },
    getters: {
        getLoginState: (state) => {
            return state.loginState
        }
    },
    mutations: {
        changeLoginState(state, loginState: boolean) {
            state.loginState = loginState
        }
    },
    actions: {

    }

})

export function useStore() {
    return baseUseStore(key)
}