import Introduce from '../../components/introduce/'
function Icon({location}){
	console.log(location)
	const introduceProps = {
		title: 'Icon 图标',
		titleDescription: '语义化的矢量图形。',
		subtitle: '图标的命名规范',
		location,
		subDescriptions: ['实心和描线图标保持同名，用 -o 来区分，比如 question-circle（实心） 和 question-circle-o（描线）', '命名顺序：[图标名]-[形状?]-[描线?]-[方向?]']
	}
	return <Introduce {...introduceProps}></Introduce>
}
export default Icon;