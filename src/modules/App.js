import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home/Home';
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
    <div className="demo">
      <div className="demo-nav">
        <Header />
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer />
    </div>
    );
  }
})