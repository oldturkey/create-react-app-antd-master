import React from 'react';
import { Icon} from 'antd';

export default class Solve02 extends React.Component{
	render(){
		return (
			<div className="about">
					<div className = "setup">	
						<h2 className="v-title"><Icon type="home" /> 隔墙运动物体检测解决方案</h2>
						<h2 className="v-title">1 系统整体方案</h2>
						<div className="desc" style={{marginBottom: '40px'}}>
							<p>隔墙运动物体检测系统采用基于软件无线电 (Software Defined Radio, SDR)设备及其软件平台的设计方案。如图 1 所示，该系统包括：三个 USRP  N210（其中两个作为发射机、一个作为接收机）、一台外置时钟源和千兆网络交换 机和三个定向喇叭天线。其中 USRP N210 与定向喇叭天线和外置时钟源分别使 用 SMA 连接线进行连接；而电脑与三台 USRP N210 则分别使用网线连接到千 兆网络交换机的端口。</p>
							<p>传统的硬件无线电通信设备在软件无线电系统中只作为基本的硬件平台， 其他各种数字信号处理均是由软件实现。另外通过软件无线电设备接收回来的 信号也可以保存到电脑上，然后通过 MATLAB 和 Python  等工具进行后续的数 字信号处理与分析。基于软件无线电平台，本文对发射信号进行预编码，以消 除墙面反射等静止物体产生的强背景干扰对墙后运动物体检测的影响。</p>
							<br />
							<p className="ImgBox" style={{width:'40%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve9.png'} width="100%" alt="img" /> </p>
							<br />
							<p>基于以上难题，杭州钛比科技提出了基于智能无人机的移动充电与感知系统，首次实现智能无人机携带能量源为部署在难以到达地区的无线传感器网络节点充电作业。</p>
							<br />
						
						<h2 className="v-title" >2 检测算法</h2>
						<p>针对隔墙运动物体检测，主要包括以下四个方面的检测：</p>
						<p>1. 隔墙运动物体检测。通过对接收信号进行时频分析进而提取出相应的特征 值，使用阈值比较来检测判断隔墙是否存在运动物体。</p>
						<p>2. 隔墙运动物体相对运动检测。由于运动物体相对接收机运动会产生多普勒 偏移，通过提取接收信号的信道状态信息的多普勒频率偏移，进而判断运 动物体是相对接收机是靠近运动还是远离运动。另外，根据多普勒频移还 可以大致估算出运动物体的速度。</p>
						<p>3. 隔墙运动物体运动朝向检测。根据沿墙水平运动和垂直运动的波形之间存 在着明显的差异，利用动态时间规整方法分别计算实际波形与这两种运动 朝向标准波形之间的相似性，选取相似性较大的运动朝向作为当前时刻的 运动朝向。</p>
						<p>4. 隔墙运动物体自适应检测。为了适应不同的检测环境，引入机器学习的思 想和方法，提出了基于聚类和分类的运动物体自适应检测方法，通过前期 采集的信号数据，先后进行聚类和分类操作，训练得到一个分类器，实际 运行过程中将特征值传递到分类器进行检测判断。</p>
						<h2 className="v-title" >2 工程样机以及实验结果</h2>
						<p>为了使得整个系统整齐美观，更具一体性，将该系统的硬件都 放置在一个控制柜里，并分层摆放。中定向天线在最上层，时钟源和交 换机在中间位置，而 USRP  N210 则位于最下面， 通过前面板的显示器 可以实时观察隔墙运动物体检测的结果。</p>
						<p>实验的场景为：</p>
						<p>(1) 墙体的衰减大于 20 dB。</p>
						<p>(2) 系统摆放在离墙一侧 0.5 m 处，运动物体在墙体另一侧运动。</p>
						<p>(3) 频率为 2.485 GHz。</p>
						<p>(4) 带宽为 1 MHz。</p>
						<br />
						<p className="ImgBox" style={{width:'40%',margin:'0 auto'}}><img src={'http://owin7pfcv.bkt.clouddn.com/solve10.png'} width="100%" alt="img" /> </p>
						<p>上表展示了隔墙运动物体实时检测的准确性，在静止情况，由于特征值远远低于阈值，所以并不会出现将静止情况判断为隔墙物体运动的情形；而在隔 墙物体运动时，其检测的准确性高达 95%，有 5% 的可能性将运动情况下误 判为静止情况，这些场景基本发生在运动物体在离接收机较远的检测区域内运 动。</p>
						<p>为了更深入地了解该系统的检测功能，可以观看隔墙运动物体检测的演示Demo。演示 Demo 的链接为：<a href="https://youtu.be/tcs7aDdiBQw">youtu链接</a>。</p>
					</div>
				</div>			   		
			</div>				 
			)
			}
}