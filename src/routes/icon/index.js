import styles from './index.less'
import Introduce from '../../components/introduce/'
import { Row, Col, Icon, Tooltip } from 'antd'
import CopyToClipboard from 'react-copy-to-clipboard'
import IconTypes from '../../utils/icon'
import { Component } from 'react'
console.log(location)
const introduceProps = {
	title: 'Icon 图标',
	titleDescription: '语义化的矢量图形。',
	subtitle: '图标的命名规范',
	location,
	subDescriptions: ['实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）', '命名顺序：[图标名]-[形状?]-[描线?]-[方向?]']
}
class Icons extends Component {
	state = {
		
	}
	handleCopy = (index) => {
 
		const ref = `div${index}`
	 
		this.refs[ref].setAttribute('class', "showFloater");
		//箭头函数可获取this
		setTimeout(() => {
			this.refs[ref].setAttribute('class', "");
		}, 1500)
		 
	}
	render() {
		return (
			<div>
				<Introduce {...introduceProps}></Introduce>
				<h2 className={styles.h2}>图标列表</h2>
				<p className={styles.p}>点击可复制</p>
				<Row className={styles.icon}>
					{
						IconTypes.map((item, index) => {
							return <CopyToClipboard key={index} onCopy={this.handleCopy.bind(this, index)}  text={`<Icon type="${item}"></Icon>`}>
								 		<Col span={4}>
								 			<div ref={'div' + index}>
												 		<Icon type={item}></Icon>
														<div>{item}</div>
								 			<div className="floter">Copyed !</div>
								 			</div>
								 	 		
								 		</Col>
									</CopyToClipboard>
									
						})
					}
				</Row>
			</div>
			)
	}
}
export default Icons;