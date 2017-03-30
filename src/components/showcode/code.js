import styles from './index.less'
import { Icon, Tooltip } from 'antd'
import { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/styles';


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
		const { code } = this.props;
		return (
			<div className={styles.pre}>
				{
					<Tooltip title={this.state.copyed?'复制成功': '复制代码'}>
						<CopyToClipboard text={code}>
						 		<Icon onClick={this.handleCopy} onMouseLeave={this.handleLeave} type={this.state.copyed ? 'check' : 'copy'} />
						 	</CopyToClipboard>
					</Tooltip>  
				}
				<SyntaxHighlighter language='javascript' style={xcode}>{code}</SyntaxHighlighter>
				
			</div>
		)
	}
}

export default Code;
