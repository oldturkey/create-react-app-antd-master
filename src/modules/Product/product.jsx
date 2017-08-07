import React from 'react';
import { Menu, Icon ,Card , Row, Col  } from 'antd';
import './product.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class product extends React.Component{
	getProChildren = (data) => {
	 	// const links = data.contentLink.split(/\n/).filter(item => item);
	 	const cTitle = data.title.split(/\n/).filter(item => item);
	 	const content = data.proImage.split(/\n/).filter(item => item)
	 	.map((item,ii) => {
	 		const cItem = item.trim();
		 		return (
			 		<Col lg={6} xs={12} key={ii} className="proBox">
			 			<Card style = {{width:240}} bodyStyle ={{padding:10}} className="contentCard">
			 				<div className = "custom-image">
			 					<img alt ="example" width="100%" src = {cItem}/>
			 				</div>
			 				<div className = "custom-card">
			 					<h3>{cTitle[ii]}</h3>
			 					<p><a href='{}' >查看文档 </a></p>
			 				</div>
			 			</Card>
			 		</Col>
		 		);
	 		});	
	 	return content;
	 }
	 state = {
	 	current: 'ISS'
	 }
	 handleClick = (e) => {
	    this.setState({
	    	current:e.key
	    })
	  }

	render(){
		const proData = {
			ISS:{proImage:'http://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg',title:'基于以太网的8路SSI数据\nPCI接口的4路SSI数据采集\nSSI信号模拟器\n基于USB的8路SSI数据采集\ncPCI SSI编码器数据采集\n串口SSI编码器数据采集解',contentLink:""},	
			data:{proImage:'http://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg\nhttp://ou1e80oz4.bkt.clouddn.com/QR.jpg',title:'基于以太网的8路SSI数据\nPCI接口的4路SSI数据采集\nSSI信号模拟器\n基于USB的8路SSI数据采集\ncPCI SSI编码器数据采集\n串口SSI编码器数据采集解',contentLink:""}
		};
		const current01 = this.state.current;
		const ISS = proData[current01];

		const proChildren = this.getProChildren(ISS);
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
		            <Menu.Item key="ISS">SSI信号采集与模拟</Menu.Item>
		            <Menu.Item key="data">数据采集卡</Menu.Item>
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
			    <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }} className="sidebarCard">
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
			    <Col lg={19} offset={2} className="contentBox">
			    	<Row>
			    		{proChildren}
			    	</Row>
			    </Col>
			     </Row>
		      </div>
    );
	}
}