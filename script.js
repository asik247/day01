// let name ="Asik"
// let age = 20;
// let height = 5.7;
// name = "rimon"
// age = 25;
// height =6
// console.log(name+age+height);
// const name ="Asik"
// const age = 20;
// const height = 5.7;
// name = "rimon"
// age = 25;
// height =6


// console.log(name+age+height);

// Object in const
const students ={
name:'ask',
age:20
}
students.age = 50
console.log(students);
// Array in const
const firends = ['asik','rimon','karim']
firends[0]="kahan"
firends.push("jamal")
firends.unshift("md")
console.log(firends);

// Best Practics 
const numbers = [10,20,30,50]
const newNumbers = [...numbers,101]
console.log(newNumbers);

/**
 * Redeclare kora jai na but value update kore jai (let)
 * Redeclare kora jai na and value update kora oo jai na tobe object/array ar vetore ar value change kore jai (const)
 */