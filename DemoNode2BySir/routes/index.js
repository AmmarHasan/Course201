
/*
 * GET home page.
 */

exports.index = function(req, res){
    //
    var abc = "a";////////;
  res.render('index', { title: abc});
};