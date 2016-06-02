var http = require('http');
var concat = require('concat-stream');
var async = require('async');
var ls = require('./ls.js');

var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];
var urls = [urlOne, urlTwo, urlThree];

/*async.forEachSeries(urls, function(url, callback){
    http.get(url, function(res){
      res.setEncoding('utf8');
      res.pipe(concat(function(data){
        var responseData = data.toString();
        console.log(responseData);
      }));
    })
  }, function(err){
    if(err){
      return next(err)
    }
  })*/
function callSync(taskCallback){
  async.forEachSeries(urls, function(url, callback){
    console.log(url);
    ls(url, 'iml', taskCallback);
    callback();
  }, function(err){
    if(err){
      console.log(err);
      return next(err);
    }
  })
}

function printLog(err, data){

  console.log(data);
}

callSync(printLog);
