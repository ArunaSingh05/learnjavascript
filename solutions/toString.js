let a = [];
console.log(a.toString()); //
a = [null, undefined];
console.log(a.toString()); //,
a = { abc: 123 };
console.log(a.toString()); //[object Object]
a = [1, 2, 3];
console.log(a.toString()); //1,2,3
a = null;
// console.log(a.toString()) //Error
a = undefined;
// console.log(a.toString()) //Error
a = 1;
// console.log(a.toString()) //Error
a = Symbol();
// console.log(a.toString()) //Symbol
a = new Map();
console.log(a.toString()) //[object Map]