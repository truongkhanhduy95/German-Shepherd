const fs = require('fs');

const makeDirIfNotExist = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

exports.createFixtures = (pool,model, cb) => {
  makeDirIfNotExist(pool)
  makeDirIfNotExist(model)
  cb()
}