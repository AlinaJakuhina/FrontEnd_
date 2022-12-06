// 1. В div с классом container добавить 2 параграфа
//  с произвольным текстом (через DOM)

// const container = document.querySelector('.container');

// const par_1 = document.createElement('p');
// const par_2 = document.createElement('p');

// par_1.innerText = 'Hello';
// par_2.innerText = 'Good Morning!';

// container.append(par_1, par_2);


// 2. В div с классом container добавить карточку (div). 
//Внутрь карточки добавить 2 парагафа с произвольным текстом.

const container = document.querySelector('.container');
const greeting = document.querySelector('.greeting');

const card = document.createElement('div');
const second = document.createElement('p');
const three = document.createElement('p');

second.innerText = 'Hello';
three.innerText = 'Good morning';

card.classList.add('card');
greeting.classList.remove('greeting2');

second.style.color = 'red';
second.style.fontSize = "28px";

card.append(second, three);
container.append(card);

// 3. Элементу с классом card добавить следующие стили: 
// border, width, border-radius, background-color, padding, margin