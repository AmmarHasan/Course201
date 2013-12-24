
$(function (){

    $("#btn").on("click",function (){
        alert("Hello world ");

        $.ajax({
            url:"/data",
            type:"get"
        })
        .success(function (response){
            alert("success");
            alert(response);
            $("#data").html(response);
        })
            .error(function (){
                alert("error");
            })
    })


    $("#btnMore").on("click",function (){
        $.ajax({
            url:"/moredata",
            type:"get"
        })
            .success(function (response){
                $("#data").html(response.name);
            })
            .error(function (){
                alert("error ");
            })
    })


    $("#btnPost").on("click",function (){
        var aName = $("#myname").val();
        $.ajax({
            url:"/moredata1",
            type:"post"  ,
            data: {name:aName,age:34}
        })
            .success(function (response){
                $("#data").html(response.name);
            })
            .error(function (){
                alert("error ");
            })
    })


});
