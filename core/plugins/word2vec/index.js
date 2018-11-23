var w2v = require('word2vec')
const Collector = require('./collector')
const Preprocessor = require('./preprocessor')

const params = {
  cbow: 1,
  size: 200,
  window: 8,
  negative: 25,
  hs: 0,
  sample: 1e-4,
  threads: 20,
  iter: 15,
  minCount: 2
}

const poolDir =  __dirname  + '/fixtures/wordspool.txt';
const modelDir =  __dirname  +'/fixtures/vectors.txt';

const fs = require('fs');

const makeDirIfNotExist = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

const train = (cb) => {
  Preprocessor.createFixtures(poolDir, modelDir, () => {
    w2v.word2vec(poolDir, modelDir, params, cb)
  })
};

const loadModel = (cb) => {
  Preprocessor.createFixtures(poolDir, modelDir, () => {
    w2v.loadModel(modelDir, cb)
  })
};
const collect = (tokens, cb) => {
  Preprocessor.createFixtures(poolDir, modelDir, () => {
    Collector.collect(tokens, poolDir, cb)
  })
};

module.exports = {
  train : train,
  loadModel : loadModel,
  collect : collect
}
