import React from 'react';
import { Card, Col, Row ,Modal} from 'antd';
import './solve.less';

export default class product extends React.Component{
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
	getLiChildren = (data, i) => {
    return(
    	<Col key={i} lg={7} className="cardBox">
    		<Card title = {data.title} bordered={false} onClick={ () => this.showModal(data.title,data.introduce)}>
    			<div className="custom-image">
    				<img alt="carMonitoring" width="100%" className="solveImg" src={data.imgLink}  />
    				<div className="solveSlogan" >{data.slogan} </div>
    			</div>
    		</Card>
    	</Col>
    	)
  }
 


render(){
	const solveData = [
      { title: '移动充电与感知应用', imgLink: 'https://t.alipayobjects.com/images/rmsweb/T12LliXnReXXXXXXXX.jpg', offset:3, slogan:'解决无线传感器网络节点难以更换电池' ,introduce:'移动充电与感知应用' },
      { title: '隔墙运动物体检测解决方案', imgLink: 'https://t.alipayobjects.com/images/rmsweb/T1w24iXgpXXXXXXXXX.jpg', offset:'', slogan:'消除静止物体产生的强背景干扰方案' ,introduce:'隔墙运动物体检测解决方案' },
      { title: '新能源汽车智能监控系统解决', imgLink: 'https://t.alipayobjects.com/images/rmsweb/T19u8iXdVhXXXXXXXX.jpg', offset:'', slogan:'智能汽车数据智能采集与可视化平台' ,introduce:'新能源汽车智能监控系统解决'},
    ];
    const solveChildren = solveData.map(this.getLiChildren);
    return (
    	<div style={{ padding: '30px' }} className="solveBox">
			<h2>行业解决方案</h2>
		    <Row gutter={48} className = "solve">
		    	{solveChildren}
		    </Row>
        <Modal
          title={ this.state.data }
          visible={this.state.visible}       
          onCancel={this.hideModal}
          footer={null}
          >
          <p style={{textIndent:'14px'}}>{ this.state.introduce }</p>
        </Modal>
		  </div>
    	)
}
}