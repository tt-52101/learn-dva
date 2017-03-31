import { Component } from 'react'
import Code from '../../components/showcode/code'
import styles from './index.less'

const pre_code = 
`
componentDidMount() {
	const script_map = document.createElement("script");
	script_map.src = "http://webapi.amap.com/maps?v=1.3&key=238d2ca3151115c053024f08481cc681";
	script_map.type = "text/javascript";
	script_map.async = true;
	document.head.appendChild(script_map);
	script_map.onload = () => {
		this.renderMap();
	}
}
`
class Map extends Component {
 
	renderMap = () => {
		console.log(AMap)
		var map = new AMap.Map("map", {
			resizeEnable: true,
			center: [121.480776, 31.235903],
			zoom: 5,
			mapStyle: 'normal',
		});
		// 随机向地图添加500个标注点
		var markers = [];
		var mapBounds = map.getBounds();
		var sw = mapBounds.getSouthWest();
		var ne = mapBounds.getNorthEast();
		var lngSpan = Math.abs(sw.lng - ne.lng);
		var latSpan = Math.abs(ne.lat - sw.lat);
		for (var i = 0; i < 500; i++) {
			var markerPosition = [sw.lng + lngSpan * (Math.random() * 1), ne.lat - latSpan * (Math.random() * 1)];
			var marker = new AMap.Marker({
				position: markerPosition,
				icon: "http://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/img/marker.png",
				offset: { x: -8, y: -34 }
			});
			markers.push(marker);
		}
		map.plugin(["AMap.MarkerClusterer"], function() {
			cluster = new AMap.MarkerClusterer(map, markers);
		});
	}
	componentDidMount() {
		const script_map = document.createElement("script");
		script_map.src = "http://webapi.amap.com/maps?v=1.3&key=238d2ca3151115c053024f08481cc681";
		script_map.type = "text/javascript";
		script_map.async = true;
		document.head.appendChild(script_map);
		script_map.onload = () => {
			this.renderMap();
		}
	}
	
	render() {

		return <div>
			<h1>高德地图聚合</h1>
			<Code code={pre_code}></Code>
			<div id="map">map</div>
		</div>
	}
}
export default Map