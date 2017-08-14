import React from 'react';
import ReactDOM from 'react-dom';
import { Icon,Timeline,Row,Col,Card } from 'antd';

import './About.less';



export default class product extends React.Component{
	componentDidMount () {
	  var BMap = window.BMap
	  var map = new BMap.Map("allmap"); // 创建Map实例
	  var point = new BMap.Point(120.13128,30.283235);
	  map.centerAndZoom(point, 14); // 初始化地图,设    置中心点坐标和地图级别
	  var marker = new BMap.Marker(point);
	  map.addOverlay(marker);
	  map.setCurrentCity("杭州"); // 设置地图显示的城市 此项是必须设置的
	}
	render(){
		return (
			<div className="about">
				<div className="container">
					<div className = "setup">	
						<h2 className="v-title"><Icon type="home" /> 企业介绍</h2>
						<div className="desc">
							<p>杭州钛比科技有限公司是一家以浙江大学为依托，聚焦物联网技术和工业自动化数据采集产品开发和解决方案提供的高新信息技术企业。公司位于美丽的西子湖畔，杭州市西湖区浙大国家科技园内。主要创始人为自动化、信息电子以及计算机专业的博士、硕士，公司员工中有本科以上学历的占90%以上，拥有很强的研发创新能力以及应用推广能力。</p>
							<br />
							<p>杭州钛比科技目前主要研发销售的产品有NB-IoT窄带物联网电力抄表系统，NB-IoT窄带物联网终端开发平台，SSI信号（数据）PCI采集卡，SSI信号（数据）Compact PCI（cPCI）采集卡、PCI接口高速数模转换（DAC）卡，无线传感网无线充电节点WISP（无线传感与识别平台）、兼容Arduino平台的Stalker基板、大规模IO接口（高达1024个）的FPGA信号处理平台等，可广泛应用于工业数据信息采集领域以及高校教学试验系统。</p>
							<br />
							<p>杭州钛比科技是ELVA-1的授权代理商，目前主要销售的微波毫米波系统和组件涵盖了从10MHz至220GHz甚至1.1THz（太赫兹）频段范围. </p>
							<br />
							<p>杭州钛比科技经营的产品具有稳定性以及高性能的特性，在客户中拥有良好的信誉。公司秉承着“客户至上”理念，用心做好每一件事情，希望与国内外客户精诚合作，共创美好未来！</p>
						</div>
						<h2 className="v-title"><Icon type="schedule" /> 企业履历</h2>
						<div className ="set-detail clearfix">
							<Timeline pending={<a href="#">See more</a>} style={{marginLeft:'36px'}}>
							    <Timeline.Item>杭州钛比科技有限公司正式成立 2014-01-24</Timeline.Item>
							    <Timeline.Item>我司获杭州市青蓝计划资助及浙江省科技型中小企业认定 2015-06-28</Timeline.Item>
							    <Timeline.Item>我司推出一键抄电表一键缴电费平台 杭州向万物互联时代又近一步 2017-04-13</Timeline.Item>
							    <Timeline.Item>钛比科技助力NB-IoT产业发展——HDG 2017-06-24</Timeline.Item>
							  </Timeline>
						</div>
						<h2 className="v-title"><Icon type="search" /> 联系地址</h2>
							<Row className="location">
								<Col lg={17}>
								<div id='allmap' style={{ width:'80%',height:'350px',margin: '0px auto 40px' }}></div>
								</Col>
							 	<Col lg={7}>
								 <Card style={{ width: '80%',margin:'15px auto 0'}} bodyStyle={{ padding: 0 }}>
									    <div className="custom-image">
									      <img alt="example" width="100%" src="http://ou1e80oz4.bkt.clouddn.com/QR.jpg" />
									    </div>
									    <div className="custom-card">
									      <p>扫一扫，关注微信公众号</p>
									    </div>
									  </Card>
									  <p>浙江省杭州市西湖区文三路478号华星时代广场A座802</p>
								</Col>	
						 	</Row>
					</div>			   		
				</div>
			</div>				 
			)
			}
}