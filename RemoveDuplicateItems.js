let array = ["a", "b", "c", "d", "a", "b", 1, 2,1,2,1];

function removeSame(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
const updatedArray = removeSame(array);
console.log("this is the updatecd array", updatedArray);
