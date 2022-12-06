// 1. При клике на кнопку выводится сообщение 'hello' в консоль

const hello_btn = document.querySelector('.hello_btn');
hello_btn.addEventListener('click', () => console.log('hello'));

// 2. При клике на кнопку меняется цвет заднего фона у параграфа

const background_color_btn = document.querySelector('.background_color_btn');
const background_color_change = document.querySelector('.background_color_change');

background_color_btn.addEventListener('click', () => background_color_change.style.backgroundColor = 'green');


// 3. При клике на кнопку цвет фона меняется на черный, а при следующем клике меняется на белый

const black_mode_btn = document.querySelector('.black_mode');

// black_mode_btn.addEventListener('click', () => {
//   let back_color = document.body.style
//   if(back_color.backgroundColor === 'black'){
//     back_color.backgroundColor = 'white'
//   } else {
//     back_color.backgroundColor = 'black'
//   }
// })

black_mode_btn.addEventListener('click', () => {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black'
})


/* const a = 2;
if(a >= 10){
  console.log('а больше 10')
} else {
  console.log('а меньше 10')
}
a >= 10 ? console.log('а больше 10') : console.log('а меньше 10') */


// выражение 1 ? выражение 2 : выражение 3

// в1 - условие
// в2 - что произойдет, если условие верно
// в3 - что произойдет, если условие неверно



// 4. При клике на кнопку выводить содержимое инпута в консоль
const show_text_btn = document.querySelector('.show_text_btn');
const show_text_input = document.querySelector('.show_text');

show_text_btn.addEventListener('click', () => console.log(show_text_input.value));


//5. При клике на кнопку поменять содержимое инпута с ??? на !!!

const change_text_btn = document.querySelector('.change_text_btn');
const change_text_input = document.querySelector('.change_text_input');

change_text_btn.addEventListener('click', () => change_text_input.value = '!!!');

// 6. При клике менять видимость пароля

const visibility_btn = document.querySelector('.visibility_btn');
const visibility_input = document.querySelector('.visibility_input');

visibility_btn.addEventListener('click', () => {
  visibility_input.type = visibility_input.type === 'password' ? 'text' : 'password'
});