import styles from './index.less'
import { FooterLinks } from '../../utils/config'
import { Icon } from 'antd'
function Footer(){
	return(
		<footer id={styles.footer}>
		    <ul>
		        {
		        	FooterLinks.map((item, index) => {
		        		 
	        	return	<li key={index}>
			        		<h2><Icon type={item.icon}></Icon><span>{item.title}</span></h2>
			        		{
			        			item.lists.map((list, index) => {
			        				 
		        			return	<div key={index}>
				        				{ 
				        					list.href ? <a href={list.href}>{list.name}</a> : <span>{list.name}</span> 
				        				}
										{
											list.ps ? <span>{' - '}{list.ps}</span> : ''
										}
					        		</div>
			        			})
			        		}
		        		</li>
		        	})
		        }
		       
 
		    </ul>
		</footer>

		)
}

export default Footer