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
	  download = () => {
	  	window.open("http://owin7pfcv.bkt.clouddn.com/%E6%AF%AB%E7%B1%B3%E6%B3%A2.rar");
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
				proImage:'http://owin7pfcv.bkt.clouddn.com/NB-IoT%E5%BC%80%E5%8F%91%E6%9D%BF.png\nhttp://owin7pfcv.bkt.clouddn.com/TB-Powersource.png\nhttp://owin7pfcv.bkt.clouddn.com/TB-WISP%E6%97%A0%E7%BA%BF%E8%AF%86%E5%88%AB%E4%B8%8E%E4%BC%A0%E6%84%9F%E5%B9%B3%E5%8F%B0.png\nhttp://ou1e80oz4.bkt.clouddn.com/dtu.jpg',
				title:'NB-IoT开发板\nTB-Powercast可充电无线传感器节点\nTB-WISP无线识别与传感平台\nNB-IoT DTU',
				introduce:'钛比科技于4月1日正式向外界发布NB-IoT窄带物联网开发板产品。本款开发板选用了STM32103ZET6 MCU和移远NB-IoT BC95模组，通过配套的 JTAG调试工具可进行下载、仿真调试，通过AT指令与云平台交互。适合广大客户用于NB-IoT窄带物联网应用的学习、评估及开发。m工具包包括：NB-IoT测试板一块；电源适配器一个；串口线/下载线一条；1602液晶显示屏一块；天线一根；m特点：工作电压：STM32工作于3.3V，BC95工作于3.8V； 工作频率：B5，B8，B20；发射功率：23dBM;接收灵敏度：-135dBM；符合3GPP物理层协议；高于GSM通信通信链路20db；睡眠时间可调，降低产品功耗；通信模块指令使用串行通信，易于使用；开发板接口资源丰富；m软件：AT命令及相关测试用例；用于调试开发板芯片的软件；m硬件接口：1路RS485接口；2路RS232接口；1路普通串口通信接口；1路USB转串口通信接口；1路ADC测试接口； 8路ADC输入；8路拨码开关； 3路LED显示； 1个串口选择接口；  1个下载选择接口；  1个温湿度传感器； 1个I2C接口； 1个SPI接口；24个IO接口；1个BC95_JTAG仿真下载接口1个LCD1602液晶显示；1个SMA天线接口； 2个复位键；三种电源接口：分别是3.3V，3.8V，5V;\n TB-Powercast是一种新型基于射频能量收集的可充电无线传感器节点，它除了具有普通传感器节点的感知环境参数、进行数据处理和组网通信的能力外，最重要的特征是可以自主收集空间环境中的射频能量并转化为节点的直流电源，节点无需供电。m系统结构与功能:m能量收集天线：接收射频源发射的电磁波将其转换为高压脉冲m能量转换模块：将天线所产生的高频高压脉冲转换为直流电压并存储在电容中。m传感模块：通过超低功耗传感器感知并收集环境信息，是整个系统的信息源。m处理与通信模块：对传感器数据进行处理并通过ZigBee协议进行无线传输。m特性参数:m射频信号频段：915MHz;射频检测范围：-12dBM-20dBM;天线：水平122°垂直68°增益6.1dBi;输出电压：2.5V-5.5V;最大充电距离：10米;最大通信距离：100米;处理器芯片：CC2530(支持Z Stack);ADC精度：12位;节点工作电流：21MA-33MA;传感器接口：4路小信号模拟量\n无线识别与传感平台(Wireless Identification and Sensing PlatforM , WISP) 是一种可编程的通信和计算硬件平台，可以使用商用UHF RFID阅读器给平台供电，同时完成阅读器与平台之间的通信。平台硬件主要包括天线单元、阻抗匹配单元、能量收集单元，稳压电路，MCU，ASK解调模块/FSK调制模块，以及外部传感器接口。m能量收集模块是WISP中重要的模块，由二极管和电容组成的升压泵电路把天线接收到的微弱的交流信号放大、整流成直流信号，给PCB板上的大电容充电。WISP的其他模块的工作电压来自稳压电路，稳压电路的能量输入来自大电容。MCU使用TI公司的MSP430F2132单片机，主要负责计算和通信。WISP板载集成的传感器包括温度、光照、加速度传感器，根据应用场景的需要，可自行增加低功耗的传感器。m编程环境使用IAR Embedded Workbench，烧写器可使用TI公司的LSD-FET430UIF仿真器或USB下载器，固件编程语言为C语言和汇编语言，WISP社区有丰富的例程可供下载。mTB-WISP是钛比科技开发的无线识别与传感平台，兼容进口WISP接口电路，主要技术指标包括：MMCU: MSP430F2132(16Mhz, 8KB Flash, 512B RAM)mEEPROM: 24AA08(8Kbit, 2.2v operation, I2C serial EEPROM)m通信协议：EPCglobal C1G2m通信速率：40-640kbpsm支持低功耗温度传感器，如 LM94021(Low 1.5v operation, 9uA supply current)m支持低功耗加速度计，如 ADXL330(3-axis, 1.8v operation, current 180uA@1.8v) \n DTU对外提供丰富的接口输入，包括RS485，RS232，开关量和模拟量，可以适配各种外接设备。DTU采集到数据后，通过NB-IoT网络传输到云平台。当DTU接收到云平台下发命令后，将命令透传给RS485或者RS232总线下挂的设备，并读取设备返回的数据，返回到云平台。\m全国大部分城市均已覆盖，上海杭州等主要城市覆盖率已高达90%以上。\m中国移动、中国电信均已在国内主要城市启动了NB-IoT商用网络。DTU可以加速物联网应用的测试、部署和应用。\m功能强大,支持宽电压范围输入，支持RS485、RS232等接口，支持网络透传\m适用场景：智能抄表，充电桩，农业监测，智慧油田，智能建筑，共享单车；'
			},	
			ISS:{
				proImage:'http://owin7pfcv.bkt.clouddn.com/Group%2027.png\nhttp://owin7pfcv.bkt.clouddn.com/PCI%E6%8E%A5%E5%8F%A3%E7%9A%844%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86.png\nhttp://owin7pfcv.bkt.clouddn.com/SSI%E4%BF%A1%E5%8F%B7%E6%A8%A1%E6%8B%9F%E5%99%A8.png\nhttp://owin7pfcv.bkt.clouddn.com/cPCI%E6%8E%A5%E5%8F%A34%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E6%9D%BF.png\nhttp://owin7pfcv.bkt.clouddn.com/RS232%E6%8E%A5%E5%8F%A34%E8%B7%AFSSI%E6%95%B0%E6%8D%AE%E6%9D%BF.png\nhttp://owin7pfcv.bkt.clouddn.com/USB2.0%E9%AB%98%E9%80%9FADC%E9%87%87%E9%9B%86%E7%B3%BB%E7%BB%9F.png\nhttp://owin7pfcv.bkt.clouddn.com/PCI%E6%8E%A5%E5%8F%A324%E8%B7%AF16%E4%BD%8DDAC%E6%9D%BF.png',
				title:'基于USB的8路SSI数据采集板\nPCI接口4路SSI数据采集板\nSSI的信号模拟器\ncPCI接口4路SSI数据采集板\nRS2324路SSI数据板\nUSB2.0高速ADC采集系统\nPCI接口24路16位DAC板',
				introduce:'产品特征m1.提供对4路（可扩展为8路）SSI接口编码器数据采集m2.数据格式：支持8-32位二进制数据，位宽可通过软件配置m3.提供1路USB2.0接口、1路RS232接口、1路RS485接口m4.提供QT环境下的开发示例程序、上位机m5.SSI输出时钟频率支持62.5KHz-1MHz，可以通过软件配置m6.采集频率可以通过软件配置m7.供电电压： 直流12V供电\n产品特征m1.提供对4路（可扩展为8路）SSI接口编码器数据采集m2.数据格式：支持8-32位二进制数据，位宽可通过软件配置m3.PCI接口，直接插于计算机 PCI 插槽中，即插即用，无需外部电源m4.提供 WindowsNT/2000/XP/Win7/Win8 下的多种语言的驱动;支持 32 位以及 64 位系统m5.提供在 VC环境下的开发示例程序，提供 DLL 链接库和 API 函数调用说明;\n产品特征m1.接收采集卡输入SSI时钟，输出4路SSI接口编码器模拟数据m2.数据格式：支持8-32位二进制数据，位宽可通过软件配置m3.提供1路RS232配置接口，可以通过上位机软件（或串口助手）对输出数据模式进行配置m4.支持SSI输入时钟频率范围62.5KHz-2MHz m5.供电电压： 直流5V供电;\n产品特征m1.包括1块采集控制主板、2块用于采集多路SSI信号的SSI信号采集卡，可提供对4路SSI信号的同时采样m2.数据格式：支持8-32位二进制数据，位宽可通过软件配置m3.J1标准连接器、标准SCSI68口母头接口m4.双通道40×2插槽接口：±12V、5V、3.3V、2.5V、1.2V标准输入电压接口，24路外设I/O接口，20路控制器I/O接口；\n产品特征m1.提供对4路SSI接口编码器数据采集m2.数据格式：支持8-32位二进制数据，位宽可通过软件配置m3.提供1路CAN接口、1路RS232接口、1路RS485接口m4.提供QT环境下的开发示例程序、上位机;m5.采集频率可以通过软件配置m6.供电电压： 直流5-24V供电m7.提供1路输出电源，可提供编码器供电使用;\n产品特征m1.USB2.0接口，实时传输速率可达40MB/s;m2.板载DDR3存储，容量2Gb;m3.板载高速ADC： 分辨率14bit；采样频率100MHz;m44.输入：单通道，SMA接口，单端信号;m5.时钟：可选外部时钟输入/板载时钟;m6.直流12V供电;\n产品特征m1.提供24路16位高精度模拟控制信号，信号电压范围为±10V；m2.提供8路数字输入信号和8路数字输出信号；m可以通过上位机编程为采集卡设置唯一的ID号，出厂日期等信息，掉电后这些信息仍然保存;m直接插于计算机PCI插槽中，即插即用；无需外部电源;m5.提供WindowsNT/2000/XP/Win7/Win8下的多种语言的驱动，支持32位以及64位操作系统;m6.提供在VC环境下的开发示例程序;'
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
		  			<Col lg={8} xs={8} offset={8} key='download'><Button className="downloadButton" type="primary" icon="download" onClick={this.download} style={{ width:'80%',height:'35px',marginTop:'20px'}}>下载文档</Button></Col>
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