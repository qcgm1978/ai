// import * as mathematics from './mathematics'
// import { runRender } from './physics/matter'
import echarts from 'echarts'
import { ActionPotential } from './neuron/action-potential'
// import { handleResults } from './physics/chaos'
// import { r } from './neuroscience'
// import { init, animate } from './psychanalysis'
// import { network } from './biology'
// import { quote } from './philosophy'
// new mathematics.Metric()
// runRender()
// console.log(r())
// init();
// animate();
// console.log(network.activate([1, 1])); // 0.9824...
// console.log(quote)
// handleResults()
const ins = new ActionPotential();
var myChart = echarts.init(document.getElementById('main'));

// specify chart configuration item and data
const option = {
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: ins.getCourseData(),
        type: 'line',
        smooth: true
    }],
    tooltip: {
        trigger: 'xAxis'
    }
};


// use configuration item and data specified to show chart
myChart.setOption(option);