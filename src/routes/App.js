import React, { PropTypes } from 'react'
import { connect } from 'dva'
import styles from '../components/layout/index.css';
import Header from '../components/layout/header';
// import MainLayout from '../components/MainLayout/MainLayout'
import { routerRedux } from 'dva/router'
import Login from './login'

function App({ children, location, dispatch, app }) {
    console.log(app)
    const { is_login } = app;
    
    const loginProps = {
        onOk(data) {
           
            console.log(data)
            dispatch({
                type: 'app/login',
                payload: data
               
            })
        }
    }
    const headerProps = {
        handleLogout() {
            console.log('string')
            dispatch({
                type: 'app/logout'
            })
        },
        location
    }
    return (<div>{is_login
        ? 
        <div className={styles.normal}>
            <Header {...headerProps} />
            <div className={styles.content}>
                <div className={styles.main}>
                {children}
                </div>
            </div>
        </div>
        : <Login {...loginProps} />}</div>)
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(App)


