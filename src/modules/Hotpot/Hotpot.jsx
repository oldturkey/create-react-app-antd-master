import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


export default class Content extends React.Component {
	state = {
	    visible: false ,
	    data: '',
	    introduce:''
	}
	showModal = (title,int) => {
      this.setState({
        data:title,
        visible: true,
        introduce: int
      });   
    }
    hideModal = () => {
      this.setState({
        visible: false,
      });
    }
	callback = (key) =>{
		console.log(key);
	}

	getLiChildren = (data, i) => {
	const link = data.links.split(/\n/).filter(item => item);
    const Boxs = data.title.split(/\n/).filter(item => item)
      .map((item,ii) => {
      	return (
				 <p key={ii}><a href={link[ii]} target="view_window"> {item}</a></p> 
      		)
      });

      return (
      	<TabPane tab={data.name} key={i}>
      	<div className="potBox">
      	{Boxs}
      	</div> 
      	</TabPane> 
      	);
    }
	render() {
		const hotPotData = [
			{ name: '公司动态', title: '2017-11-08 | 钛比科技进军2017中国移动物联网创客大赛总决赛\n2017-10-28 | 钛比科技应邀参加中国NB-IoT产业联盟之高等院校物联网工程专业师资培训会议\n2017-09-30 | 钛比科技 MWC American2017 参展归来！祝各位伙伴国庆中秋节日快乐！\n2017-09-08 |钛比科技入选华为全球NB-IoT生态系统合作伙伴\n2017-08-02 | 钛比科技喜获2017年第六届中国创新创业大赛浙江赛区优胜企业称号',links: 'http://mp.weixin.qq.com/s/UaJXErGtcO9E05Zyei3EYQ\nhttp://mp.weixin.qq.com/s/m_GBCon2eI0hx0fGDfxINA\nhttp://mp.weixin.qq.com/s/WnTPkbj_XqthEE-vvYKlkg\nhttp://mp.weixin.qq.com/s/FmQYGKOJwJaq1iyVukUwZg\nhttp://mp.weixin.qq.com/s/g0K3jJgsQ3YbRUERKrE87g' },
			{ name: '产品更新', title: ' 2017-08-18 |【物联网产品】钛比科技发布NB-IoT DTU产品\n2017-10-12 | 钛比科技联合浙江大学、科学出版社发布《移动物联网（NB-IoT）实战指南》及配套工具包\n2017-07-25 | 钛比科技 TB-WISP5.0无源无线识别与传感标签\n2017-07-20 | 钛比科技 TB-Powercast基于射频能量获取的无线传感器节点\n2017-07-14 | 钛比科技 SSI信号模拟器 TB-SSI-GEN-001\n',links: 'https://mp.weixin.qq.com/s/hyZXy9VrpwfjwIl7K4JZvg\nhttp://mp.weixin.qq.com/s/yn_vGCUf6DwToDtZnouqIw\nhttp://mp.weixin.qq.com/s/jSJNrvqzuTvqRBz6kBPjKA\nhttp://mp.weixin.qq.com/s/H2lBxeF8HRjfjiOElSU3KQ\nhttp://mp.weixin.qq.com/s/qHuDhBw7wkBQbGTwik3xJA\n' },
		];
		const hotPotChildren = hotPotData.map(this.getLiChildren);
		return (
			<div className='hotpot' style={{paddingTop: '20px',height:'820px'}}>
				<h2>热点动态</h2>
				<Tabs onChange={this.callback} defaultActiveKey="0" >
				    {hotPotChildren}
				 </Tabs>
			</div>
			)
	}
}