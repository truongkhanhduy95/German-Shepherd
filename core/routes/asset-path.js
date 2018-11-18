'use strict';
const { classify } = require('../plugins/tensorflow/model-loader')

module.exports = function (app) {
  let path = require('path');
  //Create extra path here..

  /**
   * LOAD TENSORFLOW MODEL
   */
  app.get('/tensorflow/mobilenet',
    async (req, res, next) => {
      // do something with req
      const result = await classify('./storage/image.jpg');
      res.status(200).send(result)
    }
  );
};