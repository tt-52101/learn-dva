 import styles from './index.less'
 import { Icon, Tooltip } from 'antd'
function Code({code}) {
	return (
		<pre className={styles.pre}>
			<Tooltip title="复制代码">
				<Icon type="copy" />
			 </Tooltip>
			<code>
				{code}
			</code>
		</pre>
	)
}
export default Code;
