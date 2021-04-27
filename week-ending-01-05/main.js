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