// let s1 = "this is a string"
// console.log(typeof s1)
// console.log(s1.length)
// console.log(typeof s1)

// console.log("abc"[1])

// let s2 = new String("This is a string")
// console.log(typeof s2)
// console.log(s2)
// let s3 = s2.valueOf() //valueOf returns the primitive value of the object
// console.log(typeof s2)
// console.log(typeof s3)

// let userName = "Vishal"
// console.log(`hello ${userName}, how are you?`)

// // instance properties - property of each string instance
// let s = "Vishal"
// //length - 
// console.log(s.length)

// instance methods -> actual string me lagbhag kisi property se change nahi aata
let s = "MyString"
// console.log(s.charAt(3))     
// console.log(s.charCodeAt(4)) //utf-16 code of that code
// console.log(s.indexOf('a'))
// console.log(s.indexOf('t'))
// console.log(s.includes('tri'))
// console.log(s.startsWith('M))
// console.log(s.endsWith('g'))
// console.log(s.endsWith('v'))
// // last occurence
// console.log(s.lastIndexOf('ng'))
// // compare - returns a integer showing whether given string comes before,after or is eqt to the input string
// console.log(s.localeCompare("MyString"))
// console.log(s.localeCompare("italy"))

// string padding - copy banti hai padded 
// let newStr = s.padEnd(20) //pad so that it obtains at least this length
// console.log(newStr.length)
// console.log(s.length)
// newStr = s.padEnd(7)
// console.log(newStr.length)
// console.log(s.length)

// newStr = s.padEnd(15,'..')
// console.log(newStr)
// console.log(s.padEnd(15,'asfnakfafsavsa'))

// pad start
// console.log(s.padStart(15,'.hi.'))

// string repeat
// let favAnimal = "cow "
// console.log(`my fav animal is ${favAnimal.repeat(3)}`)
// let favFeeling = favAnimal.repeat(3)
// console.log(favFeeling)

// replace
// let speech = "JS is the world's best language , I love JS"
// let anotherSpeech = speech.replace('JS','C#')
// console.log(speech)
// console.log(anotherSpeech)

// const url = "https://mywebsite.com/vishal%20sharma"
// const newURL = url.replace('%20','_')
// console.log(url)
// console.log(newURL)

// split on basis of delimiters
// const languages = "Cpp,Java,Python,JS,Ruby"
// const languagesArr = languages.split(',')
// console.log(languages)
// console.log(languagesArr)

// const str = "this is a  nice string"
// console.log(str.split()) //delimiter nahi diya no split
// console.log(str.split(' '))
// console.log(str.split(' ',3)) // limiting the number of parts

// substring
// const dish = "paneer panjabi"
// let newDish = dish.substring(0,6) //start and end index(end exclusive)
// console.log(dish,newDish)
// newDish = dish.substring(7,15)
// console.log(newDish)

// lower and upper case
// const userName = "vishal"
// const capName = userName.toUpperCase()
// console.log(userName,capName)

// // trim the extra spaces
// const userName = "    Vishal   Sharma "
// const trimmedUserName = userName.trim()
// console.log(userName)
// console.log(trimmedUserName)

// const trimmedName1 = userName.trimStart()
// const trimmedName2 = userName.trimEnd()
// console.log(trimmedName1)
// console.log(trimmedName2)

// concatenate two strings
// const s1 = "Vishal" , s2 = " Sharma"
// const s3 = s1.concat(s2)
// console.table([s1,s2,s3])