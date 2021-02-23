// // Exercise

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
//   }
//   const history1 = [];
//   const compose = (f, g) => (...args) => f(g(...args))
//   const pipe = (f, g) => (...args) => g(f(...args))
//   const purchaseItem  = (...fns) => fns.reduce(compose);
//   const purchaseItem2  = (...fns) => fns.reduce(pipe);
//   purchaseItem2(
//     addItemToCart,
//     applyTaxToItems,
//     buyItem,
//     emptyUserCart,
//   )(user, {name: 'laptop', price: 60})
//   // purchaseItem(
//   //   emptyUserCart,
//   //   buyItem,
//   //   applyTaxToItems,
//   //   addItemToCart
//   // )(user, {name: 'laptop', price: 50})
//   function addItemToCart(user, item) {
//     history1.push(user)
//     const updatedCart = user.cart.concat(item)
//     return Object.assign({}, user, {cart: updatedCart});
//   }
  
//   function applyTaxToItems(user) {
//     history1.push(user)
//     const {cart} = user;
//     const taxRate = 1.3;
//     const updatedCart = cart.map(item => {
//       return {
//         name: item.name,
//         price: item.price*taxRate
//       }
//     })
//     return Object.assign({}, user, { cart: updatedCart });
//   }
  
//   function buyItem(user) {
//     history1.push(user)
//     const itemsInCart = user.cart;
//     return Object.assign({}, user, { purchases: itemsInCart });
//   }
//   function emptyUserCart(user) {
//     history1.push(user)
//     return Object.assign({}, user, { cart: [] });
//   }
  
//   function refundItem() {
  
//   }
  
//   function getUserState() {
  
//   }
  
//   function goBack() {
  
//   }
  
//   function goForward() {
  
//   }

let user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

addItemHAndler = (item) => {
    user.cart.push(item);
}

addTaxHandler = (item) => {
    let id = item.id
    for (const cartItem of user.cart) {
        if (cartItem.id === id) {
            cartItem.price = cartItem.price * 0.97;
        }
    }
}

moveItemToPurchases = (item) => {
    let id = item.id
    user.purchases.push(item)
    let filterd = user.cart.filter( el => el.id != id)
    user.cart = filterd;

}

emptyCartHandler = () => {
    user.cart = []
}

const tv = {
    name: 'Samsung',
    price: 100,
    id: 1
} 
const player = {
    name: 'Mediaon',
    price: 200,
    id: 2
} 
const board = {
    name: 'Vue',
    price: 300,
    id: 3
} 


addItemHAndler(tv);
addItemHAndler(player);
addItemHAndler(board);

addTaxHandler(board);
moveItemToPurchases(player);
// emptyCartHandler();

console.log(user);


// no side effects
// input --> output

const array = [1,2,3]
mutateArray = (arr) => {
    arr.pop()
}
mutateArray2 = (arr) => {
    arr.forEach(item => {
        arr.push(1)
    });
}
// console.log(array);
mutateArray(array);
// console.log(array);
mutateArray2(array);
// console.log(array);

// no side effects
const array1 = [1,2,3]
removeLAstItem = (arr) => {
    const newArray = [].concat(arr)
    newArray.pop()
    return newArray
}
multiplyByTwo = (arr) => {
    return arr.map(item => item*2)
}

console.log(removeLAstItem(array1));
console.log(multiplyByTwo(array1));
console.log(array1);


/*
*   Idempotence
*/

notGood = (num) => {
    console.log(num);
    return Math.random(num)
}
console.log(notGood(5));

/**
 * Imperative vs Declerative
 */

 for (let i = 0; i < 100; i++) {
    //  console.log(i);
 }

 [1,2,3].forEach(item => console.log(item));

 /**
  * Immutability
  */

const obj = {name: 'Marv'}
clone = (obj) => {
    return {...obj}
}

updateName = (obj) => {
    const obj2 = clone(obj)
    obj2.name = 'Nana'
    return obj2;
}

const updatetObject = updateName(obj);
console.log(updatetObject);
console.log(obj);


/**
 * HOF
 */
 const hof = (fn) => fn(5);
 console.log(hof(a = (x) => x)); 

/**
 * Closure
 */
const closure = () => {
    let count = 0;
    return increment = () => {
        count++;
        return count;
    }
}

const incrementFn = closure()
console.log(incrementFn());
console.log(incrementFn());

/**
 * currying
 */
const multiply = (a,b) => a*b;
console.log(multiply(4,3));

const curriedMultiply = (a) => (b) => a*b;
const multiplyByFive = curriedMultiply(5);
console.log(multiplyByFive(4));

/**
 * Partial Application
 */
const multiply1 = (a,b,c) => a*b*c;
const partialMultiplyByFive = multiply1.bind(null, 5)
console.log(partialMultiplyByFive(4, 10));

const multiplyByFive1 = curriedMultiply(5);
console.log(multiplyByFive1(4));

/**
 * Cpmpose
 */

 const compose = (f, g) => (data) => f(g(data))
// Pipe
const pipe = (f, g) => (data) => g(f(data))


 multiplyByThree = (num) => num * 3;
 makePositive = (num) => Math.abs(num)

 const multiplyByThreeAndAbsolute = compose(multiplyByThree, makePositive)

 console.log(multiplyByThreeAndAbsolute(-50)); 
