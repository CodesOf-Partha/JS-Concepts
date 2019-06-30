/*

<================== ARROW FUNCTION ==================>
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/
var group = [
  "Parthasarathi",
  "Aravind",
  "Dhiraj",
  "Shashikanth",
  "Joshua",
  "Farhan"
];

group.map(function(member) {
  return member.length;
}); // this statement returns the array: [13, 7, 6, 11, 6, 6]

// The regular function above can be written as the arrow function below
group.map(member => {
  return member.length;
}); // [13, 7, 6, 11, 6, 6]

// When there is only one parameter, we can remove the surrounding parentheses:
group.map(member => {
  return member.length;
}); // [13, 7, 6, 11, 6, 6]

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
group.map(member => member.length); // [13, 7, 6, 11, 6, 6]

// In this case, because we only need the length property, we can use destructuring parameter:
// Notice that the `length` corresponds to the property we want to get whereas the
// obviously non-special `lengthGroupMember` is just the name of a variable which can be changed
// to any valid variable name you want
group.map(({ length: lengthGroupMember }) => lengthGroupMember); // [13, 7, 6, 11, 6, 6]

// This destructuring parameter assignment can also be written as seen below. However, note that in
// this example we are not assigning `length` value to the made up property. Instead, the literal name
// itself of the variable `length` is used as the property we want to retrieve from the object.
group.map(({ length }) => length); // [13, 7, 6, 11, 6, 6]

/*

<================== CONSTRUCTOR ==================>
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

*/

class ZenClass {
  constructor() {
    this.name = "Zen Class Students";
  }
}
var partha = new ZenClass();
console.log(partha.name);
// Output = Zen Class Students

/*

<================== Prototype ==================>
Reference: https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

Why prototype?
Every object created using the constructor function will have its own copy of properties and methods. 
It doesn’t make sense to have two instances of function fullName that do the same thing. 
Storing separate instances of function for each object results into wastage of memory. To overcome this only prototypes comes into play.

What is prototype?
When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. 
This prototype property is an object (called as prototype object) which has a constructor property by default. 
The constructor property points back to the function on which prototype object is a property. 
We can access the function’s prototype property using functionName.prototype.

*/
//Example 1
function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("Parthasarathi", " RV");
var person2 = new Human("Aravindh", " B");

console.log(person1)
console.log(person2)
console.log(Human.prototype)

console.log("Human.prototype === person1.__proto__ = "+(Human.prototype === person1.__proto__))

console.log("person2.__proto__ === person1.__proto__ = "+(person2.__proto__ === person1.__proto__))
//Above statement proves that the person1’s and person2’s dunder proto properties point to Human constructor function’s prototype object.
//A strict comparison (e.g., === ) is only true if the operands are of the same type and the contents match. 

//Continue of Example 1
//Prototype object 
Human.prototype.name = "Dhiraj";
console.log(Human.prototype.name)//Output: Dhiraj

//Square bracket notation
Human.prototype["age"] = 21;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);



//Example 2
//Create an empty constructor function
function Person(){

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Joshua" ;
Person.prototype.age = 21;
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create an object using the Person constructor function
var per1 = new Person();
var per2 = new Person();

//Access the name property using the person object
console.log(per1)
console.log(per1.name)// Output Joshua

console.log(per1.name);//Output: Joshua
console.log(per2.name);//Output: Joshua

per2.name = "Shashikanth"

console.log(perosn1.name);//Output: Joshua
console.log(person2.name);//Output: Shashikanth

per2.name = "Farhan"
console.log(person2.name);//Output: Farhan
/*
How joshua?
when per1.name is called, JavaScript engine checks if the property exists on the per1 object. 
In this case, name property was not on the per1’s object. 
So, now JavaScript engine checks if the name property exists on the dunder proto property or the prototype of the per1’s object. 
This chain continues until the dunder proto property is null. In these cases, the output will be undefined.
In this cases, name property was there on the dunder proto property (__proto__) or the prototype of per1’s object. 
Hence, the output was returned “Joshua”. 
*/