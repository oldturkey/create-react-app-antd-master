import React from 'react';
import './product.less'
import { Menu, Icon ,Card , Row, Col,Modal, Button  } from 'antd';


export default class product extends React.Component{
	state = { 
		visible: false ,
		data: '',
		introduce:''
	}
	  showModal = (title,int) => {
	    this.setState({
	      data:title,
	      visible: true,
	      introduce: int
	    });   
	  }
	  hideModal = () => {
	    this.setState({
	      visible: false,
	    });
	  }
	getProChildren = (data) => {
			const cTitle = data.title.split(/\n/).filter(item => item);
			const cIntroduce = data.introduce.split(/\n/).filter(item => item);
	 		const content = data.proImage.split(/\n/).filter(item => item)
	 		.map((item,ii) => {
	 			const cItem = item.trim();
	 			return (
	 				<Col lg={8} xs={8} key={ii} className="proBox">
			 			<Card style = {{width:'80%'}} bodyStyle ={{padding:10}} className="contentCard" onClick={ () => this.showModal(cTitle[ii],cIntroduce[ii])}>
			 				<div className = "custom-image">
			 					<img alt ="example" width="100%" src = {cItem}/>
			 				</div>
			 			</Card>
			 		</Col>
	 				)
	 		});
	 		return content;
		} 
	render(){
		const proData = {
			IOT:{
				proImage:'http://oltjsnp86.bkt.clouddn.com/%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87.png\nhttp://oltjsnp86.bkt.clouddn.com/%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87.png\nhttp://oltjsnp86.bkt.clouddn.com/%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87.png\nhttp://oltjsnp86.bkt.clouddn.com/%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87.png\nhttp://oltjsnp86.bkt.clouddn.com/%E7%B2%98%E8%B4%B4%E5%9B%BE%E7%89%87.png',
				title:'物联网产品\n物联网产品\n物联网产品\n物联网产品\nPCISSI数据采集\n物联网产品',
				introduce:'杭州钛比科技专注于SSI数据采集解决方案，专业研发定制基于串口、PCI、cPCI、USB和以太网接口的SSI编码器数据采集板卡。适配所有支持标准SSI协议的编码器，性能稳定、应用广泛，同时可以定制实现客户的特殊需求。杭州钛比科技专注于SSI数据采集解决方案多年，技术实力超群，在客户中拥有极佳的口碑。\n测试123\n测试456'
			},	
			ISS:{
				proImage:'http://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png',
				title:'以太网SSI数据采集\nPCISSI数据采集\nSSI的信号模拟器\n以太网SSI数据采集\nPCISSI数据采集\nSSI的信号模拟器',
				introduce:'杭州钛比科技专注于SSI数据采集解决方案，专业研发定制基于串口、PCI、cPCI、USB和以太网接口的SSI编码器数据采集板卡。适配所有支持标准SSI协议的编码器，性能稳定、应用广泛，同时可以定制实现客户的特殊需求。杭州钛比科技专注于SSI数据采集解决方案多年，技术实力超群，在客户中拥有极佳的口碑。\n测试123\n测试456'
			},
		};
		const MillimeterData = {
			name:'毫米波振荡器\n毫米波通信解决方案\n微波毫米波噪声信号源\n微波毫米波接收机和控制组件\n微波毫米波无源和波导器件\n微波毫米波接收机和控制组件\n微波毫米波无源和波导器件\n微波毫米波接收机和控制组件\n微波毫米波无源和波导器件'
		};
		const cTitle = MillimeterData.name.split(/\n/).filter(item => item);
		const MilChildren = cTitle.map((data,i) => (<Col lg={8}  key={i} className="proBox"><Button style={{width:'80%',height:'45px'}}>{cTitle[i]}</Button></Col>));
		const iotChildren = this.getProChildren(proData.IOT);
		const issChildren = this.getProChildren(proData.ISS);
		return (
		  <div className="product">
		    <h1><a name="1" id="1" > </a>物联网产品</h1>
		    	<Row className="productWapper">
		    		{iotChildren}
		    	</Row>
		    <h1><a name="2" id="2" > </a>数据采集产品</h1>
		    	<Row className="productWapper">
		    		{ issChildren }
		    	</Row>
		  	<div className = "Millimeter">
		  		<h1><a name="3" id="3" > </a>毫米波产品</h1>
		  		<Row className="productWapper">
		  			{MilChildren}
		  			<Col lg={8} xs={8} offset={8} key='download'><Button type="primary" style={{ width:'80%',height:'35px',marginTop:'20px'}}>下载文档</Button></Col>
		  		</Row>
		  	</div>		     
		    	<Modal
			          title={ this.state.data }
			          visible={this.state.visible}		   
			          onCancel={this.hideModal}
			          footer={null}
			        >
			          <p style={{textIndent:'14px'}}>{ this.state.introduce }</p>
			          <img alt ="example" width="100%" src = 'http://www.terabits.cn/uploads/allimg/170622/2-1F622193303136.png'/>
			        </Modal>
		  </div>
    );
	}
}