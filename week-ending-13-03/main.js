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