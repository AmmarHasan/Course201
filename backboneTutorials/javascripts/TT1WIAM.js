/**
 * Created with JetBrains WebStorm.
 * User: Muhammad
 * Date: 12/17/13
 * Time: 7:43 PM
 * To change this template use File | Settings | File Templates.
 */
alert("Here");
Person = Backbone.Model.extend({
    initialize: function() {
        alert("welcome to this world") ;
    }
});

var person = new Person;
// or we can set afterwards, these operations are equivalent

var person = new Person();
person.set({name:"Thomas", age:67, child: 'Ryan'});


var age = person.get("age"); // 67
var name = person.get("name"); // "Thomas"
var child = person.get("child"); // 'Ryan'