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
