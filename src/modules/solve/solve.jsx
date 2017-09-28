import React from 'react';
import { Card, Col, Row } from 'antd';
import { BrowserRouter  as Route, Link } from 'react-router-dom';
import './solve.less';

export default class product extends React.Component{

	getLiChildren = (data, i) => {
    return(
    	<Col key={i} lg={7} className="cardBox">
    		<Card title = {data.title} bordered={false} >
    			<div className="custom-image">
    				<Link to={data.link}><img alt="carMonitoring" width="100%" className="solveImg" src={data.imgLink}  /></Link>
    				<div className="solveSlogan" >{data.slogan} </div>
    			</div>
    		</Card>
    	</Col>
    	)
  }
 


render(){
	const solveData = [
      { title: '移动充电与感知应用', link: '/solve01',imgLink: 'http://owin7pfcv.bkt.clouddn.com/solve01.jpg', slogan:'无线传感器网络节点更换电池'  },
      { title: '隔墙运动物体检测解决方案', link: '/solve02',imgLink: 'https://t.alipayobjects.com/images/rmsweb/T1w24iXgpXXXXXXXXX.jpg', slogan:'消除静止物体强背景干扰方案'  },
      { title: '新能源汽车智能监控系统解决', link: '/solve03',imgLink: 'http://owin7pfcv.bkt.clouddn.com/solve03.jpg', slogan:'汽车数据智能采集可视化平台' },
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