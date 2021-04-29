// kyu 8:
// Title: Mr. Freeze

//code:
Object.freeze(MrFreeze)

// kyu 8:
// Title: Printing Array elements with Comma delimiters

//code:
function printArray(array){
    return array.join(',')
}


// kyu 8:
// Title: To square(root) or not to square(root)

//code:
function squareOrSquareRoot(array) {
    const arr1 = array.map(el => Math.sqrt(el) % 1 === 0 ? Math.sqrt(el) : Math.pow(el,2))
    return arr1
}


// kyu 8:
// Title: FIXME: Replace all dots

//code:
var replaceDots = function(str) {
    return str.replace(/\./g,'-');
}


// kyu 8:
// Title: What is between?

//code:
function between(a, b) {
    let arr = []
    for (let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
}

// kyu 8:
// Title: Kata Example Twist

//code:
// add the value "codewars" to the websites array 1,000 times
let websites = []
websites = Array(1000).fill('codewars')


// kyu 8:
// Title: Convert to Binary

//code:
function toBinary(n){
    let arr = []
    while (n > 0) {
      if(n % 2 === 0){
        arr.push(0)
      }
      else{
        arr.push(1)
      }
      n = Math.floor(n / 2)
    }
    return Number(arr.reverse().join(""))
}


// kyu 8:
// Title: Sum The Strings

//code:
function sumStr(a,b) {
    return (Number(a) + Number(b)).toString()
}


// kyu 8:
// Title: Exclamation marks series #1: Remove a exclamation mark from the end of string

//code:
function remove(s){ 
    s = s.split('')
    if(s[s.length-1] === '!'){
      s.pop(s.length-1)
    }
    return s.join('')
}


// kyu 8:
// Title: Thinkful - Number Drills: Pixelart planning

//code:
function isDivisible(wallLength, pixelSize){
    return wallLength % pixelSize === 0 ? true : false
}

// kyu 8:
// Title: Grasshopper - Basic Function Fixer

//code:
function addFive(num) {
  var total = num + 5
  return total
}