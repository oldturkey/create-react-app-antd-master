import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {
  static propTypes = {
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <Link to={links[ii]} >
            {isImg ? <img src={cItem} width="100%" alt="logo" /> : cItem}
          </Link>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: "http://owin7pfcv.bkt.clouddn.com/footerLogo.png" ,content:'诚信为本 科技至上'};
    const dataSource = [
      { title: '产品', content: '物联网\n数据采集\n毫米波', contentLink: '/product\n/product\n/product' },
      { title: '解决方案', content: '移动充电与感知应用\n隔墙运动物体检测\n新能源汽车智能监控', contentLink: '/solve01\n/solve02\n/solve03' },
      { title: '联系我们 ', content: '联系电话： 0571-87755736\n手机： 17767145073\nEMAIL： sales@terabits.cn', contentLink: '/\n/\n/' },

      { title: '关注', content: 'http://ou1e80oz4.bkt.clouddn.com/QR.jpg', contentLink: '/solve01\n/solve02\n/solve03' },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <p className="logo">
            <img src={logoContent.img} width="100%" alt="logo"/>
          </p>
          <p>{logoContent.content}</p>
        </li>
        {liChildrenToRender} 
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2017 by <a href="/">Terabits</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
