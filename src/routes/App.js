import React from 'react'
import { connect } from 'dva'
import styles from '../components/layout/index.less';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer'
import Sider from '../components/layout/silder'
import { routerRedux } from 'dva/router'
import { Row, Col } from 'antd'
import Login from './login'


function App({ children, location, dispatch, app }) {
    console.log(app)
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
            console.log('string')
            dispatch({
                type: 'app/logout'
            })
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


