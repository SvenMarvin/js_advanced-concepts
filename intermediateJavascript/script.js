/*
** SCOPE
** The Root Scope is the windoe scope
*/

// function have access to the global scope
let b = 'global scope';
function bb() {
    let a = 'hello';
}

// Root Scope
let fun = 5;

function funnestFunction() {
    //child scope
    let fun = 'AHHHH';
    console.log(fun);
}


/*
** TENARY OPERATOR
*/
// Syntax: condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(true) ? 'Enter' : 'Access Denied';
let automated = 'accNr is' + (isUserValid(false) ? '1234' : 'not avalibe')


/*
** SWITCH STATEMENT
*/

function moveCommand(direction) {
    let whatHappens;
    switch (direction) {
        case 'forward':
            whatHappens = '1';
            break;
        case 'back':
            whatHappens = '2';
            break;
        case 'right':
            whatHappens = '3';
            break;
        case 'back':
            whatHappens = '4';
            break;
    
        default:
            break;
    }
    return whatHappens;
}
// console.log(moveCommand('right'));


/*
** ECMAScript 6
*/

// let -> create new scope inside a function / if / etc.
// const -> can not change (can change object properties)

//Destructering

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;

// better
const {player11, experience} = obj;

// console.log(player);
// console.log(player);


const name = 'john snow';
const obj1 = {
    [name]: 'hello',
    [1 + 2]: 'hii'
}
// console.log(obj1);


// Template strings
namee = 'sally';
const greetingBest = `Hello ${namee}`;
// console.log(greetingBest);

// default arguments
function defaultArguments(name='', age= 20, pet='dog') {
    return `Hello ${name}, I am ${age} and my favorite pet is a ${pet}`
}
// console.log(defaultArguments());


// JS Types:

// Number
// String
// Boolean
// Undefined
// Null
// Object

// New in ES6:
// Symbol

    
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// console.log(sym1);
// console.log(sym2);
// console.log(sym3);


// arrow function
arrowfunction = () => {
    // console.log('arrow function');
};
arrowfunction();

/*
** Advanced Functions
*/

const first = () => {
    const greet = 'HI';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
// newFunc();

// Closures
// a function ran. the function executed. It's never going to execute agian.
// BUT it's going to remeber that there are references to those variables
// so the child Scope always has access to thr parent Scope


// Currying

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// console.log(curriedMultiply(3)(4));

const multiply1 = (a,b) => a * b;
const curriedMultiply1 = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply1(5);

// console.log(multiplyBy5(5));


// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
// console.log(compose(sum, sum)(5));

// Avoiding Side Effects, functional purity ==> deterministic

let a = 1;

/*
** Advanced Arrays
*/

const array = [1, 2, 3, 14];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
// console.log(double);

// map, filter, reduce

//map
const mapArray = array.map((num) => {
    return num * 2;
})
// console.log(mapArray);

// cleanUP
const cleanMapArray = array.map (num => num * 2);
// console.log(cleanMapArray);

//filter
const filterArray = array.filter (num => num > 5);
// console.log(filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);
// console.log('reduce', reduceArray);


/*
** Advanced Objects
*/
// Objects (and Arrays) are reference type

// context
const object = {
    a: function () {
        // console.log(this);
    }
}
// object.a();


// instantiation
class Player{
    constructor(name, type){
        // console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        // console.log(`Hi i am ${this.name}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        // console.log(`Ì am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark MAgic');

wizard1.play();

/*
** ES7
*/

// includes()
const animalArray = [
    'cat',
    'dog',
    'snake',
    'horse'
];
// console.log(animalArray.includes('dog'));


const square = (x) => x**3
// console.log(square(10));


/*
** ES7
*/

// string patting
const text = 'Hello';
// padStart()
// padEnd()
// console.log(text.padStart(10));

const fun22 = (a, b, c, d,) => {
    // console.log(a);
}

fun22(1,2,3,4,)

// Object.values
// Object.entries
// Object.keys

let obj0 = {
    username1: 'Santa',
    username2: 'Klaus',
    username3: 'Ted' 
}

Object.keys(obj0).forEach((key, index) => {
    // console.log(key, obj0[key]);
})

Object.values(obj0).forEach(value =>{
    // console.log(value);
})

Object.entries(obj0).forEach(value =>{
    // console.log(value);
})

let arr = Object.entries(obj0).map(value => {
    return value[1] + value[0].replace('username', ' ') 
})
// console.log(arr);

/*
** ES10
*/

//.flat()
const arrayFlat = [1,[2,[3]],4,5]
// console.log(arrayFlat.flat(2));


const entriesFlat = ['bob', 'sally',,,,,,,'cindy'];
// console.log(entriesFlat.flat());

//.flatMap()

const arrayFlatChaos = arrayFlat.flatMap(creature => creature + '9');
// console.log(arrayFlatChaos);


// trimStart()
// trimEnd()

const mail1 = '    test';
const mail2 = 'test2   ';

// console.log(mail1.trimStart());
// console.log(mail2.trimEnd());


//fromEntries

const userProfiles = [['commanderTom', 23], ['derekZelander', 40], ['Tom', 55]]
// console.log(Object.fromEntries(userProfiles));

try {
    
} catch (error) {
    // console.log(error);
}

/*
** Advanced Loops
*/
const basket = ['apples', 'bannanas', 'grapes'];
const detailBasket = {
    appels: 5,
    oranges: 44,
    bannas: 2
}
// for of and for in
for(item of basket){
    // console.log(item);
}

// enumerating -> (iterating for objects)
for(item in detailBasket){
    // console.log(item);
}



/*
** ES2020
*/

//big int 
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(9007199254740991n +2n);

// optional chaining operator
let will_pokemon = {
    pikatchu: {
        species: 'Mouse',
        height: 0.4,
        weight: 6,
        power: 'lightnning'
    }
}

let andreai_pokemon = {
    ikatchu: {
        species: 'Mouse',
        height: 14,
        weight: 226,
        power: ''
    }
}
// small check
let weight3 = will_pokemon?.pikatchu?.weight;
// console.log(weight3);

// Nullish coalescing
let power = andreai_pokemon?.ikatchu?.power ?? 'no power';
// console.log(power);


/*
** Debugging
*/

const flatened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        // console.log(array);
        // console.log(accumulator);
        return accumulator.concat(array)
    }, []);

const flatened1 = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        // debugger;
        return accumulator.concat(array)
    }, []);


/*
** Modules
*/
//JS1
// export const add = (a,b) => a + b;
// export default function add() {
//     return a + b;
// }

// // JS2
// import { add } from './add';
// import add from './add'



