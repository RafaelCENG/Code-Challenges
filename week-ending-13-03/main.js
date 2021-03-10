//kyu
//Instructions
//code

// kyu 8:
// Instructions: You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

//code:
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if (arr[i] > 0){
        sum = sum + arr[i]
      }
    }
      if(sum === 0){
        return 0
      }
    else
      return sum
  }


// kyu 8:
// Instructions: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//code:
function makeNegative(num) {
    if (num > 0){
      num = -num
    }
    return num
  }


//kyu 8:
//Instructions We need a function that can transform a number into a string.

//code:
function numberToString(num) {
    return num.toString()
  }


//kyu 8:
//Convert boolean values to strings 'Yes' or 'No'.

//code:
function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}


//kyu 8:
//Remove First and Last Character

//code:
function removeChar(str){
  str = str.slice(1,-1)
   return str
 };
 
 
//kyu 8:
//Find the smallest integer in the array

//code:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
 
//kyu 7:
//Your task is to write a function that takes a string and return a new string with all vowels removed.

//code:
function disemvowel(str) {
  str = str.replace(/[aAeEuUoOiI]/g,'')
  return str;
}


//kyu 7:
//You are going to be given a word. Your job is to return the middle character of the word.
//  If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


//code:
function getMiddle(s)
{
  if(s.length % 2 === 0){
    return s.charAt((s.length/2-1))+''+s.charAt((s.length/2))
  }
  else
    return s.charAt(Math.ceil(s.length/2-1))
}