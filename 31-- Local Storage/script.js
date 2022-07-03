// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");

localStorage.setItem("firstName","ibrahim");
console.log( localStorage.getItem("firstName") );

localStorage.setItem("age", "26");

localStorage.setItem("lastName","Gezer");

const person = {
  fullName : "ibrahim Halil",
  location : "Gaziantep",
} ;

// get item from local storage 
localStorage.setItem("user", JSON.stringify(person) );

console.log(JSON.parse(localStorage.getItem("user")) );

/// remove item from local storage

localStorage.removeItem("age");

// Claer all the items from local storage 

localStorage.clear();
