// 1)Даны картинки в виде массива. Напишите цикл, который создает картинки на основе этого массива. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

// const img = [
//     "https://www.gorilladoctors.org/wp-content/uploads/2014/10/empowering2-300x300.jpg",
//     "https://i.pinimg.com/originals/7f/a1/0f/7fa10fdd13baa44a73f0a77ed32e8566.jpg",
//     "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg",
//     "https://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-03.jpg",
//   ];

// global scope
// for(let i = 0; i < img.length; i++) {
//block scope
//     let newImg = document.createElement("img");
//     newImg.setAttribute("src", img[i]);
//     newImg.setAttribute("alt", "Nature");

//     document.body.append(newImg);

//     newImg.click = () => {
//function scope
//         alert(img[i]);
//     };
// }


// 2) Даны числа в виде массива.Напишите функцию ,которая создает параграфы на основе этого массива. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

// let nums = [2, 3, 4, 5, 6];

// function createP(array){
//     for (let num of array) {
//         let p = document.createElement('p');
//         p.innerText = num;

//         document.body.append(p);
//         p.click = () => {
//             p.innerText = p.textContent ** 2;
//         };
//     }
// }
// createP(nums);

// 3) Доработайте предыдущий скрипт. Добавьте к каждому абзацу 2 кнопки. Одна кнопка при клике уменьшает число на единицу, а другая кнопка увеличивает на единицу.

//let nums = [2, 3, 4, 5, 6];

// function createP(array) {
//   for (let num of array) {
//     let div = document.createElement("div");

//     let p = document.createElement("p");
//     p.innerText = num;

//     let increment = document.createElement("button");
//     increment.innerText = "+";

//     let decrement = document.createElement("button");
//     decrement.innerText = "-";

//     div.append(increment, p, decrement);
//     div.classList.add("flex");

//     document.body.append(div);
//     p.onclick = () => {
//       p.innerText = p.textContent ** 2;
//       //   Math.pow(p.textContent, 2)
//       //   Math.sqrt(number);
//     };

//     // console.log(typeof p.textContent);
//     increment.onclick = () => {
//       p.innerText = +p.textContent + 1;
//     };
//     decrement.onclick = () => {
//       p.innerText = p.textContent - 1;
//     };
//   }
// }
// createP(nums);

// 5) У нас есть кнопка в html документе. С помощью скриптов сделайте след. логику:
// 1)добавьте 3 event listener-а на кнопку, которые выводят на экран 1,2,3. (первая функция выводит цифру 1, вторая - 2, и последняя 3),
// 2) Пусть при первом клике на кнопку сработают все 3 функции и при этом func1 и func2 отвяжутся от элемента. И при следующих кликах будет срабатывать только функция func3, которую мы не отвязываем.

// let btn1 = document.createElement("button");
// btn1.innerText = "start";
// let btn2 = document.createElement("button");

// btn2.innerText = "end";
// let p = document.createElement("p");

// document.body.append(btn1, btn2, p);

// btn1.addEventListener("click", () => {
//   document.addEventListener("mousemove", move);
// });

// btn2.addEventListener("click", () => {
//   document.removeEventListener("mousemove", move);
// });

// function move(event) {
//   p.innerText = `X:${event.pageX}  Y:${event.pageY}`;
// }