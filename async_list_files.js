var fs = require('fs')
var _ = require('lodash')
var dirName =  process.argv[2];
var extType =  "."+process.argv[3];
var result = [];

var printLog = function(result){
  _.each(result, function(elem){
    console.log(elem);
  })
}


var listFiles = function(dirName, ext, callback){
  fs.readdir(dirName, function(err, items){
     _.forEach(items, function(elem){
      if(_.endsWith(elem, ext)){
        result.push(elem);
      }
    });
    callback(result);
  })
}

listFiles(dirName, extType, printLog);
