/*
**  Types:

    Number
    boolean
    String
    undefined
    numm
    Symbol
    Object
*/

// past by reference and past by value

// by value
let a = 5;
let b = a;
b++;
console.log(a,b);


// by refernce
let arr1 = [1,2,3,4,5];
let arr2 = arr1;

arr2.push(32);
console.log(arr1, arr2);

// clone array
let arr3 = [].concat(arr2);
arr3.push(232);
console.log(arr3);

// clone object
let obj1 = {a: 'a', b: 'b', c: 'c'}
let obj2 = Object.assign({}, obj1);
let obj3 = {...obj1};

obj1.c = 5;
obj3.b = 55;

console.log(obj1);
console.log(obj2);
console.log(obj3);

// clone deep object
let obj11 = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try to clone'
    }
};
let obj22 = Object.assign({}, obj11);
let obj33 = {...obj11};
let objCloneDeep = JSON.parse(JSON.stringify(obj11))

obj1.c = 5;
obj3.b = 55;
obj11.c.deep = 'hahaha';

console.log(obj11);
console.log(obj22);
console.log(obj33);
console.log(objCloneDeep);


// type coercion
console.log(1 == '1');
console.log(1 === '1');