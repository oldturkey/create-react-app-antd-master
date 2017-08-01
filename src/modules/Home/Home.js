import React from 'react';
import { Carousel } from 'antd';
import { scrollScreen } from 'rc-scroll-anim';
import enquire from 'enquire.js';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import './less/antMotion_style.less';
import './less/Home.css';

export default class Home extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }
	render() {
		return (
			<div className = 'templates-wrapper'>
			<Carousel autoplay>
			    <div><img  src={require('./banner1.jpg')} /></div>
			    <div><img  src={require('./banner2.jpg')} /></div>
			    <div><img  src={require('./banner3.jpg')} /></div>
			  </Carousel>
        <Content0 />
			  <Content1 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>
      	<Content2 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>
     		<Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>
			 </div>
			)
	}
}