import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    console.log(this.props)
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        
      </Menu>
    );
  }
}

 export default Menus;