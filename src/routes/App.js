import React, { PropTypes } from 'react'
import { connect } from 'dva'
import styles from '../components/layout/index.less';
import Header from '../components/layout/header';
import Sider from '../components/layout/menu.js'
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
    return (
        is_login ? 
        <div className={styles.wrap}>
            <Sider/>
            <div className={styles.main}>
                {children}
            </div>
        </div>
        : <Login {...loginProps} />
        )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(App)


