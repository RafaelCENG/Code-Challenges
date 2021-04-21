// kyu 8:
// Title: Drink about

//code:
function peopleWithAgeDrink(old) {
  return old >= 21 ? 'drink whisky' : old >= 18 ? 'drink beer' : old >= 14 ? 'drink coke' : 'drink toddy'
};

// kyu 8:
// Title: Reverse List Order

//code:
function reverseList(list) {
  return list.reverse()
}

// kyu 8:
// Title: Well of Ideas - Easy Version

//code:
function well(x){
  let countGood = 0
  for (let i = 0; i < x.length; i++){
    if(x[i] === 'good'){
      countGood++
    }
  }
  return countGood > 2 ? 'I smell a series!' : countGood > 0 ? 'Publish!' : 'Fail!'
}


// kyu 8:
// Title: A wolf in sheep's clothing

//code:
function warnTheSheep(queue) {
  let index = queue.indexOf('wolf')
  console.log(queue.length)
  if(index === queue.length-1){
    return "Pls go away and stop eating my sheep"
  }
  else{
    return `Oi! Sheep number ${queue.length-index-1}! You are about to be eaten by a wolf!`
  }
}

// kyu 8:
// Title: No zeros for heros

//code:
function noBoringZeros(n) {
  let arr = n.toString().split('')
  let i = arr.length-1
  while(arr[i] === '0'){
    arr.pop()
    i -= 1
  }
return Number(arr.join(''))
}

// kyu 8:
// Title: 101 Dalmatians - squash the bugs, not the dogs!

//code:
function howManyDalmatians(number){
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
  return respond
}

// kyu 8:
// Title: Check the exam

//code:
function checkExam(array1, array2) {
  let points = 0;
  for(let i = 0; i < array1.length; i++){
    if (array2[i] === array1[i]){
      points = points + 4
    }
    else if(array2[i] === ''){
      points = points + 0
    }
    else{
      points = points + -1
    }
  }
 return points > 0 ? points : 0
}


// kyu 8:
// Title: Sleigh Authentication

//code:
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name ===  "Santa Claus" && password === "Ho Ho Ho!" ? true : false
};



// kyu 8:
// Title: Simple validation of a username with regex

//code:
function validateUsr(username) {
  let res =  /^[0-9a-z_]{4,16}$/.test(username) 
  return res
}

// kyu 8:
// Title: Capitalization and Mutability

//code:
function capitalizeWord(word) {
  return  word[0].toUpperCase()+word.slice(1)
}

// kyu 8:
// Title: L1: Bartender, drinks!

//code:
function getDrinkByProfession(param){
  let strObj = {
        "Jabroni" :	"Patron Tequila",
        "School Counselor" :	"Anything with Alcohol",
        "Programmer" :	"Hipster Craft Beer",
        "Bike Gang Member" :	"Moonshine",
        "Politician" :	"Your tax dollars",
        "Rapper" :	"Cristal"
   }
  let arr = param.split(' ')
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
  }
  let word = arr.join(' ')
      return strObj[word] ? strObj[word] : 'Beer'
}

// kyu 8:
// Title: The Wide-Mouthed frog!

//code:
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}

// kyu 8:
// Title: noobCode 01: SUPERSIZE ME.... or rather, this integer!

//code:
function superSize(num){
  return Number(num.toString().split('').sort().reverse().join(''))
}

// kyu 8:
// Title: Reversing Words in a String

//code:
function reverse(string){
  return string.split(' ').reverse().join(' ')
}