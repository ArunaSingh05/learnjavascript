// function delay(seconds, callback) {
//   setTimeout(callback, seconds);
// }

// delay(2, () => {
//   console.log('two seconds'),
//     delay(1, () => {
//       console.log('three seconds'),
//         delay(1, () => {
//           console.log('four seconds');
//         })
//     })
// });


// const delay = (seconds) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve(seconds), seconds * 1000);
//   });


// delay(1)
//   .then((result) =>
//     result * 2

//   ).then((result) =>
//     result * 2

//   ).then((result) =>
//     console.log(result * 2)
//   )


// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post two', body: 'This is post two' }
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000)
// }


// function createPost(post, callback) {
//   setTimeout(() => {
//     posts?.push(post);
//     callback();
//   }, 2000)
// }
// createPost({ title: 'Post three' }, getPost);


// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//     }, 2000)
//   })
// }

// createPost({ title: 'Post three' })
//   .then(() => { getPost() })


// const promise1 = Promise.resolve('Hello');
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Good bye')
//   }, 2000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((value) => console.log(value))


// const onMyBirthday = (isKayioSick) => {
//   return new Promise((resolve, reject) => {
//     if (isKayioSick) {
//       reject('Error')
//     } else {
//       resolve(2);
//     }
//   });
// }

// onMyBirthday(true)
//   .then(
//     (data) => {
//       console.log(data)
//     })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log('Party')
//   });


// const guessNumber = () => {
//   const n = Number(prompt('Enter a number'));
//   return new Promise((resolve, reject) => {
//     debugger;
//     if (typeof n !== 'number') {
//       reject(new Error(n))
//     }
//     resolve(+n);
//   });
// }

// const getRandomNumber = () => {
//   return Math.floor(Math.random() * 6 + 1);
// }

// let point = 0;

// function takeInput() {
//   guessNumber()
//     .then((n) => {
//       debugger;
//       let random = getRandomNumber();
//       if (n == random) {
//         point += 2;
//         console.log(`Point:${point}`);
//         console.log(`Random:${random}`);
//         console.log(`Input:${n}`);
//         if (confirm('Want Play more?', 1)) {
//           takeInput();
//         }
//       } else {
//         takeInput();
//       }
//     })
//     .catch((err) => {
//       console.log(err)
//     })

// }
// takeInput();


// Promsie try/catch 

// async function test() {
//   let promise = new Promise((resolve, reject) => {
//     reject(new Error())
//   });
//   try {
//     await promise;
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

// test();

// async function main() {
//   let promise = new Promise((resolve, reject) => {
//     reject(new Error("kersplat!"))
//   });
//   try {
//     await promise;
//   }
//   catch (error) {
//     console.error("Something went wrong:", error)
//   }
// }

// main();


// Simulates a failed fetch, with 50% chance of a server error,
// and 50% chance of a not found error.
// async function fetchPrice(ticker) {
//   if (Math.random() > 0.5) {
//     return Promise.reject({ status: 500 })
//   }

//   return Promise.reject({
//     status: 404,
//     data: "404 Not found. Sorry!"
//   })
// }

// async function main() {
//   try {
//     // Simulate a failure
//     let dogePromise = fetchPrice('DOGE')
//     let dogePrice = await dogePromise

//     console.log(dogePrice.data)
//   }
//   catch (error) {
//     if (error.status === 500) {
//       // If error status is 500, use a client-side error message
//       console.error("Sorry, our server is on a smoke break.")
//     }
//     else {
//       // Otherwise use the one sent by the server
//       console.error(error.data)
//     }
//   }
// }

// main();


// Promise race

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('1000'))
//   }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2000)
//   }, 2000)
// });

// Promise.race([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
// Promise.all([promise1, promise2])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))



async function getGitHubUsersList() {
  const user = await fetch('https://api.github.com/users');
  return user.json();
}

