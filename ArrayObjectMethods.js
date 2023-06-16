// let array = ["a", "b", "c", "d", "a", "b", 1, 2];

// if the second value is 0 it means add , if index is added it refers to the number of items to be removed from the array
// this remove three items starting from index 2 and add honey and bee
// array.splice(2, 3, "Honey", "Bee");

//this means add honey and bee starting from index 2
// array.splice(2, o, "Honey", "Bee");
// let num = [1, 2, 3, 4];

// function getSum(arr) {
//   return arr.reduce((acc, curr) => (acc += curr), 0);
// }
// const sumOfAnArray = getSum(num);
// console.log("this is the updatecd array", num);


const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}


console.log(text);
