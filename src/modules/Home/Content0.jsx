import React from 'react';
import { Row, Col } from 'antd';


export default class Content extends React.Component {
	render() {
		return (
			<div className='whyUse'>
				<h2>为什么要选择我们？</h2>
				<Row gutter={16} style={{margin:0}}>
					<Col span={8}>
						<div className="home-reasons-reason-img"><img src="http://ou1e80oz4.bkt.clouddn.com/%E8%81%9A%E7%84%A6-%E6%94%BE%E5%A4%A7%20%281%29.png"  alt="technology" /></div>
						<div className="home-reasons-reson-title">聚焦</div>
						<div className="home-reasons-reason-description">高素质人才团队，专注于技术研发</div>
					</Col>
					<Col span={8}>
						<div className="home-reasons-reason-img"><img src="http://ou1e80oz4.bkt.clouddn.com/%E5%AE%A2%E6%88%B7.png" alt="fuse"/></div>
						<div className="home-reasons-reson-title">成长</div>
						<div className="home-reasons-reason-description">年轻团队组成，高速发展中</div>
					</Col>
					<Col span={8}>
						<div className="home-reasons-reason-img"><img src="http://ou1e80oz4.bkt.clouddn.com/%E4%B8%93%E4%B8%9A%20%282%29.png" alt="open" /></div>
						<div className="home-reasons-reson-title">专业</div>
						<div className="home-reasons-reason-description">一流院校专业技术人才支撑</div>
					</Col>
				</Row>
			</div>
			)
	}
}