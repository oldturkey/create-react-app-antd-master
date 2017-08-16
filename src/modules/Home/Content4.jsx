import React from 'react';
import Hotpot from '../Hotpot/Hotpot';
import { Row, Col,Modal } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;



export default class Content extends React.Component {
	render(){
		return (
			<div className="content4">
				<Hotpot />
			</div>
			)
	}
	
}