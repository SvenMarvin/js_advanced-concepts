// // invoke functon
// one = () => {
//     // console.log(1);
// };
// one();
// one.call();

// // const four = new Function(console.log(4));

// // four();

// // Functions are first class citizens in JS
// // 1
// var stuff = function () {
    
// }

// // 2
// function a(fn) {
//     fn()
// }

// a(function (){console.log('fn')})

// // 3
// function b() {
//     return function c() {
//         // console.log('bey');
//     }
// }
// b()()
// var d = b()
// d()

// ////////////////
// // Do not inilisation a function inside a loop -> better outside
// function a() {
        
// }
// for (let i = 0; i < 5; i++) {
//     a()
// }

// /*
// ** HOF --> Highter Order Function
// */

// // function()
// function letAdminLogin() {
//     let array = [];
//     for (let i = 0; i < 100000000; i++) {
//         array.push(i)        
//     }
//     // console.log('Access Successful');
// }
// function letEvaLogin() {
//     let array = [];
//     for (let i = 0; i < 100000000; i++) {
//         array.push(i)        
//     }
//     // console.log('Access Successful');
// }
// letAdminLogin()
// letEvaLogin()

// // function(a,b)
// function letUserLogin(user) {
//     let array = [];
//     for (let i = 0; i < 100000000; i++) {
//         array.push(i)        
//     }
//     // console.log(`Access Successful ${user}`);
// }

// letUserLogin('Phillip');

// // HOF
// function authenticate(verify) {
//     let array = [];
//     for (let i = 0; i < verify; i++) {
//         array.push(i)        
//     }
//     return true
// }

// const giveAcessTo = (name) => {
//     console.log(`Àcess Greanted to ${name}`);
// }

// function letPerson(person, fn) {
//     if (person.level === 'admin') {
//         fn(5000000)
//     }else if (person.level === 'user') {
//         fn(10000)
//     }
//     return giveAcessTo(person.name); 
// }

// letPerson({level: 'user', name: 'Timm'}, authenticate); 


// const multiplyBy = (num1) => (num2) => console.log(num1 * num2); 

// multiplyBy(4)(6);

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);
//  multiplyByTwo(4)
//  multiplyByTwo(8)
//  multiplyByFive(8)


//  // Closures

//  a = () => {
//      let grandpa = 'grandpa'
//      return b = () => {
//          let father = 'father'
//          let randum = 345432345
//          return c = () => {
//              let son = 'son'
//              console.log(`${grandpa} > ${father} > ${son}`);
//          }
//      }
//  }
//  a()()();

// const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

// boo('wre')('fsd')('f')

// const booString = boo('hi');
// // 5 years
// const booStringName = booString()


// // Closurs advnced

// callmeMaybe = () => {
//     const txt = 'Hi';
//     setTimeout(() => {
//         // console.log(txt);
//     }, 2000)
// }
// callmeMaybe();

// // Closurs advnced 2.0 

// // Memory efficient 
// heavyDuty = (index) => {
//     const bigArray = new Array(7000).fill(':)');
//     console.log('created');
//     console.log(bigArray[index]); 
// }

// heavyDutyTwo = () => {
//     const bigArray = new Array(7000).fill(':)');
//     console.log('created Agian');
//     return (index) => {
//         console.log(bigArray[index]);
//     }
// }

// heavyDuty(688);
// heavyDuty(688);
// heavyDuty(688);
// const getHeavyDuty = heavyDutyTwo();
// getHeavyDuty(4);
// getHeavyDuty(44);
// getHeavyDuty(444);

// // Encapsulation
// const makeNuclearButton = () => {
//     let timeWithoutDesruction = 0;
//     const passTime = () => timeWithoutDesruction++;
//     const totalPeaceTime = () => console.log(timeWithoutDesruction);
//     const launch = () => {
//         timeWithoutDesruction = -1;
//         console.log('booom');
//     }
//     setInterval(passTime, 1000);
//     return {
//         // launch: launch,
//         totalPeaceTime: totalPeaceTime
//     }
// }

// const ohno = makeNuclearButton();
// ohno.totalPeaceTime();
// ohno.totalPeaceTime();


// //Closure

// let view;

// initialize = () => {
//     view = 'berg';
//     console.log('view has been set');
// }

// initialize = () => {
//     view = 'berg';
//     console.log('view has been set');
//     return () => {
//         console.log(view);
//     }
// }
// const initializeCorrect = initialize();

// initializeCorrect();
// initializeCorrect();
// initializeCorrect();


// // Exercise var -> let -> closure
// const array = [1,2,3,4];

// for (var i = 0; i < array.length; i++) {
//     setTimeout(() => {
//         console.log(`Ì am at index ${i}`);
//     }, 3000);
// }

// for (let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//         console.log(`Ì am at index ${i}`);
//     }, 3000);
// }

// for (let i = 0; i < array.length; i++) {
//     ((closureI) => {
//         setTimeout(() => {
//             console.log(`Ì am at index ${closureI}`);
//         }, 3000);
//     })(i)
// }



// // Prototypal Inheritance

// const pArray = [];
// console.log(pArray.__proto__);
// console.log(pArray.__proto__.__proto__);

// pA = () => {}
// console.log(pA.__proto__);
// console.log(pA.__proto__.__proto__);

// const pObj = {}
// console.log(pObj.__proto__);

// let dragon = {
//     name: 'Tyna',
//     fire: true,
//     fight(){
//         console.log(5); 
//     },
//     sing(){
//         if(this.fire){
//             console.log(`Ì am ${this.name}, the breather of fire`); 
//         }
//     }
// }
// dragon.sing();

// let lizard = {
//     name: 'Kiki',
//     fight(){
//         console.log(1);
//     }
// }
// // const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

// lizard.__proto__ = dragon;

// lizard.sing();
// lizard.fight();

// for (const key in lizard) {
//     if (lizard.hasOwnProperty(key)) {
//         console.log(key);        
//     }
// }

// const objj = {name: 'Sally'}
// console.log(objj.hasOwnProperty('name'));


// func = () => {
// }
// console.log(func.hasOwnProperty('call'));
// console.log(func.hasOwnProperty('name'));

// multiplyBy5 = (num) => num * 5;

// console.log(multiplyBy5.__proto__);

// console.log(multiplyBy5.__proto__);
// console.log(Function.prototype);
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);

// const ar = []
// console.log([].hasOwnProperty('map'));
// console.log(ar.hasOwnProperty('map'));
// console.log(ar.__proto__.hasOwnProperty('map'));
// console.log(ar.prototype);
// console.log(ar.__proto__);



// let human = {
// mortal: true
// }

// let socrates = Object.create(human);
// socrates.age = 45

// console.log(socrates);
// console.log(socrates.mortal);
// console.log(human.isPrototypeOf(socrates));


// multiplyByF = (num) => num * 5;

// console.log(multiplyByF.prototype);
// console.log(multiplyByF.__proto__);
// console.log(multiplyByF.__proto__.__proto__);


// /* IMPORANT */
// create method
// manipulate map


// Date.prototype.lastYear = function() {
//     return this.getFullYear() - 1;
// }
// const date = new Date('2012-2-12');
// console.log(date.lastYear());



// Array.prototype.map = function() {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push((this[i] + ':)'))        
//     }
//     return arr;
// }
// let arrayMap = [1,2,3]
// console.log(arrayMap.map((el) => el ));