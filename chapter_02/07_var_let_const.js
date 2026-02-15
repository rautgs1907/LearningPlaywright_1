// var let const

//Var is function scoped
var a = 10; // Global Scope
console.log(a);

// // Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}
printHello();

//Let is block scoped
// let does NOT allow re-declaration in the same scope
// let b = 40; 
// let a = 10;
// let a = 10;


let a = 10;
a = 20;
console.log(a); // 20

var nn = "Pramod";
let nn = "Pramod";

//Const is block scoped
// Constant variable
const pi = 3.14;
console.log(pi);
pi = 3.14159; 