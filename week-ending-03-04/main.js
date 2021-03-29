// kyu 8:
// Title: Volume of a Cuboid

//code:
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// kyu 8:
// Title: Sentence Smash

//code:
function smash (words) {
  return words.join(' ')   
};


// kyu 8:
// Title: L1: Set Alarm

//code:
function setAlarm(employed, vacation){
  return employed === true && vacation === false ? true : false
}

// kyu 8:
// Title: Sum Mixed Array

//code:
function sumMix(x){
  x = x.map(x => Number(x))
  return x.reduce((acc,curr) => acc + curr,0)
}


// kyu 8:
// Title: Function 3 - multiplying two numbers

//code:
function multiply(a,b) {   //let multiply = (a, b) => a * b;
  return  a*b
 }

 
// kyu 8:
// Title: Find the first non-consecutive number

//code:
function firstNonConsecutive (arr) {
  let flag = false
  let num
  for (let i = 0; i < arr.length-1; i++){
    if(arr[i] != arr[i+1]-1){
      num = arr[i+1]
      flag = true
      break;
    }
  }
  if(flag === true){
    return num
  }
  else{
    return null
  }
}