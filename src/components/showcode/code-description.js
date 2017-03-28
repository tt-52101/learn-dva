import styles from './index.less'
import { Icon } from 'antd'
import { Component } from 'react'
import Code from './code.js'
// function CodeDescription({title, children}){
// 	return (
// 		<div className={styles.desc}>
// 			<div className={styles.title}>{title} <a href=""><Icon type="edit" /></a> </div>
// 			<p>{children}</p>
// 			<div className={styles.collapse}>
// 				<Icon type="up-circle-o" />
// 			</div>
// 		</div>
// 		)
// }
 

 class CodeDescription extends Component{
 	state = {
 		icon_type: 'up-circle-o'
 	}
 	iconClick = () => {
		this.setState({
			icon_type: (this.state.icon_type === 'up-circle-o') ? 'down-circle-o': 'up-circle-o'
		})
 	}
	render() {
		const {title, children, code} = this.props;
		return (
			<div>
				<div className={styles.desc}>
					<div className={styles.title}>{title} <a href=""><Icon type="edit" /></a> </div>
					<p>{children}</p>
					<div className={styles.collapse}>
						<Icon onClick={this.iconClick} type={this.state.icon_type} />
					</div>
				</div>
				{this.state.icon_type=='down-circle-o'?<Code code={code}></Code>:''}
			</div>
			)
	}
}
export default CodeDescription;