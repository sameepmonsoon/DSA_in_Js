var longestCommonPrefix = function (strs) {
  var commonPrefix = [];
  console.log(strs.length);
  for (let i = 0; i < strs.length; i++) {
    var currentString = strs[i].split("");
    var k = i+1
    if (k < strs.length) {
        nextString = strs[k].split("");
      }
    for (let j = 0; j <= k; j++) {
      if (nextString && currentString[j] === nextString[j]) {
        commonPrefix.push(currentString[j]);
      } else {
        break;
      }
    }
  }
  return commonPrefix;
};

var result = longestCommonPrefix(["aalu", "aaluchop", "aaludum"]);
console.log("this is result", result);
