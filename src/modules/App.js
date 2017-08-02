import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import enquire from 'enquire.js';
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer';
import Nav from './Nav';


export default class App extends React.Component {
  render() {
    return (
    <div className="demo">
      <div className="demo-nav">
        <Nav id="nav_0_0" key="nav_0_0" />,
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer id="footer_1_0" key="footer_1_0" />
    </div>
    );
  }
}