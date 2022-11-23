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


/**
 *       3.0 if... else
 */

// var a
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
