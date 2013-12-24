/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/12/13
 * Time: 6:21 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    //alert("Its working");
    $("#btn").on("click", function (){
        //alert("Hello World");

         $.ajax({
         url:"/data",
         type:"get"

         })
         .success(function(response){
                console.log('success');
                alert(response);
                $("#data").html(response);

            })
            .error(function() {
            console.log("error from #btn");
            })
    })

         $("#btnMore").on("click", function() {
         //alert("Hello World");

         $.ajax({
         url:"/moredata",
         type:"get"

         })
         .success(function(response){
         console.log('success');
         alert(response);
         $("#data").html(response.name);

         })
         .error(function() {
         console.log("error");
         })
         })


         $("#btnPost").on("click", function() {
             var abc = $('#myname').val();
             //alert(abc);
             $.ajax({
                url:"/moredata1",
                type:"post",
                data: {name: abc, age:11}
            })
                .success(function(response){
                    $("#data").html(response.name);
                })
                .error(function(){
                    console.log("Error from btnPost");
                })
         })
});