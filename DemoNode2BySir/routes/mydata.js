



exports.showData = function (req,res){
    res.render('mydata')
}


exports.getData = function (req,res){
    console.log("Hello server");
    res.send("Hello from server");
}

exports.getMoreData = function (req,res){
    console.log("Hello server");
    res.send({name:"Muhammad",age:23});
}
exports.getMoreData1 = function (req,res){

    console.log(">>>>>>>>>>> "+req.body.name);
    console.log(">>>>>>>>>>> "+req.body.age);
    res.send({name:"second",age:2323});
}


