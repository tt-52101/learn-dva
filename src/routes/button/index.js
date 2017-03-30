import Introduce from '../../components/introduce/'
import { CodeWrap, Code, CodeDescription, CodeComponent } from '../../components/showcode/'

import { Row, Col, Button } from 'antd'
const pre_code1 =
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
const pre_code2 = 
`
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
  </div>,
  mountNode
);
`
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
			<Row gutter={20}>
				<Col span={12}>
					<CodeWrap>
						<CodeComponent>
							<Button type="primary">Primary</Button>
						    <Button type="default">Default</Button>
						    <Button type="dashed">Dashed</Button>
						    <Button type="danger">Danger</Button>
						</CodeComponent>
						<CodeDescription title="按钮类型" code={pre_code1}>
							按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
						</CodeDescription>
					</CodeWrap>
					
				</Col>
				<Col span={12}>
					<CodeWrap>
						<CodeComponent>
							<Button type="primary" shape="circle" icon="search" />
							<Button type="primary" icon="search">Search</Button>
							<Button shape="circle" icon="search" />
							<Button icon="search">Search</Button>
							<br />
							<Button shape="circle" icon="search" />
							<Button icon="search">Search</Button>
							<Button type="dashed" shape="circle" icon="search" />
							<Button type="dashed" icon="search">Search</Button>
						</CodeComponent>
						<CodeDescription title="图标按钮" code={pre_code2}>
							当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
							如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
						</CodeDescription>
					</CodeWrap>
				</Col>
			</Row>
		</div>
		)
}
export default Buttons;