// kyu 8:
// Title: Find numbers which are divisible by given number

//code:
function divisibleBy(numbers, divisor){
    let arr = []
    for(let i = 0; i < numbers.length; i++){
      if (numbers[i] % divisor === 0){
        arr.push(numbers[i])
      }
    }
    return arr
  }

// kyu 8:
// Title: Unfinished Loop - Bug Fixing #1

//code:
function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  return newArray;
}

// kyu 8:
// Title: Remove exclamation marks

//code:
function removeExclamationMarks(s) {
  return s.replace(/!/g,"")
}

// kyu 8:
// Title: Is the string uppercase?

//code:
String.prototype.isUpperCase = function() {
  return this === '' ? undefined : this == this.toUpperCase() ? true : false
}

// kyu 8:
// Title: Double Char

//code:
function doubleChar(str) {
  let array = str.split('')
  let double = []
  for(let i = 0; i < array.length; i++){
    double.push(array[i],array[i])
  }
  return double.join('')
}


// kyu 8:
// Title: Function 2 - squaring an argument

//code:
square = (n) =>{
  return n*n
}

// kyu 8:
// Title: Opposites Attract

//code:
function lovefunc(flower1, flower2){
  return flower1 % 2 === 0 && flower2 % 2 === 1 ? true : flower1 % 2 === 1 && flower2 % 2 === 0 ? true : false
}

// kyu 8:
// Title: N-th Power

//code:
function index(array, n){
  return  n < array.length ? Math.pow(array[n],n) : -1
}

// kyu 8:
// Title: Removing Elements

//code:
function removeEveryOther(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i])
    i++
  }
  return newArr
}


// kyu 8:
// Title: Parse nice int from char problem

//code:
function getAge(inputString){
  let arr = inputString.split(' ')
  return Number(arr[0])
}

// kyu 8:
// Title: Count Odd Numbers below n

//code:
function oddCount(n){
  return n % 2 === 0 ? n/2 : (n-1)/2
}

// kyu 8:
// Title: The Feast of Many Beasts

//code:
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] ? true : false
 }

// kyu 8:
// Title: Stringy Strings

//code:
function stringy(size) {
  if (size > 1 && size % 2 === 0){
    return '10'.repeat(size/2)
  }
  else if(size > 1 && size % 2 === 1){
    return '10'.repeat(size/2) + '1'
  }
  else{
    return '1'
  }
}

// kyu 8:
// Title: Number toString

//code:
var a = '123'.toString();


// kyu 8:
// Title: Watermelon

//code:
function divide(weight){
  return weight > 2 ? weight % 2 === 0 ? true : false : false
}

// kyu 8:
// Title: Switch it Up!

//code:
function switchItUp(number){
  let numbers = {
    0 : 'Zero',
    1 : 'One',
    2 : 'Two',
    3 : 'Three',
    4 : 'Four',
    5 : 'Five',
    6 : 'Six',
    7 : 'Seven',
    8 : 'Eight',
    9 : 'Nine'
  }
      return numbers[number];
 }

// kyu 8:
// Title: Is it even?

//code:
function testEven(n) {
  return n % 2 === 0 ? true : false
}

// kyu 8:
// Title: Quarter of the year

//code:
const quarterOf = (month) => {
  return month > 3 ? Math.ceil(month/3) : 1
}

// kyu 8:
// Title: Grasshopper - Debug sayHello

//code:
function sayHello(name) {
  return 'Hello, ' + name
}

// kyu 8:
// Title: Correct the mistakes of the character recognition software

//code:
function correct(string)
{
  let arr = string.split('')
	for(let i = 0; i < arr.length; i++){
    if (arr[i] === '5'){
      arr[i] = 'S'
    }
    else if(arr[i] == '0'){
     arr[i] = 'O'
    }
    else if(arr[i] == '1'){
     arr[i] = 'I'
    }
  }
  return arr.join('')
}

// kyu 8:
// Title: I love you, a little , a lot, passionately ... not at all

//code:
const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] 
}
