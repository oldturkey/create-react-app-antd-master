import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import enquire from 'enquire.js';
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
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
      </Switch>
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>
    </div>
    );
  }
}