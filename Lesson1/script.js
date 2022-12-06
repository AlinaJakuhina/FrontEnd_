//DOM - Document Object Model

// 1) id
// 2) class
// 3) tag
// 4) selector h2.mn

//1) ID - getElementById

// let, const, var

// document = {
//};

let head = document.getElementById("heading");
// console.log(head);
head.innerText = "Я уже знаком(а) с DOM";
// поменяли текст

// innerText vs innerHtml

// 2) class

// let i = [1,2,3];
// i[0];

// let obj = {
// name: "Name"
//}

// obj.name // dote notation
// obj[name] // bracket notation

let hello = document.getElementsByClassName("hello");

// HTMLCollection

// for, while, do while

//for in - index
//for of - element

for (let i = 0; i < hello.length; i++) {
  //0, 1, 2
  hello[i].innerText = "Привет!";
}

for (let p of hello) {
  p.innerText = "Привет!!!";щ
}

for (let index in hello) {
  hello[index].innerText = `${index}` + "Hello!";
}

let arr = [];

for (let element of hello) {
  arr.push(element.textContent); // return new length of array
}

// dote notation(.) / bracket notation [];

let obj = {
  name: "Name",
};
for (let i = 0; i < hello.length; i++) {
  obj[i] = hello[i].textContent;
}

console.log(obj.name);
obj.age = 23;
let n = 5;
delete obj[n];

console.log(obj);

// console.log(arr);

// let single = arr.pop();

// console.log(arr);

// shift - удаляет в начале
// unshift - добавляет в начале

arr.shift();
arr.unshift("New 1", "New 2");

// console.log(arr);

// 3) тег

//конкатенация/ интерполяция
let lis = document.getElementsByTagName("li");
for (let li in lis) {
  // lis[li].innerText = li + "text";
  lis[li].innerText = `${li}text`;
}

//4) selector
// CSS selector - id, class, tag
// querySelector() -
// querySelectorAll();

let items = document.querySelectorAll("li");
for (item in items) {
  items[item].innerText = `New ${item}text`;
}

//element.textContent

// camal case - specialItems
// snake case - special_items

let special_items = document.querySelectorAll("li.special");
//HTMLCollection
for (let index in special_items) {
  special_items[index].innerText = `This is ${index} special item`;
}

let first_li = document.querySelector("li.special");
first_li.innerText = "I am first li";

// let array = ["a","b","c","d"];
// for(let index of array) {
//     console.log(index);
// }

// setAttribute

let images = document.querySelector("img.second");
images.setAttribute(
  "src",
  "https://naturecanada.ca/wp-content/uploads/2018/10/bow-valley_shutterstock_1933103-1-300x300.jpg"
);

// for (let single_img of images) {
//   single_img.setAttribute(
//     "src",
//     "https://naturecanada.ca/wp-content/uploads/2018/10/bow-valley_shutterstock_1933103-1-300x300.jpg"
//   );
//   single_img.setAttribute("alt", "Nature");
// }
