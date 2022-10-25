// P: A string
// R: boolean,true/false
// E: a=true, Abba=true, bs=false
// P: take the string, split it,reverse it,join it. If its equal with the given string then is palindrome

function isPalindrome(x) {
	let check = x.split('').reverse().join('').toLowerCase()
	return x.toLowerCase() === check ? true : false
}
