// 011 Using Types
// 012 TypeScript Types vs JavaScript Types
// 014 Working with Numbers, Strings & Booleans
// 015 Type Assignment & Type Inference

// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     // js的解决方案
//     // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//     //     throw new Error('Incorrect input!');
//     // }
//     const result = n1 + n2
//     if (showResult) {
//         console.log(phrase + result)
//     } else {
//         return result;
//     }
// }
//
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';
//
// add(number1, number2, printResult, resultPhrase);

// 016 Object Types

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Maximilian',
//     age: 30
// };

// 跟上边一样的效果
// const person = {
//     name: 'Maximilian',
//     age: 30
// };

// 018 Arrays Types
// 019 Working with Tuples

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// ts无法识别此种错误
// person.role.push('admin')
// ts能识别此类错误
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

// 020 Working with Enums

// enum Role {ADMIN, READ_ONLY, AUTHOR};
//
// const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN
// }
//
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
//
// console.log(person.name)
//
// for (const hobby of person.hobbies) {
//     // debugger;
//     console.log(hobby.toUpperCase())
// }
//
// if (person.role === Role.AUTHOR) {
//     console.log('is author');
// }

// 022 Union Types
// 023 Literal Types
// 024 Type Aliases _ Custom Types

// type Combinable = number | string
// type ConversionDescriptor = 'as-number' | 'as-text'
//
// function combine(
//     input1: Combinable,
//     input2: Combinable,
//     resultConversion: ConversionDescriptor) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     if (resultConversion === 'as-number') {
//         result = +result
//     } else {
//         result = result.toString()
//     }
//     return result;
// }
//
// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);
//
// const combinedStringAges = combine('30', '26', 'as-number');
// console.log(combinedStringAges);
//
// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames)

// 026 Function Return Types & _void_

// 返回类型默认也是number
// function add(n1: number, n2: number): number {
//     return n1 + n2
// }
//
// // 返回类型默认也是void
// function printResult(num: number): void {
//     console.log('Result: ' + num)
// }
//
// // 返回类型是undefined
// function printResult2(num: number): undefined {
//     console.log('Result: ' + num)
//     return;
// }
//
// console.log(printResult(add(5, 12)))

// 027 Functions as Types

// let combineValues: Function;
// combineValues = add;
// // ts会报错
// combineValues = 5;

// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// // ts会报错
// combineValues = printResult;
//
// console.log(combineValues(8, 8));

// 028 Function Types & Callbacks

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result)
// }
//
// addAndHandle(10, 20, (result) => {
//     console.log(result);
// })

// 029 The _unknown_ Type

// // let userInput: any;
// let userInput: unknown;
// let userName: string;
//
// userInput = 5;
// userInput = 'Max';
// // ts会报错
// // userName = userInput;
// if (typeof userInput === 'string') {
//     userName = userInput;
// }

// 030 The _never_ Type

// function generateError(message: string, code: number): never {
//     throw {message: message, errorCode: code}
// }
//
// generateError('An error occurred!', 500)

// 045 Debugging with Visual Studio Code

// const button = document.querySelector('button')!;
//
// button.addEventListener('click', () => {
//     console.log('Clicked!');
// });



