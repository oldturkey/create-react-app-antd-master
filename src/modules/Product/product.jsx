import React from 'react';
import { Menu, Icon ,Card , Row, Col  } from 'antd';
import './Menu.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class product extends React.Component{
	render(){
		return (
		  <div className="sidebar">
		    <Row>
		    <Col lg={3}>
		      <Menu
		        onClick={this.handleClick}
		        style={{ width: '100%' }}
		        defaultSelectedKeys={['1']}
		        defaultOpenKeys={['sub1','sub2']}
		        mode="inline"
		      >
		        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>数据采集产品</span></span>}>
		            <Menu.Item key="1">SSI信号采集与模拟</Menu.Item>
		            <Menu.Item key="2">数据采集卡</Menu.Item>
		            <Menu.Item key="3">高速数据采集</Menu.Item>
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>物联网产品</span></span>}>
		          <Menu.Item key="14">可充电无线传感网</Menu.Item>
		          <Menu.Item key="15">NB-IoT</Menu.Item>
		        </SubMenu>
		        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>毫米波产品</span></span>}>
		          <Menu.Item key="5">毫米波振荡器/倍频器/放大器</Menu.Item>
		          <Menu.Item key="6">毫米波通信解决方案</Menu.Item>
		          <Menu.Item key="7">微波毫米波噪声信号源</Menu.Item>
		          <Menu.Item key="8">微波毫米波接收机和控制组件</Menu.Item>
		          <Menu.Item key="9">微波毫米波无源和波导器件</Menu.Item>
		            <Menu.Item key="10">毫米波天线</Menu.Item>
		            <Menu.Item key="11">微波毫米波测试设备</Menu.Item>
		            <Menu.Item key="12">毫米波雷达解决方案</Menu.Item>
		            <Menu.Item key="13">毫米波科学应用解决方案</Menu.Item>
		        </SubMenu>
		         <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>其他产品</span></span>}>
		         </SubMenu>
		      </Menu>
			    <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
			        <div className="custom-card">
			          <h3>咨询我们</h3>
			          <p>电 话:0571-87755736</p>
			          <p>手 机:17767145073</p>
			          <p>邮 箱:sales@terabits.cn</p>
			          <p>地址:浙江省杭州市西湖区文三路478号华星时代广场A座802</p>
			        </div>
			        <div className="custom-image">
			          <img alt="example" width="100%" src="http://ou1e80oz4.bkt.clouddn.com/QR.jpg" />
			          <p>扫一扫关注微信公众号</p>
			        </div>
			     </Card>
			    </Col>
			    <Col lg={19} offset={2}>
			    	<Row>
			    		<Col lg={6} >
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    		<Col lg={6}>
			    			<Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
							    <div className="custom-image">
							      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
							    </div>
							    <div className="custom-card">
							      <h3>Europe Street beat</h3>
							      <p>www.instagram.com</p>
							    </div>
							  </Card>
			    		</Col>
			    	</Row>
			    </Col>
			     </Row>
		      </div>
    );
	}
}