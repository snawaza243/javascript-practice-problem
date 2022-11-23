/**
 * 2. ConditionalTernary operator
 *
 * The only operands that takes three operands.
 * combination and operands and operator called expression
 * syntax: of ternary operator that is short form of if... else..
 * variableName = (condition) ? trueValue:falseValue
 */

var age1 = 10

//  with if.. else..
if (age1 >= 18) {
    console.log(`you can vote`)
} else {
    console.log(`you can't vote`)
}

// with ternary operator

var age2 = 19;
const ans = (age2 >= 8 ? `Your can vote` : `You can't vote`)
console.log(ans)