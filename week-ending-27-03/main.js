//kyu: 8
//Instructions : Return the average of the given array rounded down to its nearest integer.

//code
function getAverage(marks){
    return Math.floor(marks.reduce((acc,curr) => acc + curr)/marks.length)
  }


//kyu: 8
//Instructions : A hero is on his way to the castle to complete his mission. However,
//he's been told that the castle is surrounded with a couple of powerful dragons!
//each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
//Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)

//code
function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true : false
  
  }

//kyu: 8
//Instructions : Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

//code
function countPositivesSumNegatives(input) {
    let arr = []
    let positives = 0
    let negatives = 0
    if(input === null){
      return arr
    }
    else if (input.length === 0){
      return arr
    }
  else{
     for (let i=0; i<input.length; i++){
      if(input[i] > 0){
        positives++
      }
      else if(input[i] < 0){
        negatives += input[i]
      }
    }
    arr.push(positives,negatives)
    return arr
  }
}


//kyu: 8
//Instructions : As a good parent, you will sit and count with him.
//  Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//code
function monkeyCount(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr
  }



//kyu: 8
//Instructions :Code as fast as you can! You need to double the integer and return it.

//code
function doubleInteger(i) {
    return i * 2
  }

//kyu: 8
//Instructions :Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

//code
function past(h, m, s){
    //#Happy Coding! ^_^
    return   h * 3600000 + m * 60000 + s * 1000
  }


//kyu: 8
//title : Returning Strings

//code
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//kyu: 8
//title : Sum Arrays

//code
function sum (numbers) {
  return numbers.reduce((acc,curr) => acc + curr,0) 
};

//kyu: 8
//title : Convert a Boolean to a String

//code
function booleanToString(b){
  return b.toString()
}

//kyu: 8
//title : Reversed Words

//code
function reverseWords(str){
  return str.split(' ').reverse().join(' ') // reverse those words
}


//kyu: 8
//title : Array plus array

//code
function arrayPlusArray(arr1, arr2) {
  let reducer1 = arr1.reduce((acc,curr) => acc + curr,0)
  let reducer2 = arr2.reduce((acc,curr) => acc + curr,0)
  return reducer1 + reducer2
}


//kyu: 8
//title : Do I get a bonus?

//code
function bonusTime(salary, bonus) {
  return  (bonus ? "\u00A3"+salary*10 : "\u00A3"+salary)
}

//kyu: 8
//title : Fake Binary

//code
function fakeBin(x){
  let arr = x.split('')
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < 5){
      arr[i] = 0
    }
    else{
      arr[i] = 1
    }
  }
  return arr.join('')
}