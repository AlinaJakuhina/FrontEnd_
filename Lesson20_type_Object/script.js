//  Тип данных Объект

// let obj = {name: 'Alina', age: 32}

// let obj1 = {
//     name: 'Alina',
//     age: 30,
//     isJob: false,
//     test1: [1,2,3,4],
//     test2: {
//         string: 'somestring'
//     }
// }
// console.log(obj1)

// let obj = {
//     name:'Alina',
//     age:30
// }
// console.log(obj.age + 200) ---> 230

// let obj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5,
// }

// console.log(obj[0])

// Добавление нового свойство/ перезапись существующее сво-во

// Object.salary = 1000       добавление 
// console.log(Object)

// Удаление сво-во (оператор delate)

// delete.obj.age   удаление сво-во объекта

// ---------------------
// Особенности delete у массива
// let array = [10,1,2,3,4]
// delete array[1]
// console.log(array)
// [ 10, <1 empty item>, 2, 3, 4 ] - удаляет значение, оставляя сво-во

// ---------------------
// Циклы по объектам

// let obj = {
//          name:'Alina',
//          age:30,
//          salary: 3000
//      }

// for (let key in obj){
//     // console.log(key)
//     console.log(key , obj[key])
// }

// name Alina
// age 30
// salary 3000
// key       - значение ключей 
// obj[key]  - значение сво-ств


// Задача 1 
// Используя цикл, выведите все значения объекта с числовым набором данных.

// Пример:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1,
// }

// for(let key in obj){
//     if(typeof obj[key]== 'number'){
//         console.log(obj[key])
//     }
// }


// Результат:
// 1
// 3
// 1

// Задача 2.
// Используя цикл, выведите значения сво-св, у которых 
// значение ключа завершатся на четное число. 

// Пример:
// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1
// }

// for(let key in obj){
//     if(key[key.length -1] %2 == 0){
//         console.log(obj[key])
//          }
//     }

// Результат:
// string
// true
// 1
// --------------------------------
// методы класса Object

// let obj = {
//     имя: "Алекс",
//     возраст: 30 лет,
//     зарплата: 2000
// }

// Преобразование объекта в массив
// Object.values(obj) - метод класса Object, который возвращает массив с значениями своевств объекта
// [ 'Алекс', 30, 2000 ]

// Object.keys(obj) - метод класса Object, который возвращает массив с ключами объекта
// [ 'имя', 'возраст', 'заробная плата' ]

// Object.entries(obj) - метод класса Object, который возвращает массив с ключами и значениями объекта (вложенный массив)
// [
// [ 'имя', 'Алекс' ],
// [ 'возраст', 30 ],
// [ 'заробная , 2000 ]
// ]


// -----------------------------
// Object.assign() - метод, позволяющий сделать 1 объект из 2 объектов

// пусть пользователь = {
//     имя: "Алекс",
//     возраст: 30 лет
// }

// пусть задание = {
//     job_id: 'IT',
//     зарплата: 5000
// }

// console.log(Object.assign(пользователь, задание))
// { имя: 'Алекс', возраст: 30, job_id: 'IT', зарплата: 5000 }

// Метод не создает новый объект, а меняет первый аргумент

// console.log (пользователь)
// { имя: 'Алекс', возраст: 30, job_id: 'IT', зарплата: 5000 }

// console.log(работа)
// { job_id: 'IT', зарплата: 5000 }


// ---------------------------------------------------------------

//  1. Создать функцию, которая принимает объект и ключ объекта в качестве аргументов и возвращает значение по этому ключу

 const user = {
   имя: "Олег",
   возраст: 30 лет
 }

 const product = {
   название: "Apple",
   цена: 500,
   страна: "Германия"
 }

 const objValue = (obj, key) => obj[key];

 const key = 'title';

 // console.log(objValue(user, 'firstname')); // 'Oleg'
 // console.log(objValue(user, 'age')); // 30

 // console.log(objValue(product, 'price')); // 500
 // console.log(objValue(product, 'country')); // 'Германия'

 // console.log(product.title);
 // console.log(product[key]);


 // 2. У объекта продукт изменить цену на 700;

 product.price = 700;

 // 3. Продукт объекта увеличить цену на 700;

 // product.price = product.price + 700;
//  product.price += 700;

 // 4. У объекта продукт увеличить цену на 1;

 // product.price = product.price + 1;
 // product.price += 1;
//  product.price++;


 // 5. Дан массив. Проверьте, что массив не пуст - в нем есть хотя бы один объект с свойством salary

 const users = [
   {
     имя: "Иван",
     фамилия: "Иванов",
     возраст: 20 лет,
     зарплата: 500
   },

   {
     имя: "Ольга",
     фамилия: "Петрова",
     возраст: 12 лет,
     зарплата: 250
   },

   {
     имя: "Ирина",
     фамилия: "Александрова",
     возраст: 46 лет,
     зарплата: 1500
   },

   {
     first_name: 'Denis',
     фамилия: "Соколов",
     возраст: 30 лет,
     зарплата: 760
   }
 ];

//  console.log(users[0].salary); // 500
// console.log(users[0].hasOwnProperty('salary')); // true
// console.log(users[0].hasOwnProperty('country')); // false


// 7. Сформировать новый массив. Если у элемента есть свойство зарплаты, подставьте в массив '+', а если нет - '-'

 const salaries = users.map(el => el.salary ? '+' : '-');

 // 8. Узнать количество совершеннолетних пользователей. Вывести число в консоль

 const adults_count = users.filter(el => el.age >= 18).length;

 // 9. Напишите функцию, которая находит объект в массиве пользователей с 30 лет и возвращает этот объект, но со значением 85 лет. Результат вызова функции вывести в консоль
 // {
 // first_name: 'Denis',
 // фамилия: 'Соколов',
 // возраст: 85 лет,
 // зарплата: 760
 // }

 const change_age = () => {
   const target_obj = users.find(el => el.age === 30); // находит объект по условию
   target_obj.age = 85; // у найденного объекта меняется значение свойства age
   return target_obj // возвращает измененный объект
 }


 // 10. Сформировать массив из людей, чье имя начинается на I. В новом массиве увеличить возраст всех на 1. Вывести массив в консоль

 // [
 // {
 // first_name: 'Иван',
 // фамилия: 'Иванов',
 // возраст: 21,
 // зарплата: 500
 // },
 // {
 // first_name: 'Ирина',
 // фамилия: 'Александрова',
 // возраст: 47 лет,
 // зарплата: 1500
 // },
 // ]

//  const change_users = () => {
//    const i_people = users.filter(el => el.first_name.startsWith('I'));
//    для (пусть el из i_people){
//      el.age++
//    }
//    вернуть i_people
//  }