import Introduce from '../../components/introduce/'
import { CodeWrap, Code, CodeDescription, CodeComponent } from '../../components/showcode/'
 
import { Row, Col, Button } from 'antd'
const pre_code =
 `
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
, mountNode);
`;
function Buttons({location}){
	const introduceProps = {
		title: 'Button 按钮',
		titleDescription: '按钮用于开始一个即时操作。',
		subtitle: '何时使用',
		location,
		subDescriptions: ['标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。']
	}

	return (
		<div>
			<Introduce {...introduceProps}></Introduce>
			<Row>
				<Col span={12}>
					<CodeWrap>
						<CodeComponent>
							<Button type="primary">Primary</Button>
						    <Button type="default">Default</Button>
						    <Button type="dashed">Dashed</Button>
						    <Button type="danger">Danger</Button>
						</CodeComponent>
						<CodeDescription title="按钮类型" code={pre_code}>
							按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
						</CodeDescription>
						 
					</CodeWrap>
					
				</Col>
			</Row>
		</div>
		)
}
export default Buttons;