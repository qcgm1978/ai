

require('@tensorflow/tfjs-node'); const tf = require('@tensorflow/tfjs')
class Metric {
    constructor() {
        const x = tf.tensor2d(
            [
                [0, 0, 0, 1],
                [0, 1, 0, 0],
                [0, 0, 0, 1],
                [1, 0, 0, 0],
                [0, 0, 1, 0]
            ]
        );

        const y = tf.tensor2d(
            [
                [0, 0, 1, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 1],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ]
        );
        //  Computes the precision of the predictions with respect to the labels.

        const precision = tf.metrics.precision(x, y);
        precision.print();
    }
}
class Exponential {
    constructor(x) {
        this.x = tf.tensor1d(x)
    }
    getResult() {
        return tf.exp(this.x).dataSync()
    }
}
module.exports = { Metric, Exponential }