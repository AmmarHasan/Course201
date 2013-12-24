/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/10/13
 * Time: 7:52 PM
 * To change this template use File | Settings | File Templates.
 */

$(function()
{
   //alert("hello");
    $("#btn").on('click',function() {
        alert("hey");

        $.ajax({
            url:"/data"  ,
            type:"get"
        }).success(function () {
                alert("Success");
            }).error(function () {
                alert(error);
            })
    });


});