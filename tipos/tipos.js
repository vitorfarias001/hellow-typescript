"use strict";
//strings
var names = 'Vitor';
console.log(names);
//numbers
var age = 22;
//age  = 'Vitor'
age = 22.1;
console.log(age);
//boolean
var possesHobbies = false;
//possesHobbies = 1
console.log(possesHobbies);
//Explicit Types
var myAge;
myAge = 22;
console.log(typeof myAge);
console.log(typeof myAge);
//array
var hobbies = ['Cook , Games'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuples
var address = ["Maria Julia da luz", 502];
console.log(address);
// Enums
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 100] = "green";
    color[color["gray"] = 10] = "gray";
    color[color["blue"] = 11] = "blue";
    color[color["yellow"] = 12] = "yellow";
    color[color["black"] = 100] = "black";
})(color || (color = {}));
var myColor = color.green;
console.log(myColor);
console.log(color.gray);
console.log(color.blue, color.yellow);
console.log(color.green, color.black);
// any
var car = 'Jaguar';
console.log(car);
car = { brand: 'Jaguar', age: 2021 };
console.log(car);
//functions
function returnMyNames() {
    return names;
}
console.log(returnMyNames);
function sayHi() {
    console.log('Hi');
}
sayHi();
//Functions as Types
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(4, 7));
//function types 
var calculate;
calculate = sayHi;
calculate();
calculate = multiply;
console.log(calculate(5, 6));
//objects
var user = {
    names: 'Vitor',
    age: 22
};
console.log(user);
user = {
    age: 22,
    names: 'Vitor'
};
console.log(user);
