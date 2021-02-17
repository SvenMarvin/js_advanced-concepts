// invoke functon
one = () => {
    console.log(1);
};
one();
one.call();

const four = new Function(console.log(4));

four();

// Functions are first class citizens in JS
// 1
var stuff = function () {
    
}

// 2
function a(fn) {
    fn()
}

a(function (){console.log('fn')})

// 3
function b() {
    return function c() {
        console.log('bey');
    }
}
b()()
var d = b()
d()

////////////////
// Do not inilisation a function inside a loop -> better outside
function a() {
        
}
for (let i = 0; i < 5; i++) {
    a()
}

/*
** HOF --> Highter Order Function
*/

// function()
function letAdminLogin() {
    let array = [];
    for (let i = 0; i < 100000000; i++) {
        array.push(i)        
    }
    console.log('Access Successful');
}
function letEvaLogin() {
    let array = [];
    for (let i = 0; i < 100000000; i++) {
        array.push(i)        
    }
    console.log('Access Successful');
}
letAdminLogin()
letEvaLogin()

// function(a,b)
function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 100000000; i++) {
        array.push(i)        
    }
    console.log(`Access Successful ${user}`);
}

letUserLogin('Phillip');

// HOF
function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)        
    }
    return true
}

const giveAcessTo = (name) => {
    `Àcess Greanted to ${name}`
}

function letPerson(person, fn) {
    if (person.level === 'admin') {
        fn(5000000)
    }else if (person.level === 'user') {
        fn(10000)
    }
    console.log(giveAcessTo(person.name)); 
}


letPerson({level: 'user', name: 'Tim'}, authenticate)