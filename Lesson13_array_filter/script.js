// Методы массива
// filter() - это метод , который возвращает новый отфильтрованный массив

// function handler (callback) {
//     if (' '){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// handler()

// let array = [1,2,3,4,5,6,7,8,9]
// let result = array.filter((value) => value < 5 )
// console.log(result)

// 1. Задача
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:
// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]

// Результат:
// [true,false,true]

// решение 1
// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]
// let result = array.filter((value)=> typeof value == 'boolean')
// console.log(result)

// решение 2 
// let result = []
// for (let value of array){
//     if (typeof value == 'boolean'){
//         result.push(value)
//     }
// }
// console.log(result)

// Задача 2
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:
// let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']

// Результат:
// ['Арбуз','Антена','Арбуз']

// let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']
// let result = array.filter((value)=> value [0] == 'А')
// console.log(result)

// let array = ['Один', 'Два', 'Три', 'Четыре']
// console.log(array.filter((value, index) => index % 2 == 0))

// 3. Дан массив numbers. Создать новый массив и поместить в него все отрицательные числа из массива numbers

// let numbers = [3, 54, -1, 78, -13, -155]
// let result = numbers.filter(el => el < 0)
// console.log(result)

// 4. Сформировать новый массив из чисел, кончающихся на 3

// let numbers_3 = numbers.filter(el => el % 10 === 3 || el % 10 === -3)
// console.log(numbers_3)

// let numbers_3_2 = numbers.filter(el => Math.abs(el) % 10 === 3)
// console.log(numbers_3_2)
//ABS -  Этот метод возвращает абсолютное значение числа, то есть иными словами - если число неотрицательное, то его и возвращает, а если отрицательное - отбрасывает знак "минус".

// 3. Узнать количество положительных чисел в массиве

// let numbers = [3, 54, -1, 78, -13, -155]
// let posetive = numbers.filter(elem => elem > 0)
// let posetive_count = posetive.length
// // console.log(posetive.lenght)

//4. сформировать новый массив с числами, которые делятся на 5 без остатка

// let numbers_2 = [12, 36, 15, 68, 45, 60];
// let result = numbers_2.filter(el => el % 5 === 0)
// console.log(result)

// 5. сформировать новый массив с числами, которые делятся на 3 и на 5 без остатка

// let numbers_2 = [12, 36, 15, 68, 45, 60]
// let result = numbers_2.filter(el => el % 2 || el % 5 === 0)
// console.log(result)

//6. Сформировать новый массив, в который попадут только строки длиннее 10 символов

// let greetings = ['hello', 'hi', 'good morning', 'good night', 'good afternoon'];
// let result = greetings.filter(el => el.length > 10 )
// console.log(result)

// 7. Сформировать новый массив с совершеннолетними юзерами
// let users = [
//     ['Ivan', 'Ivanov', 34],
//     ['Irina', 'Petrova', 13],
//     ['Olga', 'Sidorova', 23],
//     ['Anton', 'Orlov', 17]
//   ]
//   let result = users.filter(el => el[2] >= 18)
//   console.log(result)


// 9. Сформировать новый массив с совершеннолетними юзерами (>=18)
let fb_users = [
    {
      id: 1,
      name: 'Anton',
      age: 18
    },
    {
      id: 2,
      name: 'Irina',
      age: 50
    },
    {
      id: 3,
      name: 'Olga',
      age: 8
    },
    {
      id: 4,
      name: 'Oleg',
      age: 90
    }
  ]

  let fb_adults = fb_users.filter(el => el.age >= 18)
  console.log(fb_adults)