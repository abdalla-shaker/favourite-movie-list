let person = {
  "full name": "Abdullah Shaker",
  age: 21,
  hobby: [
    "playing minecraft",
    "playing pubg mobile",
    "playing need for speed most wanted 2005",
  ],
  address: {
    city: "albehira, cairo, egypt",
  },

  1.5: "hello, world!",
};

// console.log(person);

// to add a new object to the person object we do the following

person.isAdmin = true;

// to delete an object from the person object we do the following

delete person.address; // if we tried to access the person.address again we will not get an error instead we will get an undefined;

console.log(person);

// to print the full name of the person as you can notice it is not a word its two words which mean we need to play around it to get it printed on the screen so we need to do the following to print it.

console.log(person["full name"]);

// and so on with other objects like this example:_

// const ul = document.getElementById("movie-list");

// ul.style["display"] = "block";
// ul.style["background-color"] = "red";

console.log(person[1.5]);
