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

var a = 20

if (a == 20) {
  console.log('Barabar hai bhai')
} else console.log('Kya kar rahe ho bhai nahi hai')

/**
 * ly=y%4 && y/4
 */

var y = 2020

if (y % 4 === 0) {
  if (y % 100 === 0) {
    if (y % 400 === 0) {
      console.log(`The ${y} is a leap year.`)
    } else {
      console.log(`The ${y} is not a leap year.`)
    }
  } else {
    console.log(`The ${y} is not a leap year.`)
  }

  console.log(`The ${y} is a leap year.`)
}
