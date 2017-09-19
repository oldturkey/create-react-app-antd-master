import React from 'react';
import './product.less'
import { Card , Row, Col,Modal, Button  } from 'antd';


export default class product extends React.Component{
	state = { 
		visible: false ,
		data: '',
		introduce: ''
	}
	  showModal = (title,int) => {
	  const mod = int.split(/m/).filter(item => item)
	    	.map((item,ii) => {
	    		return (
	    			<p key={ii} style={{ textIndent : '12px'}}>{item}</p>
	    			)
	    	});
	    this.setState({
	      data:title,
	      visible: true,
	      introduce: mod
	    });   
	  }
	  hideModal = () => {
	    this.setState({
	      visible: false,
	    });
	  }
	getProChildren = (data) => {
			const cTitle = data.title.split(/\n/).filter(item => item);
			const cIntroduce = data.introduce.split(/\n/).filter(item => item);
	 		const content = data.proImage.split(/\n/).filter(item => item)
	 		.map((item,ii) => {
	 			const cItem = item.trim();
	 			return (
	 				<Col lg={8} xs={8} key={ii} className="proBox">
			 			<Card style = {{width:'80%'}} bodyStyle ={{padding:0}} className="contentCard" onClick={ () => this.showModal(cTitle[ii],cIntroduce[ii])}>
			 				<div className = "custom-image">
			 					<img alt ="example" width="100%" src = {cItem}/>
			 				</div>
			 			</Card>
			 		</Col>
	 				)
	 		});
	 		return content;
		} 
	render(){
		const proData = {
			IOT:{
				proImage:'http://owin7pfcv.bkt.clouddn.com/NB-IoT%E5%BC%80%E5%8F%91%E6%9D%BF.png\nhttp://owin7pfcv.bkt.clouddn.com/TB-Powercast-%E5%9F%BA%E4%BA%8E%E5%B0%84%E9%A2%91%E8%83%BD.png\nhttp://owin7pfcv.bkt.clouddn.com/TB-WISP%E6%97%A0%E7%BA%BF%E8%AF%86%E5%88%AB%E4%B8%8E%E4%BC%A0%E6%84%9F%E5%B9%B3%E5%8F%B0.png',
				title:'NB-IoT开发板\nTB-Powercast-基于射频能\nTB-WISP无线识别与传感平台',
				introduce:'钛比科技于4月1日正式向外界发布NB-IoT窄带物联网开发板产品。本款开发板选用了STM32103ZET6 MCU和移远NB-IoT BC95模组，通过配套的 JTAG调试工具可进行下载、仿真调试，通过AT指令与云平台交互。适合广大客户用于NB-IoT窄带物联网应用的学习、评估及开发。m工具包包括：NB-IoT测试板一块；电源适配器一个；串口线/下载线一条；1602液晶显示屏一块；天线一根；m特点：工作电压：STM32工作于3.3V，BC95工作于3.8V； 工作频率：B5，B8，B20；发射功率：23dBM;接收灵敏度：-135dBM；符合3GPP物理层协议；高于GSM通信通信链路20db；睡眠时间可调，降低产品功耗；通信模块指令使用串行通信，易于使用；开发板接口资源丰富；m软件：AT命令及相关测试用例；用于调试开发板芯片的软件；m硬件接口：1路RS485接口；2路RS232接口；1路普通串口通信接口；1路USB转串口通信接口；1路ADC测试接口； 8路ADC输入；8路拨码开关； 3路LED显示； 1个串口选择接口；  1个下载选择接口；  1个温湿度传感器； 1个I2C接口； 1个SPI接口；24个IO接口；1个BC95_JTAG仿真下载接口1个LCD1602液晶显示；1个SMA天线接口； 2个复位键；三种电源接口：分别是3.3V，3.8V，5V;\n TB-Powercast是一种新型基于射频能量收集的可充电无线传感器节点，它除了具有普通传感器节点的感知环境参数、进行数据处理和组网通信的能力外，最重要的特征是可以自主收集空间环境中的射频能量并转化为节点的直流电源，节点无需供电。m系统结构与功能:m能量收集天线：接收射频源发射的电磁波将其转换为高压脉冲m能量转换模块：将天线所产生的高频高压脉冲转换为直流电压并存储在电容中。m传感模块：通过超低功耗传感器感知并收集环境信息，是整个系统的信息源。m处理与通信模块：对传感器数据进行处理并通过ZigBee协议进行无线传输。m特性参数:m射频信号频段：915MHz;射频检测范围：-12dBM-20dBM;天线：水平122°垂直68°增益6.1dBi;输出电压：2.5V-5.5V;最大充电距离：10米;最大通信距离：100米;处理器芯片：CC2530(支持Z Stack);ADC精度：12位;节点工作电流：21MA-33MA;传感器接口：4路小信号模拟量\n无线识别与传感平台(Wireless Identification and Sensing PlatforM , WISP) 是一种可编程的通信和计算硬件平台，可以使用商用UHF RFID阅读器给平台供电，同时完成阅读器与平台之间的通信。平台硬件主要包括天线单元、阻抗匹配单元、能量收集单元，稳压电路，MCU，ASK解调模块/FSK调制模块，以及外部传感器接口。m能量收集模块是WISP中重要的模块，由二极管和电容组成的升压泵电路把天线接收到的微弱的交流信号放大、整流成直流信号，给PCB板上的大电容充电。WISP的其他模块的工作电压来自稳压电路，稳压电路的能量输入来自大电容。MCU使用TI公司的MSP430F2132单片机，主要负责计算和通信。WISP板载集成的传感器包括温度、光照、加速度传感器，根据应用场景的需要，可自行增加低功耗的传感器。m编程环境使用IAR Embedded Workbench，烧写器可使用TI公司的LSD-FET430UIF仿真器或USB下载器，固件编程语言为C语言和汇编语言，WISP社区有丰富的例程可供下载。mTB-WISP是钛比科技开发的无线识别与传感平台，兼容进口WISP接口电路，主要技术指标包括：MMCU: MSP430F2132(16Mhz, 8KB Flash, 512B RAM)mEEPROM: 24AA08(8Kbit, 2.2v operation, I2C serial EEPROM)m通信协议：EPCglobal C1G2m通信速率：40-640kbpsm支持低功耗温度传感器，如 LM94021(Low 1.5v operation, 9uA supply current)m支持低功耗加速度计，如 ADXL330(3-axis, 1.8v operation, current 180uA@1.8v) '
			},	
			ISS:{
				proImage:'http://owin7pfcv.bkt.clouddn.com/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%8E%A5%E5%8F%A34%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E6%9D%BF.png\nhttp://owin7pfcv.bkt.clouddn.com/PCI%E6%8E%A5%E5%8F%A3%E7%9A%844%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86.png\nhttp://owin7pfcv.bkt.clouddn.com/SSI%E4%BF%A1%E5%8F%B7%E6%A8%A1%E6%8B%9F%E5%99%A8.png\nhttp://owin7pfcv.bkt.clouddn.com/cPCI%E6%8E%A5%E5%8F%A34%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E6%9D%BF.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png\nhttp://ou1e80oz4.bkt.clouddn.com/image1.png',
				title:'以太网SSI数据采集\nPCISSI数据采集\nSSI的信号模拟器\n以太网SSI数据采集\nPCISSI数据采集\nSSI的信号模拟器',
				introduce:'杭州钛比科技专注于SSI数据采集解决方案，专业研发\m定制基于串口、PCI、cPCI、USB和以太网接口的SSI编码器数据采集板卡。适配所有支持标准SSI协议的编码器，性能稳定、应用广泛，同时可以定制实现客户的特殊需求。杭州钛比科技专注于SSI数据采集解决方案多年，技术实力超群，在客户中拥有极佳的口碑。\n测试123\n测试456'
			},
		};
		const MillimeterData = {
			name:'毫米波振荡器\n毫米波通信解决方案\n微波毫米波噪声信号源\n微波毫米波接收机和控制组件\n微波毫米波无源和波导器件\n微波毫米波接收机和控制组件\n微波毫米波无源和波导器件\n微波毫米波接收机和控制组件\n微波毫米波无源和波导器件'
		};
		const cTitle = MillimeterData.name.split(/\n/).filter(item => item);
		const MilChildren = cTitle.map((data,i) => (<Col lg={8}  key={i} className="proBox"><Button style={{width:'80%',height:'45px'}}>{cTitle[i]}</Button></Col>));
		const iotChildren = this.getProChildren(proData.IOT);
		const issChildren = this.getProChildren(proData.ISS);
		return (
		  <div className="product">
		    <h1><a name="1" id="1"> </a>物联网产品</h1>
		    	<Row className="productWapper">
		    		{iotChildren}
		    	</Row>
		    <h1><a name="2" id="2"> </a>数据采集产品</h1>
		    	<Row className="productWapper">
		    		{ issChildren }
		    	</Row>
		  	<div className = "Millimeter">
		  		<h1><a name="3" id="3"> </a>毫米波产品</h1>
		  		<Row className="productWapper">
		  			{MilChildren}
		  			<Col lg={8} xs={8} offset={8} key='download'><Button type="primary" icon="download" style={{ width:'80%',height:'35px',marginTop:'20px'}}>下载文档</Button></Col>
		  		</Row>
		  	</div>		     
		    	<Modal
			          title={ this.state.data }
			          visible={this.state.visible}		   
			          onCancel={this.hideModal}
			          footer={null}
			        >
			          { this.state.introduce }
			          
			        </Modal>
		  </div>
    );
	}
}