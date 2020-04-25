// import * as mathematics from './mathematics'
// import { runRender } from './physics/matter'
// import echarts from 'echarts'
// import 'echarts/lib/chart/line'
// import 'echarts-gl'
// import { ActionPotential } from './neuron/action-potential'
// import './neuron/classification'
// import { takeNNTask } from './neuron/neuron-network'
// import { init, animate } from './psychology/psychanalysis'
// import { network } from './biology'
// import { quote } from './philosophy'
// new mathematics.Metric()
// runRender()
// init();
// animate();
// console.log(network.activate([1, 1])); // 0.9824...
// console.log(quote)
// takeNNTask();
// const ins = new ActionPotential();

// specify chart configuration item and data
// const option = {
//     xAxis: {
//         type: 'value',
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: ins.getCourseData(),
//         type: 'line',
//         smooth: true
//     }],
//     tooltip: {
//         trigger: 'xAxis'
//     }
// };


// // use configuration item and data specified to show chart


// var dataCount = 0;
// var CHUNK_COUNT = 230;
// // https://blog.openstreetmap.org/2012/04/01/bulk-gps-point-data/
// function fetchData(idx) {
//     if (idx >= CHUNK_COUNT) {
//         return;
//     }
//     const ROOT_PATH = 'https://echarts.apache.org/examples/'
//     var dataURL = ROOT_PATH + 'data/asset/data/gps/gps_' + idx + '.bin';
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', dataURL, true);
//     xhr.responseType = 'arraybuffer';

//     xhr.onload = function () {
//         var rawData = new Int32Array(this.response);
//         var data = new Float32Array(rawData.length);
//         // var addedDataCount = rawData.length / 2;
//         for (var i = 0; i < rawData.length; i += 2) {
//             data[i] = rawData[i + 1] / 1e7;
//             data[i + 1] = rawData[i] / 1e7;
//         }

//         myChart.appendData({
//             seriesIndex: 0,
//             data: data
//         });

//         fetchData(idx + 1);
//     }

//     xhr.send();
// }

// var option = {
//     backgroundColor: '#000',
//     title: {
//         text: '10000000 GPS Points',
//         left: 'center',
//         textStyle: {
//             color: '#fff'
//         }
//     },
//     geo: {
//         map: 'world',
//         roam: true,
//         label: {
//             emphasis: {
//                 show: false
//             }
//         },
//         silent: true,
//         itemStyle: {
//             normal: {
//                 areaColor: '#323c48',
//                 borderColor: '#111'
//             },
//             emphasis: {
//                 areaColor: '#2a333d'
//             }
//         }
//     },
//     series: [{
//         name: '弱',
//         type: 'scatterGL',
//         progressive: 1e6,
//         coordinateSystem: 'geo',
//         symbolSize: 1,
//         zoomScale: 0.002,
//         blendMode: 'lighter',
//         large: true,
//         itemStyle: {
//             color: 'rgb(20, 15, 2)'
//         },
//         postEffect: {
//             enable: true
//         },
//         silent: true,
//         dimensions: ['lng', 'lat'],
//         data: new Float32Array()
//     }]
// };
// var myChart = echarts.init(document.getElementById('main'));

// myChart.setOption(option);
// fetchData(0);
import JXG from 'jsxgraph'
const brd = JXG.JSXGraph.initBoard('jxgbox', { boundingbox: [-1, 4, 12, -4], keepaspectratio: true });
p1 = brd.create('point', [0.5, -1.5], { name: 'A', fillColor: 'red', strokeColor: 'red' });
p2 = brd.create('point', [7.5, 0.5], { name: 'B', fillColor: 'red', strokeColor: 'red' });
p3 = brd.create('point', [2, 3], { name: 'C', fillColor: 'red', strokeColor: 'red' });

b1 = brd.create('segment', ['A', 'B'], { name: '' });
b2 = brd.create('segment', ['A', 'C'], { name: '' });
b3 = brd.create('segment', ['C', 'B'], { name: '' });

c1 = brd.create('circumcircle', ['A', 'B', 'C'], { name: '', point: { visible: false } });
c1.setProperty('strokeColor:#AAAAAA');

l1 = brd.create('bisector', ['B', 'A', 'C'], { name: '', visible: false }); // alpha
l2 = brd.create('bisector', ['C', 'B', 'A'], { name: '', visible: false }); // beta

i1 = brd.create('intersection', [l1, l2, 0], { name: '', visible: false });
pp1 = brd.create('perpendicularpoint', [i1, b1], { name: "C'", fillColor: 'blue' });
pp2 = brd.create('perpendicularpoint', [i1, b2], { name: "B'", fillColor: 'blue' });
pp3 = brd.create('perpendicularpoint', [i1, b3], { name: "A'", fillColor: 'blue' });

c2 = brd.create('circumcircle', [pp1, pp2, pp3], { name: '', strokeColor: '#3CB371', point: { visible: false } });
c3 = brd.create('circumcircle', [p3, pp2, pp3], { name: '', strokeColor: '#FF8C00', point: { visible: false } });
c4 = brd.create('circumcircle', [p2, pp1, pp3], { name: '', strokeColor: '#FF8C00', point: { visible: false } });
c5 = brd.create('circumcircle', [p1, pp2, pp1], { name: '', strokeColor: '#FF8C00', point: { visible: false } });

i2 = brd.create('otherintersection', [c3, c1, p3], { name: "C''", fillColor: 'blue' });
i3 = brd.create('otherintersection', [c4, c1, p2], { name: "B''", fillColor: 'blue' });
i4 = brd.create('otherintersection', [c5, c1, p1], { name: "A''", fillColor: 'blue' });

ll1 = brd.create('segment', [i2, pp1], { name: '', strokeColor: '#FF6347' });
ll2 = brd.create('segment', [i3, pp2], { name: '', strokeColor: '#FF6347' });
ll3 = brd.create('segment', [i4, pp3], { name: '', strokeColor: '#FF6347' });

i5 = brd.create('intersection', [ll1, ll2, 0], { name: "P", fillColor: '#9932CC', strokeColor: '#9932CC' });
brd.update();