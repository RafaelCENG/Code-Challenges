// Create a function that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

//P: one integer
//R: string "Even" or "Odd"
//E: 5 --> Odd, 8 --> "Even", -42 --> "Even"
//P: take the integer, we check if we can divide it by 2,
// if the module is 0 then its even else its odd

even_or_odd = (number) => (number % 2 === 0 ? 'Even' : 'Odd')
