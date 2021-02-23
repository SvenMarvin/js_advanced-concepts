/**
 * Callback
 */
// grapTweets('twitter/marv', (error, marvTweets)=> {
//     if (error) {
//         throw error
//     }
//     displayTweets(marvTweets)
//     grapTweets('twitter/elonmusk', (error, elonTweets) => {
//         if (error) {
//             throw error
//         }
//         displayTweets(elonTweets)
//     })
// })

/**
 * Promises
 */


 //calback
//  movePlayer(100, 'left', () => {
//      movePlayer(10, 'left', () => {
//         movePlayer(100, 'left', () => {
//             movePlayer(10, 'left', () => {
                
//             })
//         })
//      })
//  })

//promises
// movePlayer(100, 'left')
//  .then(() => movePlayer(400, 'right'))
//  .then(() => movePlayer(20, 'right'))
//  .then(() => movePlayer(600, 'up'))

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');   
    }else{
        reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'POOKIEE');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking');
})

// Promise.all([promise, promise2, promise3, promise4])
// .then(values => {
//     console.log(values);
// })

// promise
// .then(result => result + '!')
// .then(result1 => result1 + '?')
// .catch(() => console.log('error'))
// .then(result3 => {
//     console.log(result3 + '$');
// })

// console.log(promise);

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json())
// })).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }).catch(() => {console.log('error');})

/**
 * ASYNC AWAIT
 */




const fetchUsers = async () => {
   const resp = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await resp.json();
   console.log(data);
};
fetchUsers()



const links = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
const fetchLinks = async () => {
    try {
        const [users, posts, albums] = await Promise.all(links.map(link => {
            return fetch(link).then(resp => resp.json())
        }))
        console.log(users)
        console.log(posts)
        console.log(albums)
    } catch (error) {
        console.log('error', error);
    }
}
fetchLinks()

//ES2018
// Object spred operator

const animal = {
    tiger: 25,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animal;
console.log(tiger);
console.log(rest);

/**
 * 
 * @param {*} item 
 * @param {*} delay 
 */
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)

let bbbb = 5;
/**
 * ES2020 allSetteld()
 */

 // IIFE
 (() => { 
     let a = 1;
     let b = 2;

     fight1 = (a, b) => {
        return a + b;
     }
     console.log(fight1(a, b));
 })();

 // Module Pattern
 let iffeModule = (() => { 
    let a = 1;
    let b = 2;

    fight2 = (a, b) => {
       return a + b;
    }
    return{
        fight2: fight2
    }
})();
console.log(iffeModule.fight2(3, 5));