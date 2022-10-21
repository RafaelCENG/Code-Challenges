// kyu 8:
// Title: Basic variable assignment

//code:
var a = "code";
var b = "wa.rs";
var name = a + b;

// kyu 8:
// Title: Difference of Volumes of Cuboids

//code:
function findDifference(a, b) {
    return Math.abs(b.reduce((acc,curr) => acc*curr,1) - a.reduce((acc,curr) => acc*curr,1))
}


// kyu 8:
// Title: Squash the bugs

//code:
function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (let i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
      return longest
}


// kyu 8:
// Title: Keep up the hoop

//code:
function hoopCount (n) {
    return n >= 10 ? 'Great, now move on to tricks' : "Keep at it until you get it"
}


// kyu 8:
// Title: All Star Code Challenge #18

//code:
function strCount(str, letter){  
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] === letter){
        count++
      }
    }
    return count
}


// kyu 8:
// Title: Exclusive "or" (xor) Logical Operator

//code:
function xor(a, b) {
    if(a === true && b === true){
      return false
    }
    else if(a === true || b === true){
      return true
    }
    else{
      return false
    }
}


// kyu 8:
// Title: Regular Ball Super Ball

//code:
var Ball = function(ballType) {
    return this.ballType = ballType || 'regular'
};

// kyu 8:
// Title: Area or Perimeter

//code:
const areaOrPerimeter = function(l , w) {
  return l === w ? l*w : (l+w)*2
};

// kyu 8:
// Title: Filling an array (part 1)

//code:
function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){ //const arr = n => Array.from({length: n}, (_, i) => i);
    newArr.push(i);
  }
  return newArr;
}


// kyu 8:
// Title: How many lightsabers do you own?

//code:
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}

// kyu 8:
// Title: Grasshopper - If/else syntax debug

//code:
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}


// kyu 8:
// Title: Sort and Star

//code:
function twoSort(s) {
  s.sort()
  let str = []
  for(let i = 0; i < s[0].length; i++){
    str.push(s[0][i]+"***")
  }
  str.pop()
  str.push(s[0][s[0].length-1])    ///return s.sort()[0].split('').join('***');
  console.log(str)
  return str.join('')
}

// kyu 8:
// Title: Filter out the geese

//code:
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let arr = []
  for(let i = 0; i < birds.length; i++){
    if(geese.includes(birds[i])){}        //  return birds.filter(b => !geese.includes(b));
    else{
        arr.push(birds[i])
    }
  }
  return arr
};


// kyu 8:
// Title: Thinkful - Logic Drills: Traffic light

//code:
function updateLight(current) {
  return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

// kyu 8:
// Title: Grasshopper - Terminal game move function

//code:
function move (position, roll) {
  return position + roll*2
}


// kyu 8:
// Title: Get Nth Even Number

//code:
function nthEven(n){
  return (n-1) * 2
}


// kyu 8:
// Title: Generate range of integers

//code:
function generateRange(min, max, step){
  let arr = []
  let i = min;
  while(min <= max){
    arr.push(i)
    min = min + step
    i = min
  }
  return arr
}

// kyu 8:
// Title: Palindrome Strings

//code:
function isPalindrome(line) {
  let linePal = line.toString().split('').reverse().join("")
  return String(line) === linePal ? true : false
}

// kyu 8:
// Title: Dollars and Cents

//code:
function formatMoney(amount){
  return "$"+`${amount.toFixed(2)}`
}

// kyu 8:
// Title: Simple Fun #1: Seats in Theater

//code:
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1) * (nRows - row)
}

// kyu 8:
// Title: get character from ASCII Value

//code:
function getChar(c){
  let str = String.fromCharCode(c)
  return str
}

// kyu 8:
// Title: Holiday VIII - Duty Free

//code:
function dutyFree(normPrice, discount, hol){
  return  Math.trunc(hol / (normPrice * discount/100))
}

// kyu 8:
// Title: Grasshopper - Debug

//code:
function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c <= 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature -32 ) * (5/9)
  return celsius
}

// kyu 8:
// Title: Twice as old

//code:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld/2 >= sonYearsOld ? dadYearsOld - sonYearsOld*2 : sonYearsOld*2 - dadYearsOld
}

// kyu 8:
// Title: Grasshopper - Check for factor

//code:
function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false
}

// kyu 8:
// Title: Remove duplicates from list

//code:
function distinct(a) {
  return [...new Set(a)];
}

// kyu 8:
// Title: Surface Area and Volume of a Box

//code:
function getSize(width, height, depth){
  let arr = []
  arr.push(2 * (height * width) + 2 * (height * depth) + 2 * (width * depth) )
  arr.push(width * height * depth)
  return arr
}


// kyu 8:
// Title: Hello, Name or World!

//code:
function hello(name) {
  if(name != null && name != ""){
     name = name.toLowerCase()
     name = name.charAt(0).toUpperCase() + name.slice(1)
     return `Hello, ${name}!`
  } else {
    return 'Hello, World!'
  }
}

// kyu 8:
// Title: Is this my tail?

//code:
function correctTail(body, tail){
  let sub = body.substring(body.length-tail.length)
  if (sub === tail){
    return true
  }
  else {
        return false
  } 
}