// //    FUNCTION DECLARATION

// hi();
// function  hi() {
//     console.log('Hello');
// }

// const b = 5;
// if (b > 1) {
//     function test() {
//         console.log('test');
//     }
// }
// test();

// //  можно объявлять и до функции и называется HOISTING(hoisting-поднятие на вверх)

// //    FUNCTION EXPRESSION

// newHi();   --->>НЕЛЬЗЯ!!!
// const newHi = function() {
//     console.log('Hello expression');
// };
// newHi();



// let a = 5;
// if(a > 1) {
// newHi = function test() {
//     console.log('test');
//    };
// }
// newHi();


//    ARROW  FUNCTION (стрелочная функция)

// let arrow  = () => {
//     console.log('This is arrow function');
// };
// arrow();

// let arrow = () => {
//     return "Arrow's return";
// };
// let shortArrow = () => "Arrow's return";
// console.log(arrow());
// console.log(shortArrow());

// let sum = (num1, num2) => num1 + num2;
// console.log(sum(5,6));

//   CALLBACK function

// const function1 = function() {
//     console.log("This is function1");
// }

// const function2 = function(call) {
//     console.log("This is function2");
// }

// const function3 = function() {
//     console.log("This is function3");
//}

// let arr = [1, 2, 3, 4, 5];

// function sumArray(arr) {
//     let sum = 0;
//     for (let i= 0; i < arr.lenght; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function arrayWithOdd(arr) {
//     let result = [];
//     for (let i = 0; i < arr.lenght; i ++) {
//         if (arr[i] % 2 !== 0) result.pus(arr[i]);
//     }
//     return result;
// }

// let workWithArray = function (array,callback) {
//     return callback(array);
// }

// console.log(workWithArray([1, 2, 3, 4, 5],sumArray));
// console.log(workWithArray(arr,arrayWithOdd));





//     event Listener - события 
//     addEventListener


// 1) const  btn = document.createElement("button");
// btn.innerText = "Click me";
// document.body.appendChild(btn);

// btn.onclick = function (){
//     console.log("Жмяк");
// };

// btn.onclick = function (){
//     alert("Жмяк");
// };


// 2) 
// const decrement = document.createElement("Button");
// decrement.innerText = "+";
// const increment = document.createElement("Button");
// increment.innerText = "-";
// const p = document.createElement("p");
// p.innerText = 0;
// // console.log(typeof p.textContent);
// let numOfP = +p.textContent;

// // decrement.onclick = function() {
// //     numOfP += 1;
// //     p.innerText = numOfP;
// // }

// decrement.addEventListener("click", () => {
//     p.innerText = +p.textContent +1;
// });

// increment.onclick = function(){
//     p.innerText = +p.textContent -1;
// }
// document.body.append(decrement, p, increment);



// const p = document.createElement("p");
// addEventListener("keydown", (event) => {
//     p.innerText = p.textContent + event.key;
// });

// document.body.append(p);


const strings = [
    "This is some text",
    "You can use event lestener",
    "Future frontend developer",
    "Never give up"
];

for (let string of strings) {
    const p = document.createElement("p");
    p.innerText = string;
    document.body.appendChild(p);
    p.onclick = function () {
        p.innerText = "";
        for(let i = 0; i < string.length; i++) {
            p.innerText = p.textContent + "*";
        }
    };
}