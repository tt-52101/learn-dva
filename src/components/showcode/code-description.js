import styles from './index.less'
import { Icon, Tooltip } from 'antd'
import { Component } from 'react'
import Code from './code.js'


class CodeDescription extends Component {
	state = {
		icon_type: 'up-circle-o'
	}
	iconClick = () => {
		this.setState({
			icon_type: (this.state.icon_type === 'up-circle-o') ? 'down-circle-o' : 'up-circle-o'
		})
	}
	render() {
		const { title, children, code } = this.props;
		return (
			<div>
				<div className={styles.desc}>
					<div className={styles.title}>
						{title} 
						<Tooltip title="在github上编辑此页"><a href=""><Icon type="edit" /></a> </Tooltip>
					</div>
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