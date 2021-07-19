// kyu 8:
// Title: The 'if' function

//code:
function _if(bool, func1, func2) {
    return bool == true ? func1() :  func2() 
  }
  
  function func1(){
    console.log('True')
  }
  
  function func2(){
    console.log('False')
  }

// kyu 8:
// Title: What's the real floor?

//code:

//PREP
//Parameters Our parameter is the number of floor = n
//Returns the number of floor from the american system to the european
//Examples 1 --> 0 , 5 ---> 4 , 15--->4
//Pseudo Code
// If n <= 0 return n
// Else if n <= 13 return n-1 (1 for the ground floor)
//Else return n - 2 (1 for the ground floor and one for the 13th floor)

function getRealFloor(n) {
    return n <= 0 ? n : n <= 13 ? n-1 : n-2
}

// kyu 8:
// Title: Multiplication table for number

//code:
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
    return table;
}