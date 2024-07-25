/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i == nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (i === words.length) return 0;
  let curr_length = words[i].length;
  let max_length = longest(words, i + 1);
  if (curr_length > max_length) {
    return curr_length;
  }
  return max_length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  //if i current char is greater than or equal to str length return empty
  if (i >= str.length) return "";
  //return str at tht char idx plus recurision callback with str and i+2 to skip every other
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  //if i  is greater or equal to the length of str divided by 2
  if (i >= str.length / 2) return true;
  //check if str char at index is not equal to the end of the str char index
  if (str[i] !== str[str.length - 1 - i]) return false;

  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  //if i index is greater than or = to the length of the arr return -1
  if (i >= arr.length) return -1;
  //if arr val at that index  is equal to the val return that index
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  //if str reverse it
  if (str) return str.split("").reverse().join("");
  return revString(str, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

//function gatherStrings(obj,i=0) {
// let arr = []
//
// for(let key in obj){
//  const val = obj[key]
//  console.log("val at index i",val[i])
//  if(typeof val[i] === "string"){
//    arr.push(val)
//    (gatherStrings(val))
//  }
//  else{
//    return -1
//  }
//
//
// }
// return arr
//}

function gatherStrings(obj) {
  let arr = [];
  function helper(innerObj) {
    for (let key in innerObj) {
      const val = innerObj[key];
      if (typeof val === "string") {
        arr.push(val);
      } else if (typeof val === "object" && val !== null) {
        helper(val);
      }
    }
  }
  helper(obj);
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val,left = 0,right = arr.length-1) {
  //index 0
  //last index or -1
  //let right = arr.length-1
  //gets middle index
  let middle = Math.floor((left+right)/2)
  if(left>right){
    return -1
  }
  //return it if its the middle num
  if(arr[middle]===val){
    return middle
    //search right half to middle
  }else if(arr[middle]<val){
    return binarySearch(arr,val,middle+1,right)
    //search left half if not middle
  }else{
    return binarySearch(arr,val,left,middle-1)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
