import { Menu, Icon } from 'antd';
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
                        <SubMenu key={item.key} title={<span>{item.name}</span>}>
                            {
                                item.groups.map(group => {
                                    return (
                                        <MenuItemGroup key={group.key} title={group.name}>
                                            {
                                                group.children.map(child => {
                                                    return <Menu.Item key={child.key}>{child.name}</Menu.Item>
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