var fs = require('fs')
var fileName =  process.argv[2];

function readFile(callback){
  fs.readFile(fileName, function(err, fileContents){
    var str = fileContents.toString();
    var lineCount  = str.split('\n');
    var counter = lineCount.length - 1
    callback(counter);
  });
}

function printLog(result){
  console.log(result);
}

readFile(printLog);
