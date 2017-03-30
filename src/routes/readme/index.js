import styles from './index.less'
function Readme() {
	return (
		<div className={styles.readme}>
			<h2>项目介绍</h2>
			<p>该项目仿照<code>ant-design</code>官网制作，使用<code>dva</code>脚手架开发</p>
			<p>主要想体验下<code>react</code>配合<code>antd</code>的开发流程</p>
			<h3>特别说明</h3>
			<p><code>ant-design</code>官网是基于<code>github</code>上的<code>.md</code>文件完成，将<code>markdown</code>格式的文件转为网页展现，使用的工具是<code>bisheng</code></p>
			<h3>具体内容</h3>
			<p>顶部导航，侧边栏，主体内容，底部</p>
			<p>侧边栏上部分是模仿的组件介绍，挑了几个</p>
			<p>侧边栏下部分是自己写的其他<code>router</code>内容，配合其他插件的使用</p>
		</div>
		)
}

export default Readme