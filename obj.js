// const myObj = {
//     name: 'Yawar',
//     age: 25,
//     call: function() {
//         return `Name - ${this.name}, Age - ${this.age}`;
//     }
// };

// console.log(myObj.call());


// Closures 


// function outer() {
//     var name = 'Yawar';

//     function inner() {
//         console.log(`Name - ${name}`);
//     }
//     return inner;
// }

// outer()();


const e = 10;
function sum(a) {
  return function (b) {         // Anonymous function
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));