/**
 * While loop
 * While statement creates a loop that executes a specified statement as long as the test condition evaluation to true.
 * get output when condition true 
 * can't get output if even one condition false
 */

// console.log('\nIncreasing with while loop')

// var n = 0
var n
var i
while (n <= 10) {
  console.log(n)
  n++
}

// console.log('\nDecreasing with while loop')
// var m = 10
var m
while (n >= 0) {
  console.log(n)
  n--
}

// do while
// get output even condition true or false least one

// console.log('Increasing with do while')
// var n2=0;
var n2;
do{
    // console.log(n2); //if not any value it output undefined
    n2++
}while(n2<=10)


/**
 * for loop
 * shorter of while and do while loop
 * syntax
 * for (initializer; condition; iterator){....}
 * 
 * little falster 
 * 
 */



for(var i = 1; i<=10; i++)
{
    console.log(i)
}

// 3:7:30