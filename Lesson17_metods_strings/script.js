// --------------------------
// Метод строки split(sep) - преобразовывает строку в массив по разделителю.
// let string = 'Привет мой друг'
// console.log(string.split(' '))

// Метод join(sep) - преобразовывает из массива в строку по разделителю.
// let array = ['Пр , ивет,  мой , друг']
// console.log(array.join(' '))


// Метод slice (n,m) - позволяет сформировать подстроку от n индекса до m (не включительно!!)индекса строки.Возвращает новую строку.
// let a = 'Привет мой друг'

// console.log(a.slice(7,10))    'мой'
// console.log(a.slice(0,6))     'Привет'
// console.log(a.slice(11,15))   'друг'
// console.log(a.slice(11))      'друг'
// console.log(a.slice(-4))      'друг'

// console.log(a.slice(a.indexOf('друг'), a.indexOf('друг') + 'друг'.length+1))

// ---------------------------

// let a = [1,2,3,4,5,6,7,8,9]

// console.log(a.slice(-4))
// console.log(a.slice(0,4))

// ---------------------------
// Задана почта в переменной email. 
// 1)Выведите в консоль только логин почты.
// Пример:
//  let email = 'thegreat@mail.com'
//  let email = 'tigran@rambler.net'

// Результат: thegreat
// Результат: tigran
// 2) Выведите в консоль только логин домена (mail, rambler)
// 3) Выведите в консоль только доменную зону (com, net)


// решение:
// 1) console.log(email.slice(0,8))
// 1)console.log(email.slice(0,email.indexOf('@')))

// 2) console.log(email.slice(0,6))
// 2) console.log(email.slice(email.indexOf('@')+1, email.indexOf('.')))

// 3) console.log(email.slice(email.indexOf('.')+1))


// ---------------------------------

// Задача 2. 
// Задача строка string. Сформируйте новую подстроку по следующему правилу: 
// если строка начинается на date: в этом случае оставьте только дату
// если в строка не начинает на date - оставить строку в исходном виде

// Пример:
// 1) 
//   let string = 'date: 2022.10.10'
// 2) 
// let string = '2010.06.06'

// решение 1
// if(string.startsWith('date:')){
//         console.log(string.slice(string.indexOf(':')+2))
//     }else {
//         console.log(string)
// }

// решение 2
// if(string.startsWith('date:')){
//     console.log(string.replace('date: ', ''))
// }else {
//     console.log(string)
// }

// Результат: 
// 1) '2022.10.10'
// 2) '2010.06.06'

// ---------------------------------

// Задан массив phones
// Сформируйте новый массив newPhones. 
// Если телефон начинается на +7 - он должен оказаться в новом массиве

// Пример:
// let phones = ['+7975644911','8975644944','+7975644999','+7975644945']

// let result = phones.filter(elem => elem.startsWith('+7')) 
// console.log(result)

// Результат:
// ['+7975644911','+7975644999','+7975644945']



// -----------------------------------------

// Метод indexOf()- возвращает индекс найденного элемента массива. или -1 если элемент не найден.  В качестве аргумента передает значение искомого элемента массива.
// array.indexOf( searchElement, fromIndex )

// let a = ['раз', 'два', 'три', ['четыре']]
// console.log(a.indexOf('три'))        2
// console.log(a.indexOf('чет'))       -1

// ------------================================-----------------------------


// Методы массива, которые используются для строк в том числе

// ------
// Метод slice() - возвращает новый массив с указанным диапазоном элементов.

// let a = [1,2,3,4,5,6,7,8,9]

// console.log(a.slice(0,4))       [ 1, 2, 3, 4 ]
// console.log(a.slice(5))         [ 6, 7, 8, 9 ]
// console.log(a.slice(-2))        [ 8, 9 ]

// -------
// Метод indexOf() - возвращает индекс найденого элемента массива. 
// В качетсве аргумента передает ЗНАЧЕНИЕ искомого элемента массива

// let a = ['раз', "два","три",['четыре']]

// console.log(a.indexOf('три'))    2
// console.log(a.indexOf('чет'))    -1

// console.log(a.indexOf(['четыре']))  -1

// Почему indecOf() возвращает -1 с аргументом ['четыре']

// function indexOf(string){
//     for (let elem in array){
//         // elem = ['четыре']
//         // ['четыре'] == ['четыре'] false
//         if (array[elem] == string){
//             return elem
//         }
//     }
//     return -1
// }

// --------
// let a = [1,2,3]
// let b = [1,2,3]

// console.log(a == b) 
// Результат работы будет false т.к. переменные хранят путь в область ячейки памяти.

// --------
// let a = [1,2,3]
// let b = a

// console.log(a == b)  
// // true 
// // переменные а и b ссылаются на один и тот же массив

// b.push(4)

// // Выше указанные изменения унаследуются для выражения a и b одновременно,
// //  посльку они ссылаются на один массив

// console.log(a)
// console.log(b)

// ---------------------
// Пример, когда метод indexOf() может вернуть индекс вложенного массива
// let b = ['fore'];
// let arr = ['one', 'two', 'three', b];

// console.log(arr.indexOf(b));

// ------------------
// Метод includes() - возвращает булевый тип и проверяет, 
// существует ли заданное значение среди всех элементов массива

// let a = ['раз', "два","три",['четыре']]

// console.log(a.includes('раз'))       true
// console.log(a.includes(['четыре']))  false

// ------------------
// Задание: создать копию массива

// let a = [1,2,3]

// let b = a.slice(0)
// let b = a.map(elem => elem)
// let b = a.filter(() => true)

// Оптимальный способ (короткий)
// let b = [...a]

// console.log(a,b , a==b)




