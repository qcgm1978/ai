// require('ml5');
import ml5 from 'ml5'
// Step 1: load data or create some data 
const data = [
    { r: 255, g: 0, b: 0, color: 'red-ish' },
    { r: 254, g: 0, b: 0, color: 'red-ish' },
    { r: 253, g: 0, b: 0, color: 'red-ish' },
    { r: 0, g: 0, b: 255, color: 'blue-ish' },
    { r: 0, g: 0, b: 254, color: 'blue-ish' },
    { r: 0, g: 0, b: 253, color: 'blue-ish' },
];

// Step 2: set your neural network options
const options = {
    task: 'classification',
    debug: true
}

// Step 3: initialize your neural network
const nn = ml5.neuralNetwork(options);

// Step 4: add data to the neural network
data.forEach(item => {
    const inputs = {
        r: item.r,
        g: item.g,
        b: item.b
    };
    const outputs = {
        color: item.color
    };

    nn.addData(inputs, outputs);
});

// Step 5: normalize your data;
nn.normalizeData();

// Step 6: train your neural network
//  how much uncertainty can be tolerated in the forecast, how accurately its current state can be measured, and a time scale depending on the dynamics of the system, called the Lyapunov time
const LyapunovTime = 32
const trainingOptions = {
    epochs: LyapunovTime,
    batchSize: 12
}
// nn.train(trainingOptions, finishedTraining);
nn.train(trainingOptions, whileTraining, finishedTraining);

// Step 7: use the trained model
function whileTraining(epoch, loss) {
    console.log(`epoch: ${epoch}, loss:${JSON.stringify(loss)}`);
}
function finishedTraining() {
    classify();
}

// Step 8: make a classification
function classify() {
    const input = {
        r: 255,
        g: 0,
        b: 0
    }
    nn.classify(input, handleResults);
}

// Step 9: define a function to handle the results of your classification
function handleResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(results); // {label: 'red', confidence: 0.8};
}
export { handleResults }