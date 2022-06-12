// var name = 'aruna';
// name[0] = 'v';
// console.log(name) //aruna
// var user = {
//   name: 'aruna'
// }
// user.name = 'Aruna'
// console.log(user.name);

// var a;

// function sum(a, b) {
//   return `${a} + ${b}`;
// }

// console.log(sum(1, 2))

// console.log(typeof 'aruna');
// console.log(typeof 0);
// console.log(typeof a);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof 'true');
// console.log(typeof sum);
// console.log(typeof sum(1, 2));
// console.log(typeof {});
// console.log(typeof Symbol(1));
// console.log(typeof null);

// console.log(null == undefined)

// console.log(null + 1);
// console.log(undefined + 1);
// console.log(!!undefined);
// console.log(!!null)
// console.log(!true)
// var a = 1;
// console.log(!a);


// function getNumber(n) {
//   if (isNaN(n)) {
//     return 'NAN';
//   }
//   return n;
// }

// console.log(getNumber('1'));
// console.log(getNumber('sjad'));



// const id = Symbol();
// const course = {
//   title: 'Javascript',
//   topics: ['string', 'array', 'objects'],
//   id: 'js-course'
// }

// const courseInfo = course;
// courseInfo[id] = 1234;
// console.log(courseInfo);



// MAP / SET

// const staurday = new Map();
// staurday.set(8, "walk the dogs");
// staurday.set(12, "lunch");
// staurday.set(3, "watch a movie");
// console.log(staurday);
// console.log(staurday.get(12));
// console.log(staurday.has(8));
// console.log(staurday.size)
// console.log(staurday.delete(8));
// console.log(staurday.clear())
// console.log(staurday.keys().next().value);
// console.log(staurday.keys().next().value);

// staurday.forEach((item, index) => {
//   console.log(`${item}-${index}`);
// })


// const bestPictures = new Map();
// bestPictures.set(2020, 'Parasite');
// bestPictures.set(2019, 'Green Book');
// bestPictures.set(2018, 'Shape of water');
// bestPictures.set(2017, 'Moon Light');
// bestPictures.set(2016, 'Spotlight');
// bestPictures.set(2015, 'Bird Man');
// bestPictures.set(2014, '12 years of a slave');
// bestPictures.set(2013, 'Argo');
// bestPictures.set(2013, 'Argo');

// console.log(`Best picture is 2015 ${bestPictures.get(2015)}`);
// console.log(bestPictures.has(2010));
// console.log(bestPictures.size);
// console.log(bestPictures.clear());



// const invites = new Set()
//   .add('a@g.com')
//   .add('b@g.com');
// const values = invites.values()
// console.log(values.next().value);
// console.log(values.next().value);


// const snowman = new Set();
// console.log(snowman)
// function guessYourNumber(l) {
//   if (!snowman.has(l)) {
//     snowman.add(l);
//     const letter = prompt('Guess a letter?');
//     if (!letter) {
//       if (confirm('End game?')) {
//         console.log(snowman);
//         return;
//       }
//     } else {
//       guessYourNumber(letter);
//     }
//   } else
//     guessYourNumber();
// }
// const letter = prompt('Guess a letter?');
// guessYourNumber(letter);

let abc = Number(30 / "abc");
console.log('Number(12) == Number(12)', abc === abc);
console.log('NaN === NaN', NaN === NaN);
console.log('NaN == NaN', NaN == NaN);
console.log(typeof NaN);