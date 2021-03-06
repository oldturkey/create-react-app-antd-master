import React from 'react';
import { BrowserRouter  as Router, Route} from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { BackTop } from 'antd';
import enquire from 'enquire.js';
import Footer from './Footer';
import Home from './Home/Home';
import Product from './Product/product';
import Solve from './solve/solve';
import Hotpot from './Hotpot/Hotpot'; 
import About from './About/About';
import Nav from './Nav';
import Solve01 from './Solve01';
import Solve02 from './Solve02';
import Solve03 from './Solve03';
import './App.less';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
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
      <Router>
        <ScrollContext>
        <div className="demo">
          <div className="demo-nav">
            <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>
          </div>
          <div className="demo-content">
            <Route exact path='/' component={Home} />
            <Route path='/product' component={Product} />
            <Route path='/solve' component={Solve} />
            <Route path='/solve01' component={Solve01} />
            <Route path='/solve02' component={Solve02} />
            <Route path='/solve03' component={Solve03} />
            <Route path='/hotpot' component={Hotpot} />
            <Route path='/about' component={About} />
          </div>
          <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>
          <BackTop style={{right: '22px'}}/>
        </div>
        </ ScrollContext>
    </Router>
    );
  }
}