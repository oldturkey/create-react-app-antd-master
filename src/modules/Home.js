import React from 'react';
import { Carousel } from 'antd';
import './Home.css';

export default React.createClass({
	render() {
		return (
			<div className = 'content'>
			<Carousel autoplay>
			    <div><h3>1</h3></div>
			    <div><h3>2</h3></div>
			    <div><h3>3</h3></div>
			    <div><h3>4</h3></div>
			  </Carousel>
			 </div>
			)
	}
})