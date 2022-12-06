// 1) Вот документ с таблицей и формой.
//     Как найти?…

//     1.	Таблицу с id="age-table".
// let table1 = document.querySelector('#age-table');
// let table = document.getElementById();
// let table2 = document.querySelector('table');
// let table3 = document.getElementsByTagName('table')[0];

// console.log(table);
// console.log(table1);
// console.log(table2);
// console.log(table3);

// //     2.	Все элементы label внутри этой таблицы (их три).

// let label = document.querySelectorAll('#age-table label');
// console.log(label);

// //     3.	Первый td (со словом «Age»).

// let td1 = document.querySelector('td');
// let td2 = document.getElementsByTagName('td')[0];
// console.log(td1);
// console.log(td2);

// //     4.	Форму с class="search".

// let form1 = document.querySelector('.search');
// let form2 = document.getElementsByClassName('search')[0];

// console.log(form1);
// console.log(form2);

// //     5.	Первый input в этой форме.

// let firstInput = document.querySelector('input');
// let firstInput2 = document.getElementsByTagName('input')[0];

// console.log(firstInput);
// console.log(firstInput2);

// //     6.	Последний input в этой форме.

// let InputList = document.querySelectorAll('input');
// let lastInputList = InputList[InputList.length -1];


// 2) Совет от жизни!
//     Создайте div.
//     Внутри заголовок с вашим ФИ. (h3)
//     А так же добавьте чистосердечный совет в виде параграфа.


// let div = document.createElement('div');
// let h3 = document.createElement('h3');
// h3.innerText = 'Jakuhina Alina';

// let p = document.createElement('p');
// p.innerText = 'Будь добрее , и мир тебе улыбнёться!';
// div.append(h3, p);

// document.body.appendChild(div);

// 3) Напишите интерфейс для создания списка.
//     Для пункта:
//     1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
//     2. Создавайте элемент <li> и добавляйте его к <ul>.
//     Сделайте с помощью цикла 5 пунктов.


// let ul = document.createElement('ul')

// for(let i = 0; i < 5; i++) {
//     let li = document.createElement('li');

//     let li_text = prompt("Введите текст ");
//     li.innerText = li_text;

//     ul.appendChild(li);
// }



//4) Дан массив из объектов, в котором хранятся породы собак и их возраст:
//Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

    let dogs = [
        {
          breed: "golden retriever",
          age: 7,
        },
        {
          breed: "labrador retriever",
          age: 4,
        },
        {
          breed: "french bulldog",
          age: 12,
        },
        {
          breed: "beagle",
          age: 6,
        },
        {
          breed: "german shepherd dog",
          age: 2,
        },
        {
          breed: "poodle",
          age: 3,
        },
        {
          breed: "bulldog",
          age: 4,
        },
    ];

for (let i = 0; i < DOMStringList.length; i++){
    let p = document.createElement('p');
    console.log(dogs[i]);
    p.innerText = `${dogs[i].breed}'s age is ${dogs[i].age}`;
    p.setAttribute('id', `k${i}`);
    document.body.append(p);
}