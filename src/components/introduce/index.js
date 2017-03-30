import {Icon, Tooltip} from 'antd'
import styles from './index.less'
function Introduce({title, titleDescription, subtitle, subDescriptions, component, location}){
	console.log(location)
	const path = location.pathname.substr(0,1) === '/' ? location.pathname.substr(1) : location.pathname
	const hrefGithub = `https://github.com/ant-design/ant-design/edit/master/components/${path}/index.zh-CN.md`;
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
 			{
 				subDescriptions.length> 1 ? <ul className={styles.uls}>{subDescriptions.map((item, index) => <li key={index}>{item}</li>)}</ul> : <p>{subDescriptions[0]}</p>
 			}
		</div>
		)
}

export default Introduce;