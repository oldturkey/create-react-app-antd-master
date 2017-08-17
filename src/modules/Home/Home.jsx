import React from 'react';
import enquire from 'enquire.js';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
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
      <video  autoPlay="autoplay" loop="loop" muted className="videoOne">
        <source src={require('./4.mp4')} type="video/mp4" />
      </video>
        <div className = "container">  
          <Content0 />
  			  <Content1 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>
        	<Content2 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>
       		<Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>
          <Content4 />
        </div>
			 </div>
			)
	}
}