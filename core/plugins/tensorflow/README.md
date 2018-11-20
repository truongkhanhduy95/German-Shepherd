# TensorflowJS
https://github.com/truongkhanhduy95/German-Shepherd/tree/features/TensorflowJS-integration/core/plugins/tensorflow

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
}
```

3) Classify image

```javascript
const ImageClassifier = require('../../core/plugins/tensorflow/image-classifier')

var results = await ImageClassifier.classify(imagePath)
}
```

## More about Tensorflow
  * [Tensorflow](https://www.tensorflow.org/).
  * [TensorflowJS](https://js.tensorflow.org/).

## Pre-trained model
  * [MobileNetV2] (https://ai.googleblog.com/2018/04/mobilenetv2-next-generation-of-on.html)
