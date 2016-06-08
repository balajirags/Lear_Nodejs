var http = require('http');
var fs = require('fs');
var map = require('through2-map')
var url = require('url')


var port = process.argv[2];
var file = process.argv[3];


     var server = http.createServer(function (req, res) {

       var reqUrl = url.parse(req.url, true);
       var iso = reqUrl.query.iso;
       var date = new Date(iso);
       if(reqUrl.pathname === "/api/parsetime"){
         console.log("1");
         res.writeHead(200, { 'Content-Type': 'application/json' })
         res.write(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}))
         res.end();
      }else if(reqUrl.pathname === "/api/unixtime" ){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({unixtime: date.getTime()}))
        res.end();
      }

     })
     server.listen(port);
