import React from 'react';


export default class Solve03 extends React.Component{
	render(){
		return (
			// <p></p>
			<div className="about">
					<div className = "setup">	
						<h2 className="v-title"> 1.项目背景</h2>
						<div className="desc" style={{marginBottom: '40px'}}>
							<p>随着大数据和人工智能技术的不断成熟，其在交通领域的应用也不断深入。本项目旨在通过数据收集、处理、分析构建一个智能汽车数据智能采集与可视化的监控平台。</p>
							<br />
						<h2 className="v-title"> 2.项目架构</h2>
						<p>项目总体架构参见图 1 ，自下而上分为物理层、基础层、数据层、支持层、数据共享平台以及业务层六大部分。在物理层中，汽车上通过GPS系统以及其他传感器实时监测车辆位置、速度等一系列信息，通过网络上传至主机。在基础层中，是我们的系统开发环境，基于Window Server 2012 和MySQL数据库。向上为数据层，集成了用户个人信息、车辆基本信息和车辆位置等实时信息。支持层中的Web服务器和消息中间件等负责处理来自数据供给端的原始数据以及来自数据使用端的处理请求。地图是车辆位置可视化的基础组件。在数据共享平台之上的业务层，可以直接与用户对接，用户可以实现车辆的位置监测、故障报修和对历史数据进行分析等一些列操作。</p>
						<p className="ImgBox" style={{width:'50%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/11.png'} width="100%" alt="img" /> </p>
						<br />
						<h2 className="v-title"> 2.系统功能演示</h2>
						<p>1）登录界面：登录界面如图所示，在这里用户可注册和登录。</p>
						<p className="ImgBox" style={{width:'50%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/12.png'} width="100%" alt="img" /> </p>
						<p>2）主控界面：系统主控界面如下图所示。在这里，可以看到历史上车辆故障报修信息的数据统计。也有各个分支业务的入口。</p>
						<p className="ImgBox" style={{width:'50%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/13.png'} width="100%" alt="img" /> </p>
						<p>监测界面：系统监测界面下图所示，在监测界面中，我们可以看到用户拥有的车辆以及每个车辆的位置。如果点击车辆，还可以看到车辆的详细信息。</p>
						<p className="ImgBox" style={{width:'50%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/14.png'} width="100%" alt="img" /> </p>
						<p>图 :车辆详细信息</p>
						<p className="ImgBox" style={{width:'50%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve15.png'} width="100%" alt="img" /> </p>
					</div>
				</div>			   		
			</div>				 
			)
			}
}