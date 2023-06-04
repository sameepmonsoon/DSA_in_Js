var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

var result = isPalindrome(121);
console.log(result);
