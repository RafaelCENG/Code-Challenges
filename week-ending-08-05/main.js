// kyu 8:
// Title: Triple Trouble

//code:
function tripleTrouble(one, two, three){
    let arr = []
    for(let i = 0; i< one.length; i++){
        arr.push(one[i]+two[i]+three[i])
    }
    return arr.join('')
}

// kyu 8:
// Title: Training JS #7: if..else and ternary operator

//code:
function saleHotdogs(n){
    return  n < 5 ? n*100 : n >= 5 && n < 10 ? n*95 : n*90
}


// kyu 8:
// Title: Welcome to the City

//code:
function sayHello( name, city, state ) {
    return "Hello, " + name.join(" ") + "! Welcome to " + city + ", " + state +"!"
}