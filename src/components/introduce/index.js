import styles from './index.less'
import {Icon, Tooltip} from 'antd'
function Introduce({title, titleDescription, subtitle, subDescriptions, component}){
	const hrefGithub = `https://github.com/ant-design/ant-design/edit/master/components/${component}/index.zh-CN.md`;
	const hrefAnchor = `#${subtitle}`;
	return (

		<div className={styles.wrap}>
			<h1>
				<span>{title}</span>
				 
			    <Tooltip placement="topLeft" title="在github上编辑此页" arrowPointAtCenter>
			        <a className={styles.edit} href={hrefGithub}><Icon type="edit" /></a>
			       </Tooltip>
				
			</h1>
			<p className={styles.titleDescription}>
				{titleDescription}
				
			</p>
			<h2>{subtitle}<a className={styles.anchor} href={hrefAnchor}>#</a></h2>
 			<p>
				{ subDescriptions.length>1 ? <ul>{subDescription.map(item => <li>{item}</li>)}</ul> : subDescriptions[0]}
 			</p>
		</div>
		)
}

export default Introduce;