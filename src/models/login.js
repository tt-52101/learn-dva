import {login} from '../services/login';
import { parse } from 'qs'
export default {
    namespace: 'login',
    state: {
         is_login: false,
         
    },
    reducers: {
        loginSuccess(state, action){
            return {...state, is_login: true}
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
                type: 'login',
                payload: {
                    is_login: false
                }
            })
        },
        
    },
    subscriptions: {
        
    },
};