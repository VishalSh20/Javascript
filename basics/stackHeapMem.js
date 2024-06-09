// let s = "hello"
// let s1 = s
// s1 = "yo"
// console.log(s1)
// console.log(s)

// const user = {
//     userName:"Vishal",
//     age:22,
//     email :"vishal14052002@gmail[dot]com "
// }

// console.log(user)

// const userOne = user
// userOne.email = "vishal@gmail[dot]com"
// console.log("After Change-")
// console.log("user-",user)
// console.log("userOne-",userOne)

// let arr = [5,12,3,6,7,3,6,0,23]
// const arrOne = arr
// arrOne = [1 ,2];
// console.log(arrOne)
// console.log(arr)
// //const me aap definition dusri nahi kr sakte variable ki ..if vo reference type hai to property change ho skti h

const course = {
    title:"Coding Course",
    price:4000,
    instructor:"Hitesh Sir"
}
const courseTwo = course;
course.price = 3500
console.log(courseTwo)

// assigning deep copy to non primitive data types
const courseThree = {...course,
    extra:"Cow"
}
console.log(courseThree)
console.log(course)


