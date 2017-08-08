import React from 'react';
import { Card, Col, Row } from 'antd';
import './solve.less';

export default class product extends React.Component{
	state = {
	 	opa:'0.85',
	 	visibility:false
	}
	MouseOver = (e) => {
	    e.target.style.opacity = '1';
	} 
	MouseLeave = (e) =>{
		e.target.style.opacity = '0.85';
	}
	getLiChildren = (data, i) => {
    return(
    	<Col lg={7} className="cardBox">
    		<Card title = {data.title} bordered={false}>
    			<div className="custom-image">
    				<img alt="carMonitoring" width="100%" src={data.imgLink} style= {{ opacity: this.state.opa }} onMouseOver={this.MouseOver} onMouseLeave={this.MouseLeave}/>
    				<div className="solveSlogan" >{data.slogan} </div>
    			</div>
    		</Card>
    	</Col>
    	)
  }



render(){
	const solveData = [
      { title: '移动充电与感知应用', imgLink: 'https://t.alipayobjects.com/images/rmsweb/T12LliXnReXXXXXXXX.jpg', offset:3, slogan:'通过互联网改变生活' },
      { title: '隔墙运动物体检测解决方案', imgLink: 'https://t.alipayobjects.com/images/rmsweb/T1w24iXgpXXXXXXXXX.jpg', offset:'', slogan:'通过互联网改变生活' },
      { title: '新能源汽车智能监控系统解决', imgLink: 'https://t.alipayobjects.com/images/rmsweb/T19u8iXdVhXXXXXXXX.jpg', offset:'', slogan:'通过互联网改变生活'},
    ];
    const solveChildren = solveData.map(this.getLiChildren);
    return (
    	<div style={{ padding: '30px' }} className="solveBox">
			<h2>行业解决方案</h2>
		    <Row gutter={48} className = "solve">
		    	{solveChildren}
		    </Row>
		  </div>
    	)
}
}