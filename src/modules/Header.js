import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import './App.css';

const { Header } = Layout;


class Head extends Component {
  render() {
    return (
      <Layout className="layout">
    <Header >
      <div className="logo" />
      <Menu
        theme=""
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/product">产品</Link></Menu.Item>
        <Menu.Item key="3">解决方案</Menu.Item>
        <Menu.Item key="4">帮助和文档</Menu.Item>
      </Menu>
    </Header>
  </Layout>
    );
  }
}

export default Head;
