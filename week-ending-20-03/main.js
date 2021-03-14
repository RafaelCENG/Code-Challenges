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