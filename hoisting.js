// // console.log('MSG !!!');
// console.log(x);
// printMessage();

// var x = 5;
// function printMessage() {
//     console.log('Hoisting concept in JS');
// }

// let a = 10;

// function foo() {
//     a = 3;
//     console.log(a);
// }

// foo(a);

// let a = 10;
// a = 20;
// console.log(a);

// function init() {
//     var name = 'Yawar';
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }

// init();

// console.log(x);

// var x = 10;

// const fun = () => {
//     console.log(myVar);
// }

// let myVar = 10;
// // fun();
// var x = 10;

// {
//     var x = 20;
//     console.log(x);
// }
// console.log(x);

// function x() {
//     let a = 10;

//     function y() {
//         console.log(a);
//     }

//     y();
// }

// x();

// function x() {
//     let a = 10;

//     function y() {
//         return a;
//     }

//     console.log(y());
// }

// x();

// function x() {
//     let a = 10;

//     function y() {
//         console.log(a);
//     }

//     return y;
// }

// console.log(x());

// function x() {
//     let a = 10;

//     function y() {
//         console.log(a);
//     }

//     return y;
// }

// const z = x();

// console.log(z());

// function x() {
//     let a = 10;

//     function y() {
//         console.log(a);
//     }

//     a = 50;

//     return y;
// }

// const z = x();

// console.log(z());

// function makeFunc() {
//     let name = 'Mozilla';
//     function displayName() {
//         console.log(name);
//     }
//     name = 'Eureka';
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// var obj = {
//     val: 100,
// };

// function fun() {
//     console.log(this.val);
// }

// fun();

// var obj = {
//     val: 100,
// };

// function fun() {
//     console.log(this.val);
// }

// obj.fun();

// var obj = {
//     val: 100,
// };

// function fun() {
//     console.log(this.val);
// }

// fun.call(obj);

// var obj = {
//     val: 100,
// };

// function fun(a) {
//     console.log(this.val + a);
// }

// fun.call(obj);

// var obj = {
//     val: 100,
// };

// function fun(a) {
//     console.log(this.val + a);
// }

// fun.call(obj, 3);

// var obj = {
//     val: 100,
// };

// function fun(a, b, c) {
//     console.log(this.val + a + b + c);
// }

// fun.call(obj, 3, 4, 5);

// var obj = {
//     val: 100,
// };

// function fun(a, b, c) {
//     console.log(a);

//     console.log(b);

//     console.log(c);
// }

// fun.call(obj, [3, 4, 5]);

// var obj = {
//     val: 100,
// };

// function fun(a, b, c) {
//     console.log(this.val + a + b + c);
// }

// fun.apply(obj, [3, 4, 5]);

// var obj = {
//     val: 100,
// };

// function fun(a, b, c) {
//     console.log(this.val + a + b + c);
// }

// const fun2 = fun.bind(obj);

// fun2(1, 2, 3);

// a();
// b();

// function a() {
//     console.log('a called');
// }

// var b = function() {
//     console.log('b called');
// }

// const sayHello = () => {
//     return 'HELLO, ';
// }

// const greetUser = (helloMessage, name) => {
//     console.log(helloMessage() + name);
// }

// greetUser(sayHello,'Yawar');
// console.log(sayHello());

// a();

// b();

// function a() {
//     console.log('inside a');
// }

// var b = function abc() {
//     console.log('inside b');

// };

// a();

// function fun1() {
//     console.log('a');

//     return () => {
//         console.log('b');
//     };
// }

// fun1();

// function fun1() {
//     var a = 10;

//     return () => {
//         a = 20;

//         console.log(a);
//     };
// }

// fun1()();

// function fun1(a) {
//     return () => {
//         a = a + 20;

//         console.log(a);
//     };
// }

// fun1(10)(20);

// function fun1(a) {
//     return (b) => {
//         a = a + b;

//         console.log(a);
//     };
// }

// fun1(10)(30);

// function fun1(a) {
//     const fun2 = (b) => {
//         a = a + b;

//         console.log(a);
//     };
// }

// fun1(10)(30);

// setTimeout(() => console.log('timer1 expired'), 1000);

// setTimeout(() => console.log('timer2 expired'), 0);

// function x(y) {
//     console.log('inside x');

//     y();
// }

// x(function y() {
//     setTimeout(() => console.log('inside y'), 0);
// });

// var fun = a => a

// console.log(fun(a))

// var a =10;
// var student = function(name){

//     this.name = name;
  
//     var printName = () => {
  
//       console.log(this.name)
  
//     }
  
//      printName()
  
//   }
  
//   var yash = new student("yash")
  

const obj = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
}

const newObj = {...obj};
console.log(newObj);
console.log(obj === newObj);

const arr1 = [1, 2, 3];
const arr2 = [3, 5, 6];


const arr3 = [...arr1, ...arr2];
console.log(arr3);
  