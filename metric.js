

import * as tf from '@tensorflow/tfjs'
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
export { Metric }