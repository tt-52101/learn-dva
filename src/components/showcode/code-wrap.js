import styles from './index.less'
function CodeWrap({children}){
	return (
		<div className={styles.wrap}>
			{children}
		</div>
		)
}

export default CodeWrap;