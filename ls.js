var fs = require('fs')
var _ = require('lodash')

var result = [];
var listFilesByExt = function(dirName, ext, callback){
  fs.readdir(dirName, function(err, items){
      if(err){
        return callback(err)
      }
     _.forEach(items, function(elem){
      if(_.endsWith(elem, "."+ ext)){
        result.push(elem);
      }
    });
    console.log(callback.name)
    callback(null, result);
  })
}

module.exports = listFilesByExt;
