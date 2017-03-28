import styles from './index.less'
function CodeComponent({children}){
	return (
		<div className={styles.component}>
			{children}
		</div>
		)
}

export default CodeComponent;