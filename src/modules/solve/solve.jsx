import React from 'react';
import { Card, Col, Row } from 'antd';
import './solve.less';

export default class product extends React.Component{
	state = {
	 	opa:'0.85',
	 	visibility:false
	}
	MouseOver = (e) => {
	    this.setState({
	    	opa:'1.0'
	    })
	} 
	MouseLeave = (e) =>{
		this.setState({
	    	opa:'0.85'
	    })
	}
	render(){
		return (
		<div style={{ padding: '30px' }} className="solveBox">
			<h2>行业解决方案</h2>
		    <Row gutter={24} className = "solve">
		      <Col lg={6} offset={3}>
		        <Card title="移动充电与感知应用" bordered={false}>
		        	<div className="custom-image">
      					<img alt="charging" width="100%" style={{opacity: this.state.opa}} onMouseOver={this.MouseOver} onMouseLeave={this.MouseLeave} src="https://t.alipayobjects.com/images/rmsweb/T12LliXnReXXXXXXXX.jpg" />
    				</div>
		        </Card>
		      </Col>
		      <Col lg={6}>
		        <Card title="隔墙运动物体检测解决方案" bordered={false}>
		        	<div className="custom-image">
      					<img alt="moving" width="100%" src="https://t.alipayobjects.com/images/rmsweb/T1w24iXgpXXXXXXXXX.jpg" />
    				</div>
		        </Card>
		      </Col>
		      <Col lg={6}>
		        <Card title="新能源汽车智能监控系统解决" bordered={false}>
		        	<div className="custom-image">
      					<img alt="carMonitoring" width="100%" src="https://t.alipayobjects.com/images/rmsweb/T19u8iXdVhXXXXXXXX.jpg" />
    				</div>
		        </Card>
		      </Col>
		    </Row>
		  </div>
		  )
	}
}