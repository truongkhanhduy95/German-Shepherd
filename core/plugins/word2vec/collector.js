const fs = require('fs');

// tags: "tag1, tag2, tag_3"
exports.collect = async (tokens, pool, cb) => {

  // Check if model not created yet
  if (await !fs.existsSync(pool)) {
    await fs.mkdirSync(pool);
  }

  // Create word phases
  var array = tokens.split(', ');
  array = array.map(item => {
    if(item){
      item = item.trim();
      item = item.split(' ').join('_');
      return item;
    }
  })

  // Push token to pool
  fs.writeFile(pool, array.join(' '), function(err) {
    if(err) return console.log(err);
    console.log("Model file was saved!"); 
    cb()
  }
)}; 