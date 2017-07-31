import React from 'react';
import { Carousel } from 'antd';
import './Home.css';

export default React.createClass({
	render() {
		return (
			<Carousel autoplay>
			    <div><img className="img" src={require('./banner1.jpg')}/></div>
			    <div><img className="img" src={require('./banner2.jpg')}/></div>
			    <div><img className="img" src={require('./banner3.jpg')}/></div>
			  </Carousel>
			)
	}
})