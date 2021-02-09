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
console.log(moveCommand('right'));