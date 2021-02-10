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

// reference type



// context
// instantiation