import React from 'react';
import { Row, Col,Modal } from 'antd';
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
				 <p key={ii}><a href={link[ii]} target="_blank"> {item}</a></p> 
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
			{ name: '公 司 动 态', title: '2017-08-02 | 钛比科技喜获2017年第六届中国创新创业大赛浙江赛区优胜企业称号\n2017-06-28 | 钛比科技获选GSMA Mobile IoT Innovators Member！\n 2017-05-27 | 钛比科技助力NB-IoT产业发展——HDG丨华为OceanConnect IoT生态沙龙中国行杭州站小记\n2017-05-11 |【物联网产品】钛比科技NB-IoT开发板新版本发布\n2017-04-18 |【物联网产品】钛比科技NB-IoT开发板正式发布',links: 'http://mp.weixin.qq.com/s/g0K3jJgsQ3YbRUERKrE87g\nhttp://mp.weixin.qq.com/s/spJqIHeHdAXqUzA07suU6Q\nhttp://mp.weixin.qq.com/s/wCUvZbpZcTbZPoTz6jBOOQ\nhttp://mp.weixin.qq.com/s/cuRG8N9WgGCFLKhH-5oi2w\nhttp://mp.weixin.qq.com/s/fpacP1EVzQ2YYkc1Fc1M0Q' },
			{ name: '产 品 更 新', title: ' 2017-07-25 | 钛比科技 TB-WISP5.0无源无线识别与传感标签\n2017-07-20 | 钛比科技 TB-Powercast基于射频能量获取的无线传感器节点\n2017-07-14 | 钛比科技 SSI信号模拟器 TB-SSI-GEN-001\n2017-05-11 |【物联网产品】钛比科技NB-IoT开发板新版本发布\n2017-04-18 |【物联网产品】钛比科技NB-IoT开发板正式发布',links: 'http://mp.weixin.qq.com/s/jSJNrvqzuTvqRBz6kBPjKA\nhttp://mp.weixin.qq.com/s/H2lBxeF8HRjfjiOElSU3KQ\n555\nhttp://mp.weixin.qq.com/s/cuRG8N9WgGCFLKhH-5oi2w\nhttp://mp.weixin.qq.com/s/fpacP1EVzQ2YYkc1Fc1M0Q' },
			{ name: '行 业 焦 点', title: '2017-05-18 | 2017年微波毫米波科技成果及产品展（MWIE2017）\n2017-05-27 | 钛比科技助力NB-IoT产业发展——HDG丨华为OceanConnect IoT生态沙龙中国行杭州站小记\n2017-04-14 |【浙江新闻】一键抄电表一键缴电费 杭州向万物互联时代又近一步',links: 'http://mp.weixin.qq.com/s/-_8dQDJ7FhqyFHugPEHplw\nhttp://mp.weixin.qq.com/s/wCUvZbpZcTbZPoTz6jBOOQ\nhttp://mp.weixin.qq.com/s/I-KhdIZQlBaco5kMfVoivA' },
		];
		const hotPotChildren = hotPotData.map(this.getLiChildren);
		return (
			<div className='hotpot'>
				<h2>热点动态</h2>
				<Tabs onChange={this.callback} defaultActiveKey="0" >
				    {hotPotChildren}
				 </Tabs>
			</div>
			)
	}
}