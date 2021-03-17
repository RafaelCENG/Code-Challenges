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