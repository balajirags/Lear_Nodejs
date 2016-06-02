var http = require('http');
var concat = require('concat-stream');
var async = require('async');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];
var urls = [urlOne, urlTwo, urlThree];

function downloadData(taskCallback){
  async.forEachSeries(urls, function(url, callback){
    http.get(url, function(res){
      res.setEncoding('utf8');
      res.pipe(concat(function(data){
        var responseData = data.toString();
        taskCallback(null, responseData);
        callback();
      }));
    })
  }, function(err){
  });
}

function printLog(err, data){
  console.log(data);
}

downloadData(printLog);
