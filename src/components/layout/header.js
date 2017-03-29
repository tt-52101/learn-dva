import { Row, Col, Menu, Button, Select } from 'antd';
const logSrc = 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg'
import { MenuItems, OptionItems } from '../../utils/config'
 
import styles from './index.less'
 

const SubMenu = Menu.SubMenu;

function Headers({handleMenuClick, selectedKeys}){
  
    return (
        <header id={styles.header}>
            <Row>
                <Col span={4}>
                    <a id={styles.logo} href="/"><img src={logSrc} alt=""/><span>Ant Design</span></a>
                </Col>
                <Col span={20}>
                <div id={styles.searchBox}>
                    <Select
                      combobox
                      style={{ width: 200 }}
                      placeholder="搜索组件"
                    >
                        {
                            OptionItems.map(item => {
                                return <option key={item.key}>{item.name}</option>
                            })
                        }
                    </Select>
                </div>
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