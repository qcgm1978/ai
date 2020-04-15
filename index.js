// import * as mathematics from './mathematics'
// import { runRender } from './physics/matter'
// import echarts from 'echarts'
// import 'echarts/lib/chart/line'
// import 'echarts-gl'
// import { ActionPotential } from './neuron/action-potential'
// import './neuron/classification'
import { takeNNTask } from './neuron/neuron-network'
import { init, animate } from './psychology/psychanalysis'
// import { network } from './biology'
// import { quote } from './philosophy'
// new mathematics.Metric()
// runRender()
init();
animate();
// console.log(network.activate([1, 1])); // 0.9824...
// console.log(quote)
takeNNTask();
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