import React from 'react';
import { Row, Col } from 'antd';


export default class Content extends React.Component {
	render() {
		return (
			<div className='whyUse'>
				<h2>为什么要选择我们？</h2>
				<Row gutter={16}>
					<Col span={8}>
						<div className="home-reasons-reason-img"><img src="https://zos.alipayobjects.com/rmsportal/ApLJgITwRrlHwIu.png"  alt="technology" /></div>
						<div className="home-reasons-reson-title">技术</div>
						<div className="home-reasons-reason-description">金融级安全、可靠、一致；快速交付、零停机维护；高并发、移动化、海量数据处理能力</div>
					</Col>
					<Col span={8}>
						<div className="home-reasons-reason-img"><img src="https://zos.alipayobjects.com/rmsportal/MPukHoQscXbpDFy.png" alt="fuse"/></div>
						<div className="home-reasons-reson-title">融合</div>
						<div className="home-reasons-reason-description">金融级安全、可靠、一致；快速交付、零停机维护；高并发、移动化、海量数据处理能力</div>
					</Col>
					<Col span={8}>
						<div className="home-reasons-reason-img"><img src="https://zos.alipayobjects.com/rmsportal/aDtfnOQTpcwsVrO.png" alt="open" /></div>
						<div className="home-reasons-reson-title">开放</div>
						<div className="home-reasons-reason-description">金融级安全、可靠、一致；快速交付、零停机维护；高并发、移动化、海量数据处理能力</div>
					</Col>
				</Row>
			</div>
			)
	}
}