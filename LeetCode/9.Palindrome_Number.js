/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let number = x.toString()
	palindromeNum = number.split('').reverse().join('')
	if (palindromeNum === number) return true
	else return false
}
