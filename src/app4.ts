/* 04 Next-generation JavaScript & TypeScript */


// 049 _let_ and _const_

// const userName = 'Max';
// 常量初始化之后不能再次赋值
// userName = 'Maximilian'

// let age = 30;
// age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
//     var isOld = true;
// }
//
// console.log(isOld)


// 050 Arrow Functions

// const add = (a: number, b: number) => {
//     return a + b;
// };

// const add = (a: number, b: number) => a + b;
//
// const printOutput: (o: number | string) => void = output => console.log(output)
//
// const button = document.querySelector('button')
//
// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }
//
// printOutput(add(2, 5))


// 051 Default Function Parameters

// const add = (a: number, b: number = 1) => a + b;
// console.log(add(5))


// 052 The Spread Operator (...)

// const hobbies = ['Sports', 'Cooking']

// const activeHobbies = ['Hiking']
// activeHobbies.push(...hobbies)
// const activeHobbies = ['Hiking', ...hobbies]
// console.log(activeHobbies)
//
// const person = {
//     name: 'Max',
//     age: 30
// }
//
// const copiedPerson = {...person}
// console.log(copiedPerson)


// 053 Rest Parameters

// const add = (...numbers: number[]) => {
//     return numbers.reduce((curResult: number, curValue: number) => {
//         return curResult + curValue
//     }, 0);
// }
// const addedNumbers = add(5, 10, 2, 3.7)
// console.log(addedNumbers)


// 054 Array & Object Destructuring

const hobbies = ['Sports', 'Cooking', 'Hiking', 'sleeping']
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2)
console.log(remainingHobbies)
console.log(hobbies)

const person = {
    firstName: 'Max',
    age: 30
}

// firstName重命名为userName
const {firstName: userName, age} = person
console.log(userName, age)
console.log(person)
