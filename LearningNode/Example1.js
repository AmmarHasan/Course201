/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/16/13
 * Time: 11:00 PM
 * To change this template use File | Settings | File Templates.
 */
//Load http module
var http = require('http');

//create http server
http.createServer(function(req,res){
    // content header
    res.writeHead(200,{'content-type': 'text/plain'});

    // write message and signal communication is complete
    res.end("This Is Example one on Page 10");

}).listen(3000);

console.log("server is running on 3000");