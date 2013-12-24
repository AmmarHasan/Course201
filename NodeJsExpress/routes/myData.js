/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/10/13
 * Time: 7:45 PM
 * To change this template use File | Settings | File Templates.
 */
exports.showData = function (req,res){
    res.render('myData');
};

exports.getData = function (req,res){
    res.render('myData',{name: "data"});
}