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
    //手动改变地址栏路径和点击菜单时，让相应的菜单高亮，点击时，pathname不带'/'
    const pathname = this.props.location.pathname;
    const _selectedKeys = pathname === '/' ? 'introduce': pathname.substr(0,1) === '/' ? pathname.substr(1) : pathname
    console.log(_selectedKeys)
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[_selectedKeys]}
        defaultOpenKeys={['component']}
        mode="inline"
      >
        {
            SideMenus.map(item => {
                return (
                    item.groups ? 
                    <SubMenu key={item.key.toLowerCase()} title={<h4>{item.name}</h4>}>
                        {
                            item.groups.map(group => {
                                return (
                                    <MenuItemGroup key={group.key.toLowerCase()} title={group.name}>
                                        {
                                            group.children.map(child => {
                                                return <Menu.Item key={child.key.toLowerCase()}> <Link to={child.key.toLowerCase()}>{child.name}</Link> </Menu.Item>
                                            })
                                        }
                                    </MenuItemGroup>
                                    )
                            })
                        }
                    </SubMenu> :
                    <Menu.Item key={item.key}> <Link to={item.key === 'introduce' ? '/' : item.key.toLowerCase()}>{item.name}</Link> </Menu.Item>
                        
                    )
            })
        }
      
      </Menu>
    );
  }
}

 export default Sider;