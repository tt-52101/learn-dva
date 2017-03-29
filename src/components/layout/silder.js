import { Menu, Icon } from 'antd';
import { Link } from 'dva/router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import SideMenus from '../../utils/sideMenus'


class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        
        defaultSelectedKeys={['Button']}
        defaultOpenKeys={['Component']}
        mode="inline"
      >
        {
            SideMenus.map(item => {
                return (
                        <SubMenu key={item.key} title={<h4>{item.name}</h4>}>
                            {
                                item.groups.map(group => {
                                    return (
                                        <MenuItemGroup key={group.key} title={group.name}>
                                            {
                                                group.children.map(child => {
                                                    return <Menu.Item key={child.key}> <Link to={child.key.toLowerCase()}>{child.name}</Link> </Menu.Item>
                                                })
                                            }
                                        </MenuItemGroup>
                                        )
                                })
                            }
                        </SubMenu>
                    )
            })
        }
      
      </Menu>
    );
  }
}

 export default Sider;