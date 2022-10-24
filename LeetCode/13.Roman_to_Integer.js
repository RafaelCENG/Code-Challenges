/**
 * @param {string} s
 * @return {number}
 P: A string containing Roman numerals
 R: The integer number of the Roman numerals
 E: III = 3, V = 5, IV=4
 P: Take the string split, check each letter and add the number to a sum
 */

let map = {
	I: 1, //can be in front of "V" or "X"
	V: 5,
	X: 10, //can be in front of "L" or "C"
	L: 50,
	C: 100, //can be in front of "D" or "M"
	D: 500,
	M: 1000,
	IV: 4,
	IX: 9,
	XL: 40,
	XC: 90,
	CD: 400,
	CM: 900,
}

var romanToInt = function (s) {
	let arr = s.split('')
	let num = 0
	for (i = 0; i < arr.length; i++) {
		if (map[arr[i] + arr[i + 1]] != undefined) {
			num = num + map[arr[i] + arr[i + 1]]
			i++
			continue
		}
		num = num + map[arr[i]]
	}
	return num
}
