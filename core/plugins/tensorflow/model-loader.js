global.fetch = require('node-fetch')

const mobilenet = require('@tensorflow-models/mobilenet')

const loadMobileNet = async() => { 
  //TODO: Load from json/weights
  // return await mobilenet.load();
  const path = "mobilenet/model.json"
  const model = new mobilenet.MobileNet(1, 1);
  model.path = `file://core/plugins/tensorflow/${path}`
  await model.load()
  return model;
}


module.exports.loadMobileNet = loadMobileNet;