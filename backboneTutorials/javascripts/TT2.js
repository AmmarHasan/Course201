/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/17/13
 * Time: 7:52 PM
 * To change this template use File | Settings | File Templates.
 */
Person = Backbone.Model.extend({
    defaults: {
        name:'Faizan',
        age: 0,
        child:'none'
    },
    intitialize: function() {
        alert("Welcome to this world");
    }
});

var person = new Person({name:"Muhammad",age:22,child:"Still none"});

var age = person.get("age");// 67
var name = person.get("name");// Muhammad
var child = person.get("child");// Still none