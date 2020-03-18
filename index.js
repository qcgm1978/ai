import * as mathematics from './metric'
import { runRender } from './physics'
import { r } from './neuroscience'
import { init, animate } from './psychanalysis'
import { network } from './biology'
new mathematics.Metric()
runRender()
console.log(r())
init();
animate();
console.log(network.activate([1, 1])); // 0.9824...