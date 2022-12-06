// 1. Создать кнопку с размерами 30х30 пикс, при каждом нажатии на кнопку увеличивать высоту и ширину на 10 пикс.

// const incr_btn = document.querySelector('.incr_btn');
// let btn_size = 30;
// console.log(btn_size);

// const incr_btn_render = (size) => {
//     incr_btn.style.height = size + 'px';
//     incr_btn.style.width = size + 'px';
//     }

//     incr_btn_render(btn_size);

//     incr_btn.addEventListener('click', () => {
//         btn_size += 10;
//         incr_btn_render(btn_size);
//     })

// 2 вариант решения
//
// const incr_btn = document.querySelector('.incr_btn');
// let btn_size = 30;

// const incr_btn_render = (size) => {
//   incr_btn.style.height = size + 'px';
//   incr_btn.style.width = size + 'px';
// }

// incr_btn_render(btn_size);

// incr_btn.addEventListener('click', () => {
//   btn_size += 10;
//   incr_btn_render(btn_size);
// })


// const a = Math.max (3, 155, 43, 2, 400); // 400 максимальное число
// const b = Math.min (3, 155, 43, 2, 400); // 2 минимальное число 

// const c = Math.ceil(4.28); // 5 ---- потолок 
// const d = Math.floor(4.28); // 4 ---- нижнее округление
// const e = Math.round(4.28); // 4 ---- по правилам матиматики округление

// console.log(c);
// console.log(d);
// console.log(e);


// const f = Math.random(); ---- возврвращает случайное дробное число от 0 до 10;

// 2. Создать кнопку, при клике на которую цвет кнопки меняется на случайный (Math.random()).

const random_btn = document.querySelector('.random_btn');

const getColorNum = () => Math.round(Math.random() * 255);

random_btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()})`
})



// 3. Вывести в консоль случайное целое число от 0 до 10.

let random_num = Math.round(Math.random() * 10);
let random_num1 = Math.floor(Math.random() * 11);

console.log(random_num);
console.log(random_num1);
// console.log(random_num);
// console.log(random_num * 10);
// console.log(Math.round(random_num * 10));

// 4. Вывести в консоль случайное целое число от 10 до 25.

let random_num5 = Math.round(Math.random() * 15 + 10); //двигать на 10 вперёд 
console.log(random_num5);


Math.random() * 15 ; // 0-15
Math.random() * 15 + 10; // 10-25

Math.random() * 30 ;  // 0-30
Math.random() * 30 + 100; // 100 - 130