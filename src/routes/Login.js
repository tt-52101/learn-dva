import Login from '../components/login/login.js'
import React, { PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
function Login1({is_login}){
	const loginProps = {
	    onSubmit(data) {
	       
	        const {name, pwd} = data;
	        dispatch({
	            type: 'app/login',
	            payload: {
	                name,
	                pwd
	            }
	        })
	    }
	}
	return <Login {...loginProps} />
}
function mapStateToProps({login}) {
    console.log(login)
    return login;
}
export default connect(mapStateToProps)(Login1)