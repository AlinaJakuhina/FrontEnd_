// forEach
// Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания.
// Синтаксис

// массив.forEach(function(элемент, индекс, массив) {
// 	код, который выполнится для всех элементов
// })

// const array = [1, 32, 3];
// array.forEach((Element) => console.log(Element + 2));

// SORT
// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.

// const array  = [1, 5, 0, 10, 15];
// array.sort();
// console.log(array);

// 1 => '1'
// 5 => '5'
// 10 => '10'

// по возрастанию
// Array((a,b) => a - b)
// console.log(Array);

//  по убыванию
// Array((a,b) => b - a )
// console.log(Array);


// 1. Задача. Отсортировать массив с товарами по значению id.
// const products = [
//     { id: 1, title: "велосипед", price: 45000 },
//     { id: 2, title: "самокат", price: 15000 },
//     { id: 3, title: "сноуборд", price: 20000 },
//     { id: 4, title: "лыжи", price: 22000 },
//   ];

//  products.sort((a,b) => a.id - b.id);
//  console.log(products) -> по возрастанию

//  products.sort((a,b) => b.id - a.id);
//  console.log(products) -> по убыванию


// function sumTwoSmallestNums(numbers) {
//     numbers.sort((a,b) => a - b);
//     console.log(numbers);
//     return numbers[0] + numbers[1];
// }
// console.log(sumTwoSmallestNums([7, 9, 5, 1, 8]));

// function sumTwoSmallestNums(numbers) {
//      numbers.sort((a,b) => a - b);
//      console.log(numbers);
// const newArr = numbers.filter((Element) => Element > 0);
// console.log(newArr);
// if (!newArr.lenght) {
//     return 0;
// } else if (newArr.lenght === 1) {
//     return newArr[0];
// }
// return newArr[0] + newArr[1];
// }
// console.log(sumTwoSmallestNums([-1, -2, -5, -6, 5, 6]));


// REDUCE

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

// Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

// accumulator - начальное значение
// currentValue - Текущий обрабатываемый элемент массива.

// index  (Необязательный) - Индекс текущего обрабатываемого элемента массива.
// array  (Необязательный) - Массив, для которого была вызвана функция reduce.
// initialValue  (Необязательный) - Необязательный параметр. 
// Объект, используемый в качестве первого аргумента при первом вызове функции callback.


// Синтаксис
// array.reduce(callback[, initialValue])

// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);
// // expected output: 10

// const arr = [1, -2, -3, 4, 5, -6];
// let result = arr.reduce((sum,elem) => {
//     if (elem > 0) {
//         return sum + elem;
//     } else {
//         return sum;
//     }
// }, 0);

// console.log(result);

// Задача 2. Используя метод reduce найти сумму четных чисел массива.

// function evenSum(array){
// let result = arr.reduce((sum,elem) => {
//     if (elem % 2 === 0 && elem > 0) {
// 		return sum + elem;
// 	} else {
// 		return sum;
// 	}
// } , 0);
// return result;
// }
// console.log(evenSum(arr))

// Задача 3. Используя метод reduce найти наибольшее число массива.

// const arr = [1, -2, -3, 4, 5, -6];
// let result = arr.reduce((sum, current) => sum < current ? current : sum);
// console.log(result);

// let maxNumber = arr.reduce((max, current) => { 
//     return max > current ? max : current; 
// }); 
// console.log(maxNumber);

// Задача 4. Используя метод reduce найти объект товара с самой высокой ценой.

// const array = [
//     { id: 1, price: 45000 },
//     { id: 2, price: 50000 },
//     { id: 3, price: 11000 },
//     { id: 4, price:  5000 },
//   ];

//   const hightPrice = array.reduce((sum, current) => sum.price > current.price ? sum : current
//   );
//   console.log(hightPrice);

// Задача 5. Преобразовать массив из объектов, чтобы в итоге массив состоял из объектов со свойствами id, title, price, max_mark.

// const products = [
//     { id: 1, title: "велосипед", price: 45000, marks: [4, 5, 3, 5] },
//     { id: 2, title: "самокат", price: 15000, marks: [4, 4, 5, 4] },
//     { id: 3, title: "сноуборд", price: 20000, marks: [3, 3, 2, 3] },
//     { id: 4, title: "лыжи", price: 22000, marks: [4, 4, 3, 4] },
//   ];

// products.forEach((element) => {
//     element.sum_marks = element.marks.reduce((acc, current) => acc + current);
//     delete element.marks;
// });
// console.log(products);

// products.forEach((element) => {
// element.max_marks = element.marks.reduce((acc, current) => acc > current ? acc : current);
// delete element.marks;
// });
// console.log(products);


// =============================================================================== //


// Task 1
// forEach() - ничкго не возвращает, проходит по массиву и выполняет указанную функцию щдин раз с каждым элементом
//  filter() - возвращает новый массив , в который попадут только те элементы из старого массива, которые прошли проверку.
//  map() - возвращает новый массив ,  в который попадают все элементы из старого массива, но после того, как к ним применится указанная функция.



// 1. Задан массив. Вывести в консоль каждый элемент массива

// const numbers = [3, 12, 87, 4, 556, -9, -50];

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }

// numbers.forEach(el => console.log(el));

// 2. Задан массив. Сформировать новый массив, в который попадут числа больше 0

// let positive_numbers = [];
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] > 0) {
//     positive_numbers.push(numbers[i])
//   }
// }

// let positive_numbers_2 = []
// numbers.forEach(el => {
//   if(el > 0){
//     positive_numbers_2.push(el)
//   }
// });

// const positive_numbers_3 = numbers.filter(el => el > 0);

// неправильный способ решения задачи
// const positive_numbers_4 = numbers.map(el => { 
//   if(el > 0){
//     return el
//   }
// });


// 3. Сформировать новый массив, в который попадут все числа, умноженные на 2

// let numbers_mult = [];
// numbers.forEach(el => numbers_mult.push(el * 2));

// let numbers_mult2 = numbers.map(el => el * 2);

// console.log(numbers_mult2);


// 4. Дан массив со строками. Сформировать новый массив с теми же строками, но все буквы должны быть в верхнем регистре

// const greetings = ['hello', 'hi'];

// const greetings_up = greetings.map(el => el.toUpperCase());

// console.log(greetings_up);

// 5. Сформировать новый массив. Если число положительное, умножить его на два. А если отрицательное, то оставить как есть.

// const new_numbers = numbers.map(el => el > 0 ? el * 2 : el);


// 6. Сформировать новый массив с теми же строками, но если строка длиннее 3 символов, то вернуть ее в верхнем регистре

// const new_greetings = greetings.map(el => el.length >= 3 ? el.toUpperCase() : el);

// 7. Дан массив random с разными типами данных. Сформировать новый массив, в который попадут только числовые значения из массива random

// const random = [5, 'hello', 77, true, 12, false];

// const random_filter = random.filter(el => typeof el === 'number');

// 8. Сформировать новый массив. Если элемент число, то вернуть этот элемент. В ином случае - подставить вместо элемента -1

// const random_map = random.map(el => typeof el === 'number' ? el : -1);


// ==============================================================================