const user_form = document.querySelector(".user_form");
const click_btn = document.querySelector('.click_btn');
const users_container = document.querySelector(".users_container");

// user_form.addEventListener('submit', (event) => {
//     event.preventDefault(); // запрет форме обнавлять страницу после отправки
//     // event.target - ссылка на элемент, с которым происходит событие
// // console.log(event.target.firstName);

// const firstName = event.target.firstName.value;
// const lastName = event.target.lastName.value;

// const userCard = document.createElement('div');
// const firstNameElem = document.createElement('p');
// const lastNameElem = document.createElement('p');

// firstNameElem.innerText = `First name: ${firstName}`;
// lastNameElem.innerText = `Last name: ${lastName}`;
    
// userCard.append(firstNameElem, lastNameElem);
// users_container.append(userCard);

// event.target.firstName.value = '';
// });


// click_btn.addEventListener('click', (event) => {
//     console.log(event.target);
// })

// // 2 variant
// const user = {
//     first_name: "Alina",
//     last_name: "Jakuhina",
//     age: 33
// }
// const { first_name, last_name, age } = user;

// console.log(first_name);
// console.log(last_name);
// console.log(age);

// 3 varint

user_form.addEventListener('submit', (event) => {    
    event.preventDefault();

const { firstName, lastName } = event.target;

const userCard = document.createElement('div');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');


firstNameElem.innerText = `First name: ${firstName.value}`;
lastNameElem.innerText = `Last name: ${lastName.value}`;

userCard.append(firstNameElem, lastNameElem);
users_container.append(userCard);
});