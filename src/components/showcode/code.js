import styles from './index.less'
import { Icon, Tooltip } from 'antd'
import { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

class Code extends Component {
	state = {
		copyed: false
	}
	handleCopy = () => {
		!this.state.copyed && this.setState({ copyed: true })
	}
	handleLeave = () => {
		this.state.copyed && this.setState({ copyed: false })
	}
	render() {
		const {code } = this.props;
		return (
			<pre className={styles.pre}>
				{
					<Tooltip onClick={this.handleCopy} onMouseLeave={this.handleLeave} title={this.state.copyed?'复制成功': '复制代码'}>
						<CopyToClipboard text={code}>
						 		<Icon type={this.state.copyed ? 'check' : 'copy'} />
						 	</CopyToClipboard>
					</Tooltip>  
				}
				<code id="code">
					{code}
				</code>
			</pre>
		)
	}
}



export default Code;
