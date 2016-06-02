var ls = require('./ls.js');
var dirName =  process.argv[2];
var extType =  process.argv[3];

var printLog = function(error, result){
  if(!error){
  result.forEach(function(elem){
    console.log(elem);
  })
}
}

ls(dirName, extType, printLog);
