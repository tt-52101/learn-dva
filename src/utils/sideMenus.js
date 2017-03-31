const SideMenus = [{
	name: '项目介绍',
	key: 'introduce',
},{
	name: 'Component',
	key: 'Component',
	groups: [{
		name: 'General',
		key: 'General',
		children: [{
			name: 'Button 按钮',
			key: 'Button'
		}, {
			name: 'Icon 图标',
			key: 'Icon'
		}]
	},{
		name: 'Custom',
		key: 'Custom',
		children: [{
			name: 'AMap 高德地图',
			key: 'AMap'
		}, {
			name: 'Recharts 图表',
			key: 'Recharts'
		}]
	}]
}]

export default SideMenus