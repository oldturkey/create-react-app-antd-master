import React, { Component } from 'react';
import { Layout} from 'antd';
import {Link} from 'react-router-dom';
import './App.css';

const { Footer } = Layout;


class Head extends Component {
  render() {
    return (
      <Layout className="layout">
	    <Footer style={{ textAlign: 'center' }}>
	      Copy right ©2017 Created by TaiBi 
	    </Footer>
	  </Layout>
    );
  }
}

export default Head;
