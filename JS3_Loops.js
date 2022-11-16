/**
 *          Loops in JavaScript
 * if else          :
 * switch statement :
 * while loop       :
 * do while loop    :
 * for loop         :
 * for in loop      :
 * for of loop      :
 * conditional or
 * ternary operator :
 */

var a

// if (a == 20) {
//   console.log('Barabar hai bhai')
// } else {
//   console.log('Kya kar rahe ho bhai nahi hai')
// }

/**
 * If.... else
 * ly=y%4 && y/4
 */

var y

if (y % 4 === 0) {
  if (y % 100 === 0) {
    if (y % 400 === 0) {
      console.log(`The ${y} is a leap year.`)
    } else {
      console.log(`The ${y} is not a leap year.`)
    }
  } else {
    console.log(`The ${y} is a leap year.`)
  }

  console.log(`The ${y} is not  a leap year.`)
}

/**
 * The if statement executes a statement if a specified condition is truthy.
 * If the condition is falsy, another statement can be executed.
 *
 * What is truthy and falsy in javascript?
 * There are total 6 falsy value
 * zero: 0
 * empty string: " "
 * undefined
 * null
 * NaN
 * false**
 */

// example 1
// var score ;
// if ((score == 0)) {
//   console.log(`OGM, we loss at ${score}`)
// } else {
//   console.log(`Hurrah, we won the match at ${score}`)
// }

// //undefined

// example 2
// var score = 10
// if (score == 0) {
//   console.log(`OGM, we loss at ${score}`)
// } else {
//   console.log(`Hurrah, we won the match at ${score}`)
// }

// Hurrah, we won the match at 10

/**
 * 2. ConditionalTernary operator
 *
 * The only operands that takes three operands.
 * combination and operands and operator called expression
 * syntax: of ternary operator that is short form of if... else..
 * variableName = (condition) ? trueValue:falseValue
 */

var age = 10

// with if.. else..
// if (age >= 18) {
//   console.log(`you can vote`)
// } else {
//   console.log(`you can't vote`)
// }

// with ternary operator
// console.log(age>=8?`Your can vote`:`You can't vote`)
