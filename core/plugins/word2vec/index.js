var w2v = require('word2vec')
const Collector = require('./collector')

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

const train = (cb) => w2v.word2vec(poolDir, modelDir, params, cb);
const loadModel = (cb) => w2v.loadModel(modelDir, cb);
const collect = (tokens, cb) => Collector.collect(tokens, poolDir, cb);

module.exports = {
  train : train,
  loadModel : loadModel,
  collect : collect
}
