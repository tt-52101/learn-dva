import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'dva'
import { browserHistory } from 'dva/router'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer'
import Sider from '../components/layout/silder'
import { routerRedux } from 'dva/router'
import Login from './login'

import styles from '../components/layout/index.less';


function App({ children, location, dispatch, app }) {
    const { is_login, selectedKeys } = app;
    
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
            dispatch({
                type: 'app/logout'
            })
            browserHistory.push('/') //退出后地址栏应该显示首页地址 
        },
        location,
        selectedKeys,
        handleMenuClick(item, key, keyPath) {
            dispatch({
                type: 'app/selectMenu',
                key: item.key
            })
        }
    }
    return (
        is_login ? 
        <div className={styles.wrap}>
            <Header {...headerProps}></Header>
            <div className={styles.wrapper}>
                <Row>
                    <Col md={6} lg={4}>
                        <Sider location={location} />
                    </Col>
                    <Col md={18} lg={20}>
                        <div className={styles.main}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
        : <Login {...loginProps} />
        )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(App)


