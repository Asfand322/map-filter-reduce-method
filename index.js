// map method with arrays
// same like for each loop
// create new array with operations

let a = [43,23,13]
let b = a.map((value, index, array)=> {
    console.log(value, index, array)
    return value + index
})
console.log(b)

// result
// 43 0 (3) [43, 23, 13]
// 23 1 (3) [43, 23, 13]
// 13 2 (3) [43, 23, 13]
// (3) [43, 24, 15]

// filter method

let a1 = [43,23,13,4,2]
let b1 = a1.filter((value)=> {
    return value<5
})
console.log(b1)

// result
// (2) [4, 2]

// reduce method
let a2 = [3,3,1,4,2]
let b2 = a2.reduce((asfand, haris)=> {
    return asfand + haris
})
console.log(b2)

// result
// 13