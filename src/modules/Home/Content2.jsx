import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="http://oltjsnp86.bkt.clouddn.com/img3.png" alt=""/>
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              深耕工业自动化数据采集产品
            </h1>
            <p key="p" id={`${props.id}-content`}>
              杭州钛比科技有限公司也是欧洲著名毫米波厂家ELVA-1中国区授权代理(点此查看授权书)，销售的毫米波系统与组件，频段主要覆盖10MHz至220GHz，主要产品包括毫米波雷达、天线、信号源、噪声源、接收机及其部件、功率计
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
