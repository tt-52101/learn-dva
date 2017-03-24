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
        * login({ payload }, { call, put }) {
          
            localStorage.setItem('dva-token', 999)
            yield put({
                type: 'loginSuccess',
            })
        },
        *queryToken({}, { call, put }){
            yield put({
                type: 'loginSuccess',
            })
        },
        * logout(action, { call, put }) {
            localStorage.removeItem('dva-token');
            
            yield put({
                type: 'logoutSuccess',
                 
            })
        },
        
    },
    subscriptions: {
        setup({dispatch}) {
            
            if (localStorage.getItem('dva-token')) {
               dispatch({type: 'queryToken'})
            };
        }
    },
};