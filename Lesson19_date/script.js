// Работа с датой. Экземпляр класса Date.
// ----------------
// Текущий момент времени
// let date = new Date() - возвращает ДАТУ текущего момента времени
// let num = Date.now()  - возвращает количество пройденных милесекунд с 1970 года до момента вызова


// Инициализация даты - создание даты (3 подхода)
// 1-ый 
// let date = new Date('2023-01-20 9:30:00') или ('2023-01-20 9:30:00 GMT') 
// console.log(date)

// 2-ой
// Если указать месяц в виде числа, тогда январь будет 0, а декабрь - 11
// let date = new Date(2023,0,20,9,30)
// console.log(date)

// 3-ий
// Отсчет с 1970 года 1 месяца 1 числа в 00:00

// let date = new Date(0)
// console.log(date) -- > // 1970-01-01T00:00:00.000Z

// let date = new Date(1000 * 60 * 6)
// 1970-01-01T00:06:00.000Z

// let date = new Date((1000 * 60 * 60 * 24 * 365 * 30) + (1000 * 60 * 60 * 24 * 7))
// 2000-01-01T00:00:00.000Z

// ----------------
// Методы даты (компоненты даты)
// --------
// Методы, которые позволяет получить в виде числа любой компонент даты
// let date = new Date('2023-01-20 9:30:00')


// console.log(date.getFullYear())          - год даты (в виде числа)
// console.log(date.getMonth())             - месяц даты (начиная с 0)
// console.log(date.getDate())              - день месяца

// console.log(date.getHours())             - часы 
// console.log(date.getMinutes())           - минуты
// console.log(date.getSeconds())           - секунды
// console.log(date.getMilliseconds())      - милисекунды
// console.log(date)

// -------
// День недели

// console.log(date.getDay())
// 0    - воскресенье
// 1    - понедельник
// 2    - вторник
// 3    - среда
// 4    - четверг
// 5    - пятница
// 6    - суббота

// --------
// Методы, которые позволяет именить дату указав отдельные компоненты
// let date = new Date('2023-01-20 9:30:00')

// Методы, помимо того, что меняют значение даты, еще возвращают количество
// пройденных миллесекунд с 1970 года до значения измененной даты

// date.setFullYear(2030)       
// date.setMonth(11)             
// date.setDate(30)              
// date.setHours(20)             
// date.setMinutes(0)           
// date.setSeconds(0)           
// date.setMilliseconds(0)  

// console.log(date)
// -------------------------
// Задача 1. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

// Большое решение 

// function getWeekDay(){
//     let date = new Date()
//     let day = date.getDay()

//     if (day == 0){
//         console.log('Сегодня воскресенье')
//     } else if (day == 1){
//         console.log('Сегодня понедельник')
//     } else if (day == 2){
//         console.log('Сегодня вторник')
//     } else if (day == 3){
//         console.log('Сегодня среда')
//     } else if (day == 4){
//         console.log('Сегодня четверг')
//     } else if (day == 5){
//         console.log('Сегодня пятница')
//     } else if (day == 6){
//         console.log('Сегодня суббота')
//     }
// }
// getWeekDay()

// ---------------
// Более короткое решение

// function getWeekDay(){
//     let day = new Date().getDay()
//     let array = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
//     console.log(`Сегодня ${array[day]}`)
// }
// getWeekDay()

// -----------------------------
// Из даты в количество милисекунд 
// getTime()

// let date = new Date ('2023-5-10 10:00:00')
// console.log(date.getTime())
// 1683698400000

// -------------------------
// Сравнение дат 

// let date1 = new Date ('2023-5-10 10:00:00')
// let date2 = new Date ('2023-5-10 10:00:00')
// console.log(date1 == date2)     false

// console.log(date1.getTime() == date2.getTime())     true


// ---------------------------
// Из даты в строку

// console.log(date.toLocaleDateString())      5/10/2023
// console.log(date.toLocaleTimeString())      10:00:00 AM
// console.log(date.toLocaleString())          5/10/2023, 10:00:00 AM

// console.log(date.toLocaleString('ru-RU'))   10.05.2023, 10:00:00       ('it-IT' Локализация по коду страны)

// console.log(date.toLocaleString('it-IT',{month: 'long', hour: '2-digit'}))