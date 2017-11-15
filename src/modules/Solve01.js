import React from 'react';

export default class Solve01 extends React.Component{
	render(){
		return (
			<div className="about">
					<div className = "setup">	
						<h2 className="v-title"> 项目背景：</h2>
						<div className="desc" style={{marginBottom: '40px'}}>
							<p>无线传感器网络综合了信息检测、无线通信、信息处理等热门技术，具有感知、计算和通信的能力，目前已被广泛应用在国防军事，环境监测，工业控制，医疗护理和等领域中。无线传感器网络由大量的部署在观测环境附件的廉价低功耗传感器节点组成，目前节点的供电方式是采用电池供电，这样就导致无线传感器网络的生命周期往往取决于节点电池容量大小，一旦节点的能量耗尽，这个节点要么死掉，要么利用人工取更换电池。在某些实际的应用场合当中，节点被随意部署在危险的工作环境里，或者被内置至物体内部，譬如智能家居、生命仪器、结构监测等应用场合，仅仅依靠人工取更替这些废旧电池，首先是难以实现，其次将会造成 人力物力很大的损耗。典型的场景如图所示。</p>
							<br />
							<p className="ImgBox" style={{width:'60%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve1.png'} width="100%" alt="img" /> </p>
							<br />
							<p>基于以上难题，杭州钛比科技提出了基于智能无人机的移动充电与感知系统，首次实现智能无人机携带能量源为部署在难以到达地区的无线传感器网络节点充电作业。</p>
							<br />
						
						<h2 className="v-title">系统设计：</h2>
						<h3>1.  基于射频能量收集的无线可充电传感器网平台</h3>
						<br />
						<p>无线可充电传感器节点以及射频发射器的硬件设计是实现整个无线可充电传感器网络平台的基础。无线可充电传感器节点的硬件功能是要实现对环境射频能量的收集，并且将之转换为需求的直流电压，从而为传感器核心部分进行供电，保证整个无线传感器网络平台能够协调开展采样、通信、计算等功能。主要内容包括：系统原理图设计、子模块设计、芯片选型、天线选型以及PCB板设计等工作。无线可充电传感器网络节点硬件设计主要分为四大模块：能量收集天线模块、能量转换模块、传感器模块、微处理器模块。其中能量收集天线模块接收射频源发射的电磁波将其转换为高压脉冲；能量转换模块与接收天线进行阻抗匹配后连接，主要功能是将天线所产生的高频高压脉冲转换为直流电压并存储在电容当中；传感器模块是整个系统的信息源，通过超低功耗传感器感知并收集环境信息；微处理器模块是整个节点的核心，包括通信模块与数据处理模块，通信模块通过无线传输方式接收或者发送数据。无线可充电传感器网络节点的硬件设计总体框图如图所示。</p>
						<p className="ImgBox" style={{width:'24%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve2.png'} width="100%" alt="img" /> </p>
						<p>本项目所设计的射频发射器采用电磁辐射的射频能量发射方式，可以实现向空间环境持续稳定发射中心频率为915MHz的电磁波，射频发射功率可根据实际需求进行调节，电磁波方向性集中，能量传输效率高。硬件设计结构框图如图3所示，包括振荡器模块、功率放大模块、电源模块以及天线模块。</p>
						<p className="ImgBox" style={{width:'24%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/3.png'} width="100%" alt="img" /> </p>
						<p>为了产生稳定的915MHz电磁波为无线可充电传感器网络节点进行供电，本项目设计的射频发射器具有以下优势：<br />
							1）本设计采用压控振荡器产生射频信号，其输出频率在902MHz~928MHz这个频段内进行调节，可以满足不同节点的能量接收频段的需求。<br />
							2）本设计采用了右旋圆极化的RFID板状天线，覆盖面积广，可同时为多个节点进行充电，能量集中性高，空间散射消耗的能量少。<br />
							3）本设计的射频发射功率可调，可以根据节点的实际需求来调节发射功率，进一步地优化系统的能量利用效率。<br />
							4）PCB板采用了大面积的过孔和敷铜，增加散热性能，外壳采用铝腔屏蔽，可提高射频电路的抗干扰和抗噪声性能。<br />
							5) 功率放大器采用大功率输出器件，可满足大功率应用的需求，其915MHz射频信号输出功率最高可达20W。</p>
						
						<h3>2. 智能无人机平台</h3>
						<p>可编程智能无人机平台由地面站、无人机机架、飞控系统、电子调速器、电机、螺旋桨、GPS、气压计、433MHz接收机、PPM编码器、光流摄像头和大容量锂电池构成；其中，地面站实时显示无人机平台的飞行状态，与无人机通过433MHz的无线通信协议相连，无人机机架作为无人机平台的主体，所有设备都被安置在机架的特定区域，电机和电子调速器通过粗铜线相连，螺旋桨被固定在电机上，433MHz接收机与PPM编码器通过杜邦线连接，GPS、气压计、PPM编码器、光流摄像头和大容量锂电池分别与飞控系统相连，电子调速器分别与大容量锂电池和飞控系统相连；无人机机架采用高纤维碳棒，为无人机平台的主体部分，负载了动力装置以及飞行控制系统；飞控系统采用Pixhawk飞控平台，用于接收无人机平台的传感器信息，并控制无人机的飞行状态以及飞行任务计划，飞控系统的固件通过上位机Mission Planner下载；电子调速器采用Platinum 30A铂金电调，通过控制可控硅的导通来改变电机的供电电压，使电机的特性曲线下移来改变异步电机的转速；电机采用Happymodel 高品质3508 无刷电机，通过带动螺旋桨转动，为无人机平台提供动力；GPS实时监测无人机的地理坐标，为无人机导航系统提供了定位信息；飞控主板内置的气压计模块根据无人机的所在空间的气压值来判断无人机的飞行高度；433MHz接收机通过MavLink通信协议与地面站无线连接；PPM编码器接收并解调433MHz接收机的编码信号，将解调后的信号传输至飞控系统；光流摄像头采用PX4FLOW，用于辅助气压计在低空的定高，提高无人机的悬停稳定性；大容量锂电池采用DUPU 10000 mAh高密度聚合物锂电池，经稳压滤波后为整个无人机平台供电。无人机平台的结构图如图4所示。下面主要介绍无人机平台三个重要模块，飞控核Pixhawk，光流相机PIX4FLOW以及地面站软件Mission Planner。</p>
						<h3>3. 精准定位系统</h3>
						<p>为了使无人机能够准确地到达指定充电点，同时保证无人机的飞行稳定性以及飞行安全，本项目采用了A-GPS辅助定位系统，光流摄像头以及相应的重复图像检测算法，还有高精度超声波传感器模块。</p>
						<p> A-GPS结合了GSM / GPRS 与传统********，利用基地台代送辅助卫星信息，藉以缩减GPS芯片获取卫星信号的延迟时间，受遮盖的室内也能接受基地台讯号弥补，减轻GPS芯片对卫星的依赖度。A-GPS和纯GPS、基地台三角定位比较，A-GPS能提供范围更广、更省电、速度更快的定位服务，理想误差范围在10公尺以内。本设计首次将A-GPS辅助定位应用于无人机的定位系统当中，使无人机定位精度从米级别提升至厘米级别，同时可以满足在室内的应用环境。</p>
						<p>在无人机到达待充电坐标后，需要稳定的停留在目标坐标点进行悬停充电，而无人机的飞行会受到很多不稳定因素影响，譬如横风，GPS信号不稳定等等，都会导致无人机在悬停时漂移，这样会严重降低无线充电的能量传输效率，会导致某些节点无法有效地接受到能量而被遗漏。所以为了提升智能无人机在悬停作业时的稳定性，需要为无人机平台加装光流摄像头，同时需要实现重复图像检测算法。</p>
						<p>本项目所使用的PX4FLOW Sensor是一款高分辨率的向下朝向的相机模块，利用地面纹理和其它可见的地面特性以及测距仪来确定地面加速度，同时内置Maxbotix LZ-EZ4声呐来提升测量高度的准确度。内置三轴陀螺仪自动补偿机身相对于地面的倾斜。PX4-FLOW与PX4-FMU相同，也使用功能强大的Cortex M4F微控制器。光流与飞控的连接方式如图所示。</p>
						<p className="ImgBox" style={{width:'40%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/5.jpg'} width="100%" alt="img" /> </p>
						<p>光流摄像头通过IAS以一定速率连续采集待充电区域物体表面图像，再由飞控对所产生的图像数字矩阵进行分析。由于相邻的两幅图像总会存在相同的特征通过对比这些特征点的位置变化信息，利用重复图像检测算法，便可判断出物体表面的平均运动，整个分析结果会被转换为二维的坐标偏移量，并以像素形式存储在特定的寄存器中，实现对无人机运动的检测。检测到无人机偏移量之后，利用基于匹配的方法控制无人机飞控，使无人机恢复到偏移之前的坐标点，只要响应速度足够迅速，无人机可以稳定的在待充电坐标点进行稳定的悬停作业。</p>
						<p>为了保证无人机飞行安全，本项目在无人机四周部署多个超声波传感器，实时检测四周是否存在障碍物，以实现避障功能，为了满足快速响应，本设计采用了HC-SR04超声波测距模组，其测距精度可达3mm，相应速度10微秒，最大检测距离可达30m，由于无人机携带的气压计在低空误差较大，所以在无人机下部也安置了该超声波模组，用于实现在低空的定高。</p>
						<h3>3. 精准定位系统</h3>
						<p>数据网关由ZigBee通信模块、微处理器模块及GSM/GPRS/GPS三合一模块和电源模块组成；其中，电源模块以及三合一模块均与微处理器直接相连，微处理器模块与ZigBee通信模块通过转接板相连，ZigBee通信模块通过PCB接收监测节点发送的道路健康信息数据，将这些数据以及自身节点编号通过串口0发送至微处理器模块，微处理器模块通过串口1将数据发送至GPRS模块，GPRS模块的驱动程序由Arduino单片机实现，GPRS模块将数据发送至服务器。数据网关结构图如图所示。</p>
						<p className="ImgBox" style={{width:'40%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve6.jpg'} width="100%" alt="img" /> </p>
						<p> 微处理器使用Arduino Mega 2560，Arduino是目前较为流行的电子互动平台，基于单片机系统开发，具有使用简单、功能多样、价格低廉等优点，广泛应用于电子系统设计和互动产品开发方面。</p>
						<p>由于数据网关由移动电源供电，对节点的能耗无要求，因此本设计中使用串口资源丰富且开发便利的Arduino微控制器，虽然目前使用到的资源不多，但Arduino为后续的开发预留了丰富的IO资源及通信资源。</p>
						<p>GSM/GPRS/GPS三合一模块使用YIXIN_SIM808_A 模块，该模块是一款高性能工业级的GSM/GPRS/GPS三合一模块（开发板）。YIXIN_SIM808_A 模块采用 SIMCOM 公司的工业级四频GSM/GPRS/GPS 模块：SIM808，可以低功耗实现语音、短信、彩信、数据和传真信息的传输。同时SIM808还具有全球********GPS功能，适用于各类GPS定位导航应用。YIXIN_SIM808_A 模块板载USB转TTL串口电路并支持单独TTL串口连接，TTL串口支持3.3V/5V系统，支持超5V-24V的宽工作电压范围，工作温度为-40℃至+85℃。该模块可将传感器数据通过AT指令发送至服务器，同时可以在检测到无人机飞行轨迹异常时发送报警信号给上位机。检测轨迹异常的方式将预先存储的设定点的GPS信息与无人机悬停时YIXIN_SIM808_A模块接收到的GPS信息进行比较，若误差超过一定值，表明无人机出现飞行异常，并立即通知用户。</p>
						<p>为了便于用户查询存储服务器端数据，本公司设计了服务器端上位机软件，服务器直接接收数据网关发来的数据并存储在数据库中，当上位机软件运行显示数据的程序时，则会访问数据库，获取所需数据并在窗口中显示出来。具体工作流如下所示，上位机界面如图所示。</p>
						<p className="ImgBox" style={{width:'60%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve7.png'} width="100%" alt="img" /> </p>
						<p>数据接收：通过HTTP连接，云服务器接收到YIXIN_SIM808A上GPRS模块发来的传感器数据；</p>
						<p>解析JSON字段：服务器端先后获取到四个JSON字段，如果这四个JSON字段格式符合要求，则提取出这四个字段的值，获得监测节点的传感器信息；</p>
						<p>数据存储：将传感器信息数据存储到云端数据库；</p>
						<p>数据显示：从云端数据库提取每个传感器对应表中最新的数据，显示到上位机软件界面上；</p>
						<p>辅助功能：为提升系统运行安全性，增强用户对该系统的控制强度，加入远程重启和报警功能。</p>
						<h3>3. 系统测试</h3>
						<p>本项目设计了一种新型的移动充电与感知方案，用于解决在偏远地区无线传感器节点的供能难题，经过多次的试验与改进，系统成功低实现了对高层建筑的结构监测传感器节点供电以及大型农场农作物监测传感器节点进行供电，成功获取传感器数据并上传至云端服务器。现场测试图如图所示。</p>
						<p className="ImgBox" style={{width:'60%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve8.png'} width="100%" alt="img" /> </p>
						<p>由于文章篇幅限制，本项目详细的设计方案以及现场测试视频见以下链接（建议超清观看）：<a href="http://v.youku.com/v_show/id_XMTQ5NjEyNTkwMA==.html?spm=a2hzp.8253869.0.0&from=y1.7-2">优酷视频链接</a>；</p>
					</div>
				</div>			   		
			</div>				 
			)
			}
}