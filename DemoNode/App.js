/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/7/13
 * Time: 8:29 PM
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
http.createServer(myfunc).listen(5000); //Listen(port)

function myfunc(req,res){
    var a=4;
    var b=5;
    var c= a+b;
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World\n = ' + c);
}
