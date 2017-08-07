import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import enquire from 'enquire.js';
import Footer from './Footer';
import Home from './Home/Home';
import Product from './Product/product';
import Solve from './solve/solve';
import Hotpot from './Hotpot/Hotpot'; 
import Nav from './Nav';


export default class App extends React.Component {
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
    <div className="demo">
      <div className="demo-nav">
        <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>,
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/solve' component={Solve} />
        <Route path='/hotpot' component={Hotpot} />
      </Switch>
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>
    </div>
    );
  }
}