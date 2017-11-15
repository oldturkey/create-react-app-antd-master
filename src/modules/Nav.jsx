import React from 'react';
import { BrowserRouter  as Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import './Home/less/antMotion_style.less';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollScreen.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollScreen.bind(this));
  }
  scrollScreen = () => {
    this.setState({
      phoneOpen: false,
    });
  }
  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }
  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData =[
      { title: '首页', link: '/' },
      { title: '产品', link: '/product' },
      { title: '解决方案', link: '/solve' },
      { title: '热点动态', link: '/hotpot' },
      { title: '关于我们', link: '/about' },
    ];
    const navChildren = navData.map((data,i) => (<Item key={i}><Link to={data.link} onClick={() => {
            this.phoneClick();
          }}>{data.title}</Link></Item>));
    
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      style={{ position: 'fixed', width: '100%'}}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="130%" src="http://owin7pfcv.bkt.clouddn.com/footerLogo.png" alt="logo"/>
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['0']}
            mode="inline"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['0']}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
