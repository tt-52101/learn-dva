import {login} from '../services/login';
import { parse } from 'qs'
export default {
    namespace: 'app',
    state: {
         is_login: false,
         username: ''
    },
    reducers: {
        loginSuccess(state, action){
            return {...state, is_login: true}
        },
        logoutSuccess(state){
            return {...state, is_login: false}
        }
    },
    effects: {
        * login({payload}, { call, put }) {
            
            yield put({
                type: 'loginSuccess',
                payload: {
                    is_login: true,
                    
                }
            })
        },
        * logout(action, { call, put }) {
            
            yield put({
                type: 'logoutSuccess',
                 
            })
        },
        
    },
    subscriptions: {
        setup({dispatch}) {
            // dispatch({type: 'login'})
        }
    },
};