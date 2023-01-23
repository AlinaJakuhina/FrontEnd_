//  1. Дан массив numbers. Создать новый массив и поместить в него все отрицательные числа из массива numbers

 let numbers = [3, 54, -1, 78, -13, -155];

 let numbers_negative = numbers.filter(el => el < 0);
 // console.log(numbers_negative);

 // 2. Сформировать новый массив из чисел, кончающихся на 3

 let numbers_on_3 = numbers.filter(el => el % 10 === 3 || el % 10 === -3);
 let numbers_on_3_2 = numbers.filter(el => Math.abs(el) % 10 === 3);

 // console.log(numbers_on_3_2);

 // console.log(Math.abs(4)); // 4
 // console.log(Math.abs(-4)); // 4

 // 3. Узнать количество положительных чисел в массиве

 let numbers_positive = numbers.filter(el => el > 0);
 let positive_nums_count = numbers_positive.length;
 // console.log(positive_nums_count);



 let numbers_2 = [12, 36, 15, 68, 45, 5, 60];

 //4. сформировать новый массив с числами, которые делятся на 5 без остатка

 let numbers_divide_5 = numbers_2.filter(el => el % 5 === 0);

 // console.log(numbers_divide_5);

 // 5. сформировать новый массив с числами, которые делятся на 3 и на 5 без остатка
 // [15, 45, 60]

 let numbers_3_5 = numbers_2.filter(el => el % 3 === 0 && el % 5 === 0);
 // let numbers_3_5 = numbers_2.filter(el => el % 3 === 0 || el % 5 === 0);

 // console.log(numbers_3_5);


 let greetings = ['hello', 'hi', 'good morning', 'good night', 'good afternoon'];

 //6. Сформировать новый массив, в который попадут только строки длиннее 10 символов

 let long_greetings = greetings.filter(el => el.length > 10);

 // console.log(long_greetings);


 let users = [
   ['Ivan', 'Ivanov', 34],
   ['Irina', 'Petrova', 13],
   ['Olga', 'Sidorova', 23],
   ['Anton', 'Orlov', 17]
 ]

 // 7. Сформировать новый массив с совершеннолетними юзерами (>=18)

 let adult_users = users.filter(el => el[2] >= 18);
 // console.log(adult_users);


 let array = ['hello', 15, true, 'hi', 177, 3];

 // 8. Сформировать массив, в который попадут только числовые значения из массива array

 let nums_array = array.filter(el => typeof el === 'number');

 // console.log(nums_array);


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

 let fb_adults = fb_users.filter(el => el.age >= 18);

 // console.log(fb_adults);