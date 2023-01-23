// Regular expressions 
// Регулярные выражения – мощный способ поиска и замены для строк.

// let array = [
//     'word134strin'
//     ,'14strin'
//     ,'word134345'
//     ,'wordstrin13434564'
// ]

// for (let elem of array){
//     req = /\d+/
//     console.log(elem.match(req)[0])
// }

// ------------------------------------
// Метод match() - возвращает массив данных , в котором определяется найденного совпадения в маске

// let string = 'hello world'
// let reg = /lo/
// let result = string.match(reg)
// console.log(result)

// -----------------------------------
// Поиск по группе символов
// 
//  \w            - латинские буквы и диапазон чисел от  - 0 до 9 _
//  \d            - только диапазон чисел от 0 до 9 
//  \s            - только пробел
//  \W            - НЕ латинские буквы и диапазон чисел от  - 0 до 9 _
//  \D            - НЕ диапазон чисел от 0 до 9 
//  \S            - НЕ  пробел
//  [abcABC123]   - пользовательский набор символов
//  .             - любой символ
// [.]            - экранирование спец.символов
// или \.         
// ^ (циркумфлекс) - начало страки
// $               - конец строки

// let string = 'hello world'
//  let reg = /\w\w\w\w\w/        --->       hello
//  let result = string.match(reg)
//  console.log(result)

//  let string = 'Hello . world'
//   let reg = /[.]/       ------> .
//   let result = string.match(reg)
//   console.log(result)

// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.

// let phones = [
//     '4235123.123.123',
//     '453.567.9857876',
//     '23.33.22.34',
//     '567.986.423',
//     '123456.4533',
//     '567.90987.5',
//     '12.3323.321',
//     '1234.566777',
//     '655.432.342'
// ]

// let reg = /^\d\d\d\[.]\d\d\d\[.]\d\d\d$/
// let newPhones = []
// for (let elem of phones){
//     if (elem.match(reg) != null){
//         // newPhones.push(elem)
//         newPhones.push(elem.match(reg)[0])
//     }
// }
// console.log(newPhones)


// ---------------------------
// Квантификаторы
//  {n}  - n-oe количество подряд идущих групп символа
//  {n, m} - количество подряд идущих символов от n, до m
//  {n,}     - n или много
// +        - замена {1,} (один или много)
// *        - замена {0,} ( 0 или много)
// ?        - замена {0,1} (0 или 1)


// let string = '567.986.423'
// let reg = /^\d{3}[.]\d{3}[.]\d{3}$/
// let result = string.match(reg)

// console.log(result)


// let string = 'tigran@mai.com.ru'
// let reg = /\w{1,}[@]\w{2,}[.]\w{2,}[.]{0,1}\w{0,}/
// let result = string.match(reg)

// console.log(result)


// let string = 'tigran@mai.com.ru'
// let reg = /\w+[@]\w{2,}[.]\w{2,}[.]?\w+/
// let result = string.match(reg)

// console.log(result)

// ------------------------------------
// Метод split в качестве аргумента может пердавать маску

// Задача: сформировать из строки string массив, элементы которого будут содержать только подстроку test
// let string = 'test1test7test9test20test'

// let result = string.split(/\d+/)

// console.log(result)

// let string = 'привет мой друг '
// console.log(string.split(' '))





// --------------------------
// Деректива break - принудетльная остановка цикла
// while(true){
//     let answer = prompt('2+2=?')
//     if (answer == 4){
//         break
//     }
// }

// '4' == 4         true
// '4' === 4        false


// --------
// for (let elem of array){
//     console.log(elem)
//     if (elem > 6){
//         break
//     }
// }

// Важно! Ответ: 
// 5
// 6
// 7

// -----------------

// for (let elem of array){
//     if (elem > 6){
//         break
//     }
//     console.log(elem)
// }

// Важно! Ответ: 
// 5
// 6

// ----------------
// Деректива continue - принудетльно переходит к следующей итерации

// let array = [5,6,7,8,9,10]

// for (let elem of array){
//     if (elem == 8){
//         continue
//     }
//     console.log(elem)
// }

// for (let elem of array){
//     if (elem != 8){
//         console.log(elem)
//     }
// }