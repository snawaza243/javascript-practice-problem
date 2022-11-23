/**
 * Switch Case in JavaScript
 * Evaluates an expression, matching the expression's value to a sase clause, and executes statements associated with the case.
 *
 */

var area
var pi = 3.142,
  l = 5,
  b = 4,
  r = 3

if (area == 'circle') {
  console.log(`Area of circle = ${pi * r ** 2}`)
} else if (area == 'triangle') {
  console.log(`Area of triangle = ${(b * l) / 2}`)
} else if (area == 'rectangle') {
  console.log(`Area of rectangle = ${l * b}`)
} else if (area == 'square') {
  console.log(`Area of square= ${l * l}`)
}
// else {
//   console.log(`Enter the valid data.`)
// }

var area2
switch (area2) {
  case 'circle':
    console.log(`Area of circle = ${pi * r ** 2}`)
    break

  case 'triangle':
    console.log(`Area of triangle = ${(b * l) / 2}`)
    break

  case 'rectangle':
    console.log(`Area of rectangle = ${l * b}`)
    break

  case 'square':
    console.log(`Area of square= ${l * l}`)
    break
  default:
    console.log('Kuch to padh le bhai')
}
