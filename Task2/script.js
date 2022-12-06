// 1. В div с классом cards_container создать карточку с тремя параграфами - First name: Alex, Last name: Ivanov, Age: 47

const cards_container = document.querySelector('.cards_container');
const card = document.createElement('div');

const firstNameElem = document.createElement('p');
const secondNameElem = document.createElement('p');
const ageElem = document.createElement('p');

firstNameElem.innerText = 'First name: Alex';
secondNameElem.innerText = 'Last name: Ivanov';
ageElem.innerText = 'Age: 47';

card.append(firstNameElem, secondNameElem, ageElem);
cards_container.append(card);

// 2. Добавить элементу card класс card. По этому классу в стилях добавить свойства: width, border, border-radius, padding, margin, background-color

// 3. Параграфу ageElem задать размер шрифта 24px (сделать это через JS)

ageElem.style.fontSize = '24px';

// Вывести в консоль числа от 25 до 39, используя цикл for

// for (let i = 40; i <= 49; i++) {
//     console.log(i);
// }

// Вывести в консоль четные числа от 60 до 45

for(let i = 60; i >= 45; i--){
    if (i % 2 === 0){
        console.log(i)
    }
}

