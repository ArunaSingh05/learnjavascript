// const question = "What?";
// (function test(question) {
//   setTimeout(() => {
//     console.log(question);
//   })
// })(question);

// (function test(question) {
//   setTimeout(function () {
//     console.log(question);
//   })
// })(question);


// (function test(question) {
//   setTimeout(function abc() {
//     console.log(question);
//   })
// })(question);

// function test2(question) {
//   return function xyz() {
//     return question;
//   }
// }

// console.log(test2(question)());

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log('i ====> ', i);
//   })
// }
// // 3, 3, 3

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log('i ====> ', i);
//   })
// }
// 1, 2, 3



// var workshop = (function teacherFun(teacher) {
//   var myVar = 123;
//   return { ask };
//   function ask(question) {
//     console.log('question, teacher ===>', question, teacher);
//   }
// })("sada");

// console.log(workshop);
// workshop.ask("what");

// {
//   // show message
//   let message = "Hello";
//   console.log(message);
// }

// {
//   // show another message
//   let message = "Goodbye";
//   console.log(message);
// }


function f() {
  let value = 123;

  return function () {
    alert(value);
  }
}


// Practice Scope

let g = f();
// console.log('Lexical Environment', g)


let nameVar = "John";

function sayHi() {
  alert("Hi, " + nameVar);
}

nameVar = "Pete";

sayHi();  //Hi, Pete



function makeWorker() {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); //Pete


function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// alert(counter2()); // 0
// alert(counter2());// 1



function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counterObj = new Counter(); //count 0

// alert(counterObj.up()); // ? count 1
// alert(counterObj.up()); // ? count 2
// alert(counterObj.down()); // ? count 1


// let phrase = "Hello";

// if (true) {
//   let user = "ABC";
//   function sayHi() {
//     console.log(`User: ${user}, Phrase:${phrase}`);
//   }
// }

// sayHi(); Error



// Write function sum that works like this: sum(a)(b) = a + b.

function sum(a) {
  return function (b) {
    return a + b;
  }
};

console.log('SUM', sum(1)(2));


// let x = 1;

// function func() {
//   console.log('VALUE OF X ===> ', x); // ?

//   let x = 2;
// }

// func();
