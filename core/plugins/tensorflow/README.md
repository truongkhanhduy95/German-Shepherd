# TensorflowJS

TensorFlow.js is an open-source hardware-accelerated JavaScript library for
training and deploying machine learning models.

**Develop ML in the Browser** <br/>
Use flexible and intuitive APIs to build models from scratch using the low-level
JavaScript linear algebra library or the high-level layers API.

**Run Existing models** <br/>
Use TensorFlow.js model converters to run pre-existing TensorFlow models right
in the browser.

**Retrain Existing models** <br/>
Retrain pre-existing ML models using sensor data connected to the browser, or
other client-side data.

## Usage

1) Install packages

```console
foo@bar:~$ npm install @tensorflow/tfjs @tensorflow/tfjs-node
foo@bar:~$ npm install @tensorflow-models/mobilenet
foo@bar:~$ npm install node-fetch
```

2) Load model (MobileNet for now)

```javascript
const path = "mobilenet/model.json"
const model = new mobilenet.MobileNet(1, 1);
model.path = `file://core/plugins/tensorflow/${path}`
await model.load()
return model;
```

3) Classify image

```javascript
const ImageClassifier = require('../../core/plugins/tensorflow/image-classifier')

var results = await ImageClassifier.classify(imagePath)
```

## More about Tensorflow
  * [Tensorflow](https://www.tensorflow.org/).
  * [TensorflowJS](https://js.tensorflow.org/).

## Pre-trained model
  * MobileNetV2 (https://ai.googleblog.com/2018/04/mobilenetv2-next-generation-of-on.html)
