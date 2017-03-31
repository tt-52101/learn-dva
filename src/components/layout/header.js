import { Row, Col, Menu, Button, Select, Dropdown, Icon } from 'antd';
const logSrc = 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg'
import { MenuItems, OptionItems } from '../../utils/config'
 
import styles from './index.less'
 

const SubMenu = Menu.SubMenu;


function Headers({handleMenuClick, selectedKeys, handleLogout}){
    const menu = (
      <Menu>
        <Menu.Item>
            <Button onClick={handleLogout} type="danger">退出</Button>
        </Menu.Item>
     
      </Menu>
    );
  
    return (
        <header id={styles.header}>
            <Row>
                <Col span={4}>
                    <a id={styles.logo} href="/"><img src={logSrc} alt=""/><span>Ant Design</span></a>
                </Col>
                <Col span={20}>
                <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                    <a className={styles.logout} href="#">
                        <Icon type="user" />
                    </a>
                </Dropdown>
                <Button type="ghost" size="small" className={styles.lang}>EN</Button>
                <Select className={styles.version} size="small" defaultValue="1.x">
                    {
                        OptionItems.map(item => {
                            return <option key={item.key}>{item.name}</option>
                        })
                    }
                    
                </Select>
                    <Menu
                      onClick={handleMenuClick}
                      selectedKeys={[selectedKeys]}
                      mode="horizontal"
                      id={styles.nav}
                    >
                    { 
                        MenuItems.map((item) => {
                            return <Menu.Item key={item.key}>{item.name}</Menu.Item>
                      }) 
                    }
                    </Menu>
                </Col>
            </Row>
        </header>
        )
}

export default Headers

