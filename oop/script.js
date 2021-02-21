// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         console.log('attack with ' + elf.weapon); 
//     }
// }
// console.log(elf.attack());


// // factory Functions
// createElf = (name, weapon) => {
//     return{
//         name: name,
//         weapon: weapon,
//         attack(){
//             return 'attack with ' + weapon
//         }
//     }
// }
// const peter = createElf('Peter', 'stones');
// console.log(peter.attack());
// const sam = createElf('Sam', 'fire');
// console.log(sam.attack());


// // Prototype Interherince
// const elfFeunctions = {
//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }

// createElf = (name, weapon) => {
//     return{
//         name,
//         weapon
//     }
// }
// const jan = createElf('Jan', 'stones');
// jan.attack = elfFeunctions.attack;
// console.log(jan.attack());

// const jo = createElf('Jo', 'fire');
// jo.attack = elfFeunctions.attack;
// console.log(jo.attack());


// //Object.create()
// const elfFuncStore = {
//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }

// createElfFunc = (name, weapon) => {
//     let newElf = Object.create(elfFuncStore)
//     newElf.name = name,
//     newElf.weapon = weapon
//     return newElf;
// }
// const jann = createElfFunc('Jann', 'wind');
// console.log(jann.attack());

// const jon = createElfFunc('Jon', 'earth');
// console.log(jon.attack());


// // Constructor Functions
// function CreateDragon (name, weapon) {
//     this.name  = name;
//     this.weapon = weapon;
// }
// CreateDragon.prototype.attack = function(){
//     return 'attack with ' + this.weapon
// }

// const pi = new CreateDragon('PIII', 'wind');
// console.log(pi.attack());


// const Dragon1 = new Function('name', 'weapon', `this.weapon = weapon`)
// const sarah = new Dragon1('Sarah', 'fireworks')
// console.log(sarah);


// // class

// class Fee {
//     constructor(name, weapon){
//         this.name =  name,
//         this.weapon = weapon
//     }
//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }
// const Ari = new Fee('Ari', 'Water');
// console.log(Ari.attack());

// /* this */ 

// // new binding this
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person('Manu', 55)
// console.log(person1);

// // implicit binding
// const person2 = {
//     name: 'Karen',
//     hi() {
//         return 'hi ' + this.name;
//     }
// }
// console.log(person2.hi());

// // explicit binding
// const person3 = {
//     name: 'Karen',
//     hi: function() {
//         return 'hi ' + this.setTimeout;
//     }.bind(window)
// }
// console.log(person3.hi());

// // arrow function
// const person4 = {
//     name: 'Karennn',
//     hi: function() {
//         var inner = () => {
//             console.log('hi ' + this.name);
//         }
//         return inner()
//     }
// }
// console.log(person4.hi());


// // inheritence

class Character{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character{
    constructor(name, weapon, type){
        super(name, weapon);
        this.type = type
    }
}

class Orge extends Character {
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort(){
        return 'strongest fort in the World';
    }
}



const dolby = new Elf ('Dolby', 'cloth', 'house')
console.log(dolby);
const shrek = new Orge('Shrek', 'club', 'green');
console.log(shrek.makeFort());