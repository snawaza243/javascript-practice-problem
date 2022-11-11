// value and variable

var firstName = 'Sam'

// let and const in ECMA 2015
/*
var         = variable(key)
firstName   = name
'sam'       = Value string

note: 
first letter can be _ , $ or letter then can be user any letter or number except to character
cant start with number
cant include space with a variable name
var name are case sensitive

*/
var $lastName = 'Sid'
var ageIn22 = 22
var _name1 = 'sid2'
var _1name = 'sid3'
var _$name = 'sid4'
var _new__name = 'sid5'
// var name% = 'sid6' //error
// var 1name = 'sid7' //error

// console.log('your first name is ' + firstName + 'and age ' + ageIn22)
// console.log($lastName)
// console.log(ageIn22)
// console.log(_name1)
// console.log(_1name)
// console.log(_$name)
// console.log(_new__name)




/*
data type in javascript
there are six data types primitives of javascript 
String      typeof instance === "string"
Number      typeof instance === "number"
Boolean     typeof instance === "boolean"
undefiend   typeof instance === "undefined"
BigInt      typeof instance === "bigint" ECMA2015 (int before 2015)
Symbol      typeof instance === "symbol"
*/

var dt1 = 'Sam sid'
var dt2 = 22
var dt3 = true

// console.log(typeof(dt1))
// console.log(typeof(dt2))
// console.log(typeof(dt3))


// console.log('\nNumber and sting number')
// console.log(20+'22')
// console.log(20+20)
// console.log(20-'15') //* a bug work as number if bot are as num or string
// console.log(20-15)

// console.log('\nString and number')
// console.log('Java'+'Script')
// console.log('Java'-'Script')
// console.log('Java'+20)
// console.log('Java'-20)
// console.log(20-'Javascript')
// console.log(21+'Javascript')

// console.log(typeof(20-'Javascript'))
// console.log(typeof('Java'+'Script'))
// console.log(typeof('Java'-'Script'))



// console.log('\nBoolean value')
// console.log(true+true)
// console.log(true+false)
// console.log(false+true)
// console.log(false+false)

// console.log(true-true)
// console.log(true-false)
// console.log(false-true)
// console.log(false-false)
// console.log(typeof(false-false))


/*
qna

difference with null and undefined 

*bug null is an object with null
undefined a variable with not assigned


what is NaN
Not a number
string-sting get NaN
global object property
a variable in global scope
initial value of NaN


*/ 
var qn1 = null
var qn2
// console.log(typeof(qn1))
// console.log((qn2))
// console.log(typeof(qn2))

var num = 'Sam'

if(isNaN(num)){
    console.log('Enter a valid number')
}