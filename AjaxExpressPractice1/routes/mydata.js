/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/11/13
 * Time: 10:58 AM
 * To change this template use File | Settings | File Templates.
 */
exports.showData = function (req,res){
    res.render('mydata')
}

exports.getData = function (req,res){
    console.log('Hello from getData');
    res.send('Hello from Server');
}

exports.getMoreData = function (req,res){
    console.log("Hello from getMoreData");
    res.send({name:"Muhammad",age:23});
}
exports.getMoreData1 = function (req,res){
    console.log("Hello from getMoreData1");
    console.log(req.body.name);
    console.log(req.body.age);
    allCapital = function(word){
        return word.toUpperCase();
    };
    var allCap = allCapital(req.body.name);
    res.send({name:allCap,age:55});
}