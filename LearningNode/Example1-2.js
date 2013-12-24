/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/17/13
 * Time: 6:30 PM
 * To change this template use File | Settings | File Templates.
 */
//load http module
var http = require('http');
var fs = require('fs');

// create http server
http.createServer(function(req,res){

    // open and read in helloworld.js
    fs.readFile('Example1.js','utf-8',function(err, data){

        res.writeHead(200,{'Content-Type':'text/plain'});
        if(err)
            res.write('Could Not find or open file for reading ]n');
        else
            // if no error, write JS file to client
            res.write(data);

        res.end();
    });
}).listen(8214, function() {
        console.log('Bound to port 8214');
    });

console.log('server running on 8214/');