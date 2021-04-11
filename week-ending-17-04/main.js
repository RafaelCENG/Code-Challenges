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
