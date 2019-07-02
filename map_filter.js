/* 

<============================== MAPS ==============================>
Reference: http://javascript.info/map-set-weakmap-weakset
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

The main methods are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.

*/

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1) ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.size ); // 3
console.log( map.has(1) );
console.log(map);
console.log( map.delete(1) );
console.log( map.size );
console.log(map);
console.log(map.keys())
console.log(map.values())

/*
Using objects as keys is one of most notable and important Map features. 
For string keys, Object can be fine, but it would be difficult to replace the Map with a regular Object.
*/

let Partha = { name: "partha" , class: "Zen Class" };
let dhiraj = {name: "Dhiraj"}
// for every user, let's store their friend
let friend = new Map();
// john is the key for the map
friend.set(Partha, "Aravindh");
friend.set(dhiraj, "Farhan");
friend.set(Partha.class, "For 3 months");
console.log( friend.get(Partha) ); // Aravindh
console.log( friend.get(dhiraj) ); // Farhan
console.log( friend.get(Partha.class) );
console.log(friend);

/*
Iteration over map 

For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }

  // runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });

  //still weakMap is there which will be done after garbage collection

  /*

  <============================== FILTER ==============================>

  */
// To display greater than 17
 var ages = [32, 33, 16, 40];

 function checkAdult(age) {
   return age >= 18;
 }
 
 function myFunction() {
   document.getElementById("demo").innerHTML = ages.filter(checkAdult);
 }

// PowerArray
 class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  
    // built-in methods will use this as the constructor
    static get [Symbol.species]() {
      return Array;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  alert(arr.isEmpty()); // false
  
  // filter creates new array using arr.constructor[Symbol.species] as constructor
  let filteredArr = arr.filter(item => item >= 10);
  
  // filteredArr is not PowerArray, but Array
  alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function