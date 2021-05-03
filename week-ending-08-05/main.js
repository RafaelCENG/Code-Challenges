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