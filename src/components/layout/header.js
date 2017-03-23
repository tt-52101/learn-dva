import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'dva/router';

function Header({ location, handleLogout }) {
  function logout() {
    console.log('logout');
    handleLogout();
  }
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="users">
        <Link to="users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to=""><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="login"><Icon type="user" />Login</Link>
      </Menu.Item>
      <Menu.Item key="404">
        <Link to="page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
      <Menu.Item key="antd">
        <a href="https://github.com/dvajs/dva">dva</a>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button onClick={logout}>退出</Button>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
