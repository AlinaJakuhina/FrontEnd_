// Отсортируйте массив в рандомном порядке
let array = [1,2,3,4,5,6,7,8,9,10]

// let result = array.sort(()=> 0.5 - Math.random())
// let result = array.sort(()=> Math.random() - Math.random())
// console.log(result)

// currentElem secondElem

// currentElem > secondElem    1(положительное число)
// currentElem < secondElem   -1(Отрицательное число)
// currentElem == secondElem   0(ноль)



// Метод Find() - возвращает элемент массива по условию колбэка

// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Steven', salary: 5000},
//     {id: 3, name: 'Neena', salary: 450},
//     {id: 4, name: 'Wolyam', salary: 10000},
//     {id: 5, name: 'Jonh', salary: 799},
//     {id: 6, name: 'Clark', salary: 2222},
// ]

// let result = users.find(value => value.salary < 1000)
// console.log(result)

// пример поиска по ИНДЭКСУ
// let result = users.find((value, index) => index > 1 && value.salary < 5000)
// console.log(result)

// findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1
// let result = users.findIndex((value) => value.id == 5000)
// console.log(result)

// -------------------------------------
// 1.Задача 
// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33

// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]

// let result = users.find((value) => value.id / 2 && value.age < 33)
// console.log(result)

// -------------------------------------

// Метод some() и every()
// Метод some() определяет существует ли хотя бы 1 элемент , который соответствует колбек условию, возвращает булевый тип!(true , false)

// let users = [
//         {id: 1, name: 'Alex', salary: 1000},
//         {id: 2, name: 'Steven', salary: 5000},
//         {id: 3, name: 'Neena', salary: 450},
//         {id: 4, name: 'Wolyam', salary: 10000},
//         {id: 5, name: 'Jonh', salary: 799},
//         {id: 6, name: 'Clark', salary: 2222},
//     ]

// let result = users.some((valeu) => valeu.id == 2)
// let result = users.some((valeu) => valeu.salary > 5000)
// let result = users.some((value)=> value.id == 100)
// console.log(result)

// Метод every() определяет все ли элементы удолтворяют условию колбека возвращает булевый тип!(true , false)

// let result = users.every((value)=> value.id > 0) - true
// let result = users.every((value)=> value.id == 1) - false
// console.log(result)

// -------------------------------------
//  2. Задача - Решите следующие задачи: 
// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0

// let data = [
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//     {id : 4, goods: 'Ракетки', count: 30, price: 100},
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000}
// ]
// 1) 
// let result = data.some((value)=> Math.sqrt(value.price) % 1 == 0) 
// 2) 
// let result = data.every((value)=> value.count != 0)
// console.log(result)


// ---------------------------------------

// Повторить метод some(), сформировав функцию some2(array, callback)
// Функция должна вернуть булевый тип


// let data = [
//         {id : 2, goods: 'Самокат', count: 1, price: 3500},
//         {id : 3, goods: 'Ролики', count: 15, price: 6000},
//         {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//         {id : 4, goods: 'Ракетки', count: 30, price: 100},
//         {id : 1, goods: 'Велосипед', count: 5, price: 2000}
//     ]

// function some2(array, callback){
//     for (let elem of array){
//         if (callback(elem)){
//             return true
//         }
//     }
//     return false
// }

//     // Должен вернуть true
//     console.log(some2(data,(elem) => elem.price > 1000))
//     // Должен вернуть false
//     console.log(some2(data,(elem) => elem.id == 10))

// =========================================================================

// TASKS //

// Дан массив с числами 

// let numbers = [3, -10, 7, 0, -50, 67, -47, 4, 564];

// 1) Сформировать массив, в который попадут все положительные числа, заканчивающиеся на 7

// const positive_numbers = numbers.filter(el => el > 0 &&  el % 10 === 7);
// console.log(positive_numbers)

// 2. Написать программу, высчитывающую количество положительных чисел в массиве => 5

// const positive_nums = numbers.filter(el => el > 0);
// const positive_nums_count = positive_nums.length;

// console.log(positive_nums_count)

// Дан массив с числами
// let numbers2 = [4, 16, -5, 9, -81, 100, -49];

// 3. Сформируйте массив из положительных чисел. Извлеките из каждого значения квадратный корень. Отсортируйте полученные числа в массиве в порядке возрастания.
// => [2, 3, 4, 10]

// const result = numbers2
//                     .filter(el => el > 0)
//                     .map(el => Math.sqrt(el))
//                     .sort((a, b) => a - b)
// console.log(result)


// 4. Дан массив с разными типами данных,
// Сформировать массив из строк. Если елемент не строка, подставить вместо него строку 'not a string'

// let elements = [true, 'hello', 'apple', 4, undefined, 'banana', -7];

// const strings = elements.map(el => typeof el === 'string' ? el : 'not a string');
// console.log(strings)



// Дан массив с числами
// const nums = [1, 2, 3, 4]; 
// 5. Найти среднеарифметическое значение => 2.5

// const avg_num = nums.reduce((prev, next) => prev + next, 0) / nums.length;

// console.log(avg_num);



// Дан массив с объектами

const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
  ];
  
  // 6. Пройтись по массиву методом forEach() и вывести каждый элемент массива в консоль
  
  // users.forEach(el => console.log(el));
  
  // 7. Получить из всех объектов значения age и сформировать из них массив чисел users_age => [20, 12, 46, 30]
  
//   const users_age = users.map(el => el.age);
//   console.log(users_age)
  
  
  // 8. Сформировать массив из users, которые зарабатывают больше 700
  
//   const rich_users = users.filter(el => el.salary > 700);
//   console.log(rich_users);
  
  // 9. Добавьте в конец массива users объект со следующей информацией:
  // {
  //   first_name: 'Anton',
  //   last_name: 'Bogomolov',
  //   age: 19,
  //   salary: 300
  // }
  
//   console.log(users);
  
//   users.push({
//     first_name: 'Anton',
//     last_name: 'Bogomolov',
//     age: 19,
//     salary: 300
//   });
  
//   console.log(users);
  