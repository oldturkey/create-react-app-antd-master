import React from 'react';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
		console.log(key);
	}
export default class Content extends React.Component {
	render() {
		return (
			<div className='hotpot'>
				<h2>热点动态</h2>
				<Tabs onChange={callback} type="card">
				    <TabPane tab="公 司 动 态" key="1">
				    	<div className="potBox"><p><a href="/">02.05| 钛比科技助力NB-IoT产业发展——HDG</a></p> 
				    		<p><a href="/">02.05| 钛比科技助力NB-IoT产业发展——HDG</a></p>
				    	</div>
				    </TabPane>
				    <TabPane tab="产 品 更 新" key="2">
				    	<div className="potBox"><p><a href="/">02.05| 一键抄电表一键缴电费 杭州向万物互联时代又近一步</a></p> </div>
				    </TabPane>
				    <TabPane tab="行 业 焦 点" key="3">
				    	<div className="potBox"><p><a href="/">02.05| 谷歌眼镜应用于工业自动化领域</a></p> </div>
				    </TabPane>
				  </Tabs>
			</div>
			)
	}
}