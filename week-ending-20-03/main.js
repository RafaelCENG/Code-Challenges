//kyu
//Instructions
//code

//kyu: 8
//Instructions : Complete the square sum function so that it squares each number passed into it and then sums the results together.

//code
function squareSum(numbers){
  let sum = 0;
  numbers.forEach(x => {
    sum = x * x + sum
  })
  return sum;
}

//kyu: 8
//Instructions :  Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


//code
function litres(time) {
  let drink = Math.floor(time*0.5)
  return drink;
}


//kyu: 8
//Instructions: Make a simple function called greet that returns the most-famous "hello world!".

//code
function greet(){
  return 'hello world!'
}

//kyu: 8
//Instructions: The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

//code
function century(year) {
  return Math.ceil(year/100)
}

//kyu: 7
//Given an integral number, determine if it's a square number:

//code
var isSquare = function(n){
  let rooted = Math.sqrt(n).toFixed(0)
  if(rooted * rooted === n){
    return true
  }
  else{
    return false
  }
}

//kyu: 8
//Instructions:The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//code
function basicOp(operation, value1, value2)
{
 if (operation === '+'){
   return value1 + value2
 }
  else if(operation === '-'){
    return value1 - value2
  }
  else if(operation === '*'){
    return value1*value2
  }
  else if(operation === '/')
    return value1/value2
}

//kyu: 8
//Instructions: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

//code
function isDivisible(n, x, y) {
  if(n % x === 0 && n % y === 0){
    return true
  }
  else{
    return false
  }
}

//kyu: 8
//Instructions:We need a function that can transform a string into a number. What ways of achieving this do you know?

//code
var stringToNumber = function(str){
  return Number(str)
}

//kyu: 7
//Instructions: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//code
function highAndLow(numbers){
  let num = numbers.split(" ").map(Number)
  let high = Math.max(...num)
  let lowest = Math.min(...num)
  return `${high} ${lowest}`
}

//kyu: 8
//Instructions: Write a function findNeedle() that takes an array full of junk but containing one "needle"
                // After your function finds the needle it should return a message (as a string) that says:
                // "found the needle at position " plus the index it found the needle, so: 

//code
function findNeedle(haystack) {
  if (haystack.includes('needle') === true){
    return 'found the needle at position ' + haystack.indexOf("needle")
  }
}

//kyu: 8
//Instructions: Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


//code
function maps(x){
  return x.map(i => i*2)
}

//kyu: 8
//Instructions: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

//code
function abbrevName(name){
  const words = name.split(' ')
  let firstCapital = words[0].charAt(0)
  let secondCapital = words[1].charAt(0)
  return firstCapital.toUpperCase()+'.'+secondCapital.toUpperCase()
}

//kyu: 7
//Instructions: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
              //Essentially, rearrange the digits to create the highest possible number.

//code
function descendingOrder(n){
  let numArr = Array.from(String(n),Number)
  numArr = numArr.sort((a,b) => b-a )
  return Number(numArr.join(''))
}

//kyu: 7
//Instructions: This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


//code
function accum(s) {
	let str = s.split('')
  str.forEach((x,i) => {
    str[i] = x.toUpperCase()+x.repeat(i).toLowerCase()
  })
  return  str.join('-').toString()
}

//kyu: 8
//Instructions: Convert number to reversed array of digits


//code
function digitize(n) {
  return n.toString().split("").reverse().map(i => Number(i))
}


//kyu: 8
//Instructions: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


//code
function invert(array) {
  return array.map(i => -i)
}


//kyu: 8
//Instructions: Jenny has written a function that returns a greeting for a user.
//  However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.


//code
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

//kyu: 7
//Instructions: Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.


//code
function findShort(s){
  let arr = s.split(" ")
  arr.forEach((element,i) =>{
    arr[i] = element.length
  })
  return Math.min(...arr)
}

//kyu: 7
//Instructions: Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive. The string can contain any char.


//code
function XO(str) {
  let arr = str.split("")
  let countX = 0;
  let countO = 0;
  for(let i = 0; i <arr.length; i++){
    if(arr[i].toLowerCase() === 'x' ){
      countX++
    }
    else if(arr[i].toLowerCase() === 'o'){
      countO++
    }
  }
  if(countX === countO || (countX === 0 && countO === 0)){
    return true
  }
  else{
    return false
  }
}

//kyu: 7
//Instructions: Your task is to convert strings to how they would be written by Jaden Smith.
//The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


//code
String.prototype.toJadenCase = function () {
  var str = this
  str = str.split(' ')
  for (let i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
      }
  str = str.join(" ")
  return str
};