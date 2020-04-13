// require('ml5');
import ml5 from 'ml5'
// Once it is trained, your neural network and do classification or regression tasks.
const takeNNTask = () => {

    // Step 1: load data or create some data 
    const data = [
        { r: 255, g: 0, b: 0, color: 'red-ish' },
        { r: 254, g: 0, b: 0, color: 'red-ish' },
        { r: 253, g: 0, b: 0, color: 'red-ish' },
        { r: 0, g: 0, b: 255, color: 'blue-ish' },
        { r: 0, g: 0, b: 254, color: 'blue-ish' },
        { r: 0, g: 0, b: 253, color: 'blue-ish' }
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
    const batchSize = 12;
    console.log(`batchSize: Any mental state can be described as an (N)-dimensional vector of numeric activation values over neural units in a network.`)
    const epochs = 32;
    console.log(`epochs: Memory is created by modifying the strength of the connections between neural units. The connection strengths, or "weights", are generally represented as an N×N matrix.
`)
    const trainingOptions = {
        epochs,
        batchSize

    }
    nn.train(trainingOptions, finishedTraining);

    // Step 7: use the trained model
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
}

export { takeNNTask }