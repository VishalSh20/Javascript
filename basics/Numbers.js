// const score = 700
// const balance = new Number(score)
// // by default Number - floating point value .. so value 700 written represents a floating point value and not a bigInt
// // day to day use - number is sufficient even to represent integers
// console.log(typeof score)
// console.log(typeof balance)
// console.log(score)
// console.log(balance)

// let a;
// const num = Number(a) //undefined is converted to NaN
// console.log(num)
// console.log(typeof num)

// console.log(Number(null))
// console.log(Number(""))
// console.log(Number("55"))
// console.log(Number("-125"))
// console.log(Number("3.24315"))
// console.log(Number("10 + 10")) //nan to any non number string
// console.log(Number("fjak241"))
// console.log(Number("12142n")) //nan dega
// console.log(Number(21531466556915797515389623298578970146n)) //don't throw error but imprecise

// checking the type of values i.e they are numbers is very important ..cause any invalid operation gives NaN -- also NaN != NaN .. but it can be checked

// Number has 1 sign bit , 11 exponent bits -1022 to 1023 , 52 bits for number
// Number = (-1)^sign * (1+mantissa) * 2^exponent
// console.log(Number.MAX_SAFE_INTEGER) // 2^(53) - 1
// console.log(Number.MIN_SAFE_INTEGER) // -2^(23) + 1
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.MAX_SAFE_INTEGER + 5 === Number.POSITIVE_INFINITY)
// console.log(Number.MAX_VALUE + 1)
// console.log(Infinity)

// const bigNum = 3597016098464680984n
// const num = Number(bigNum)
// console.log(num)

// const userId = key(1978)
// const numericalId = Number(userId) //symbol cannot be converted to number 
// console.log(numericalId)

// number methods
// console.log(Number.isFinite(Number.MAX_SAFE_INTEGER+1))
// console.log(Number.isFinite(Number.MAX_VALUE+1))
// console.log(Number.isFinite(Number.MIN_VALUE/2))


// console.log(Number.isInteger(153.415))
// console.log(Number.isInteger(4115))
// console.log(Number.isInteger(12.12/3.03))

// console.log(isNaN(5+null))
// console.log(isNaN(23+undefined))
// console.log(isNaN(451))
// console.log(isNaN(Number("5a277")))

// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1))

// instance methods

// to exponential - gives a string of number in exponential form
// const num = 4631
// console.log(num.toExponential())
// console.log(typeof num.toExponential())

// const n1 = 315.46136 , n2 = 3256
// console.log(n1.toFixed(2)) //fixes number of digits after decimal
// console.log(n2.toFixed(2))

// const val1 = 4525.351356 //digits tak precision
// for(let p = 1; p<10; p++)
// console.log(p,val1.toPrecision(p))

// const num = 1052185
// console.log(num.toLocaleString())
// console.log(num.toLocaleString('en-IN'))

