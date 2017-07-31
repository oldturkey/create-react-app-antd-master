import React, { Component } from 'react';
import { Layout, Menu,Icon } from 'antd';
import {Link} from 'react-router-dom';
import './App.css';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Head extends Component {
  render() {
    return (
      <Layout className="layout">
    <Header >
      <div className="logo" />
      <Menu
        theme=""
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="home"><Link to="/">首 页</Link></Menu.Item>
        <SubMenu title={<span>产 品 <Icon type="down" style={{fontSize: 16,lineHeight: '9px'}}/></span>}>
            <Menu.Item key="1"><Link to="/product/data">数据采集</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/product/Millimeter">毫米波</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/product/IoT">物联网</Link></Menu.Item>
          </SubMenu>
        <Menu.Item key="solve">解决方案</Menu.Item>
        <Menu.Item key="about">关于我们</Menu.Item>
      </Menu>
    </Header>
  </Layout>
    );
  }
}

export default Head;
