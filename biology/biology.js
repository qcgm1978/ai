import * as neataptic from 'neataptic'
// this network learns the XOR gate (through backpropagation)
var network = new neataptic.architect.Perceptron(2, 4, 1);
var trainingSet = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];
// training set same as in above example
network.train(trainingSet, {
    error: 0.01
});

export { network }