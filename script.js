// console.log("HELLO MIR")
// console.log('HELLO MIR')
// console.log(5)
//log - вывести (терминал)
//loging - выведение кода
/* 
Несколько 
строк
*/

//Одна строка


/** ПЕРЕМЕННЫЕ - бутылку, коробка */

/** LET */
/** undefined - неопределенность */
// let name = 'Katya'
// console.log(name)
// name = 'Inkar'
// console.log(name)

/** CONST - запрещает менять изначальное значение */
// const num = 10
// console.log(num);
// num = 15 //ОШИБКА

/** VAR - отпусти и забудь */


/** NESTED VARIABLES */
/**простые переменные пишутся с маленькой буквы  -let cloneEmail*/
/**переменные внешние - const BASE_URL = "какая то ссылка на бэкенд"*/
/**компоненты в react - const Header */

// let email = "olzhasktl362@gmail.com"
// let cloneEmail = email

// console.log(email);
// console.log(cloneEmail);


/** ТИПЫ ДАННЫХ */
//Примитивные типы данных
//STRING - строка (текст): 'слово', "текст"
//NUMBER - цифра: 5, 10
//UNDEFINED - неопределенность: undefined
//BOOLEAN - булевое: true, false

//Непримитивные типы данных
//OBJECT: 
// const user = {
//     name: "Olzhas",
//     surname: "Otep",
//     age: 19
// }
//ARRAY - массив (список)
// const students = ["Inkar", "Olzhas", "Ekaterina", "Dossym"]
//NULL - нулевое - ничего (object)
//let num = null


/**ПРОБЛЕМА НЕ ТИПИЗИРОВАННЫХ ПЕРЕМЕННЫХ */
// let age = 19
// age = 20
// console.log(age)
// age = "какое то слово"
// console.log(age)


/**РАБОТА С ТЕКСТОМ (СО СТРОКОЙ) */
// let str = "Добрый день " + "Инкар"
// let str = "Добрый день" + " " + "Инкар"
// console.log("Добрый день", "Инкар");

// let hello = "Добрый день"
// let name = "Инкар"
// console.log(hello, name);

//ОСОБЕННОСТЬ: ТЕКСТ + ЦИФРА
// console.log("Возраст: " + 19); //будет строка
// console.log(19 + " - возраст");

//ПРОВЕРКА НА ТИПЫ ДАННЫХ
//typeof - оператор
// console.log(typeof "Привет");
// console.log(typeof 6);
// console.log(typeof true);

//ОБРАТНЫЕ КАВЫЧКИ
// let ageText = "Возраст"
// console.log(`${ageText}: 19`) //"Возраст: "


//NESTED TEXT
// console.log(`Привет: "Доссым"`);
// console.log("Привет: 'Доссым'");
// console.log('Привет: "Доссым"');
// console.log("Привет: \"Доссым\""); //- перед кавычками \

// console.log("Первое\nВторое");


/** РАБОТА С БРАУЗЕРОМ */
//alert - уведомление
// const name = "Nurgul"
// alert('Привет, ' + name)

//prompt - уведомление, но требует от юзера ответ
// const userAnswer = prompt('Введите ваше имя: ')
// console.log(userAnswer);

//Практика - Анкета
//Нужно спросить у юзера его Имя, Фамилия, Отчество, Возраст, Образование, Место работы
//Имя: Олжас
//Фамилия: Отеп
//P.S. Использовать prompt

// console.log('Имя: Олжас\n', 'Фамилия: Отеп\n');

// const firstName = prompt('Ваше Имя: ')
// const lastName = prompt('Ваше Фамилия: ')
// const middleName = prompt('Ваше Отчество: ')
// const age = prompt('Ваше Возраст: ')
// const education = prompt('Ваше Образование: ')
// const workPlace = prompt('Ваше Место работы: ')

// console.log(`Имя: ${firstName}`);
// console.log(`Фамилия: ${lastName}`);
// console.log(`Отчество: ${middleName}`);
// console.log(`Возраст: ${age}`);
// console.log(`Образование: ${education}`);
// console.log(`Место работы: ${workPlace}`);

//Конвертация строки в цифру
// console.log(age); 
// console.log(Number(age)); //Not a Number


/** NUMBERS */
// console.log(5 + 5 + 5);

//Арифметические операторы
// "+" - суммирование
// "-" - минус
// "*" - умножение
// "/" - деление
// "%" - модуль (остаток)
// "**" - степень

// console.log(10 + 17);
// console.log(5 - 15);
// console.log(5 * 3);
// console.log(3 / 2);
// console.log(3 % 2);
// console.log(4 ** 3);

//Practice 1
//Попросить у юзера две цифры, далее вывести их сумму
//Пример: Сумма 5 и 6 равна 11

// const num1 = Number(prompt("Введите первую цифру: "))
// const num2 = Number(prompt("Введите первую цифру: "))

// console.log(`Сумма ${num1} и ${num2} равна ${num1 + num2}`)

//float - 1.453141


/** BOOLEAN */
// true, false

//Операторы сравнения
//> - больше
//< - меньше
//>= - больше или равно
//<= - меньше или равно
//== - равно
//=== - равно
//!= - не равно
//!== - не равно

// console.log(5 > 1);
// console.log(7 < 12);
// console.log(12 >= 12);
// console.log(12 <= 12);
// console.log(5=="5"); //не рекомендую
// console.log(5==="5"); //рекомендую - лайк


//Логические оператор
// "&&" - и
// "||" - или
// "!" - не

// console.log(true && true);
// console.log(true && false && true);
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(!true);

// const userAge = Number(prompt("Введите ваш полный возраст: "))
// console.log(userAge >= 18);

// console.log(userAge >= 14 && userAge <= 18); //интервал

// //20
// console.log(userAge >= 14 || userAge <= 18); //true || false = true
// //5
// console.log(userAge >= 14 || userAge <= 18); //false || true = true
// //5
// console.log(userAge >= 14 && userAge <= 18); //false || true = false


/** УСЛОВИЯ */
// const userAge = Number(prompt("Введите ваш полный возраст: "))
// let reponse = ""

// if (userAge >= 14 && userAge <= 18) {
//     reponse = "Вы подросток!"
// }
// else if (userAge<0){
//     reponse = "Возраст должен быть больше 0"
// }
// else if (userAge>150){
//     reponse = "Вы увы не бессмертный!"
// }
// else {
//     reponse = "Вы не подросток!"
// }

// console.log(reponse);

// const username = "Inkar"
// const age = 18

//BLOCK-SCOPED VARIABLES

// if(username==="Inkar"){
//     const response = "Вы Инкар"

//     if(age >= 18){
//         console.log(response);
//         console.log(`${username} совершетнолетний/яя`);
//     }
//     else{
//         console.log(response);
//         console.log(`${username} не совершетнолетний/яя`);
//     }
// }
// else{
//     const response = "Вы не Инкар"
//     console.log(response);
// }


//ПРОВЕРКА НА ПИТЬЕ СПИРТНЫХ НАПИТКОВ
// const age = Number(prompt("Введите ваш возраст"))
// const country = prompt('Ваша страна проживания?')

// const canPersonDrink = age >= 21
// const isCountryKazakhstan = country==="Казахстан"

// if(isCountryKazakhstan){
//     alert('Вам можно пить')
// }
// else if(canPersonDrink){
//     alert('Вам можно пить!')
// }
// else{
//     alert('Вам нельзя пить!')
// }


//ПРОВЕРКА НА ТО ЧТО ТЫ МОДЕЛЬ
// const gender = prompt("Ваш пол")
// const height = Number(prompt("Ваш рост"))
// const weight = Number(prompt("Ваш вес"))
// const age = Number(prompt("Ваш возраст"))
// const skinColor = prompt("Ваш цвет кожи")

// if(gender === ("Мужчина" || "Male" || "Мужской" || "М")){
//     console.log("Вы мужчина");
//     if(age >= 14){
//         console.log("Вы подходите по возрасту");
//         if(height >= 180){
//             console.log("Вы подходите по росту");
//             if(weight>=65 && weight<=95){
//                 console.log("Вы подходите по весу");
//                 console.log("ВЫ ПОДХОДИТЕ");
//             }
//             else{
//                 console.log("Вы не подходите по весу");
//             }
//         }
//         else{
//             console.log("Вы не подходите по росту");
//         }
//     }
//     else{
//         console.log("Вы не по возрасту");
//     }
// } 
// else if(gender === ("Женщина" || "Female" || "Женский" || "Ж")){
//     console.log("Вы женщина");
//     if(age >= 14){
//         console.log("Вы подходите по возрасту");
//         if(skinColor==="Темный" || "Черный" || "Black"){
//             console.log("ВЫ ПОДХОДИТЕ");
//         }
//         else if(height >= 170){
//             console.log("Вы подходите по росту");
//             if(weight>=45 && weight<=75){
//                 console.log("Вы подходите по весу");
//                 console.log("ВЫ ПОДХОДИТЕ");
//             }
//             else{
//                 console.log("Вы не подходите по весу");
//             }
//         }
//         else{
//             console.log("Вы не подходите по росту");
//         }
//     }
//     else{
//         console.log("Вы не по возрасту");
//     }
// } 
// else{
//     console.log("ВЫ НЕ ПОДХОДИТЕ");
// }

// const age = 17

// if(age>=18){
//     console.log("Вы совершеннолетний");
// }
// else{
//     console.log("Вы не совершеннолетний");
// }

// const result = age>=18 ? "Вы совершеннолетний" : "Вы не совершеннолетний"

//If else practice
// 1
// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5,
//  то результат будет '0', если больше -  '1'. Выведите результат в консоль.

// const userNumber = Number(prompt("Введите число"))
// let result
// if(userNumber < 5){
//   result = 0
// }
// else{
//   result = 1
// }
// const result = userNumber < 5 ? 0 : 1
// console.log(result);

//2
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

// const grade = Number(prompt('Введите балл'))
// const projectsAmount = Number(prompt('Введите кол-во проектов'))
// let finalGrade

// if(grade > 90 || projectsAmount > 10) {
//     finalGrade = 100;
// }
// else if(grade > 75 && projectsAmount > 5){
//     finalGrade = 90
// }
// else if(grade > 50 && projectsAmount > 2){
//     finalGrade = 75
// }
// else{
//     finalGrade = 0
// }

// console.log('Финальная оценка: ' + finalGrade);


/** ЦИКЛЫ */
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");
// console.log("Привет");

// ЦИКЛ FOR (FOR LOOP)
// for(let i = 0; i < 20; i++){
//     // i = 19
//     console.log("Привет");
//     // i = 20
// }

// 1. переменную итерации (начальное значение)
// 2. условие,
// 3. шаги (измение перменной)

// ЦИКЛ WHILE (WHILE LOOP)
// let i = 0
// while(i < 0){ //0 < 20
//     i++; //19
//     console.log(i); //20
// }

// ЦИКЛ DO WHILE (DO WHILE LOOP)
// let i = 0

// do {
//     console.log(i);
// }while(i < 0)


//PRACTICE
//1
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной по одному. Результат (1 шт.) вывести в консоль.
// for(let i = 0; i < 20; i++){
//     console.log("Привет");
// }

// let number = 17
// for(let i = 0; i < 10; i++){
//     number++
//     console.log(number);
// }
// console.log(number);

//2
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10".
//  Иначе выводить "Не равно 10"

// for(let i = 0; i < 10; i++){
//     let number = Number(prompt('Введите число: '))
//     console.log(number);
//     number++
// }
// let i = 0
// while(i < 20){ //0 < 20
//     i++; //19
//     console.log(i); //20
// }

// let number1 = Number(prompt('введите число'))
// let number2 = Number(prompt('введите число'))
// let number3 = Number(prompt('введите число'))
// let number4 = Number(prompt('введите число'))
// let number5 = Number(prompt('введите число'))
// let number6 = Number(prompt('введите число'))

// console.log(number1);
// console.log(number2);
// console.log(number3);
// console.log(number4);
// console.log(number5);
// console.log(number6);

// for(let i = 0; i < 9; i = i + 2) { //0 1 2 3 4 5 6  //0 2 4 6 8  //0 3 6
//     let permanentNumber = Number(prompt('введите число')) //создание переменной
//     console.log(permanentNumber); //вывод переменной в консоль
//     //удаление
// }

// Память - permanentNumber


//FUNCTION
// const username = "Inkar227"
// const username2 = "Katya889"

// console.log(`Username: ${username}`)
// console.log(`Username: ${username2}`) //DRY - Dont Repeat Yourself

// function showUsername(functionUsername) { //() - параметры (аргументы)
//     console.log(`Username: ${functionUsername}`)
// }
// showUsername("Inkar227")
// showUsername("Katya889")
// showUsername("Olzhas") //запустить или вызвать
// showUsername("Dossym")

// showUsername = 97808
// showUsername("Dossym")

// const showUsername2 = (functionUsername) => {
//     console.log(`Username: ${functionUsername}`)
// }
// showUsername2("Dossym")

// showUsername2 = 4324


// console.log() //метод - уже есть, они привязаны к какому то обьекта
// console.log(console);

//PRACTICE
//1
// 0 1 2 3 4 5 6

// 0 1 4 9 16 24 36

// function squareNumbers(initialNum, finalNum){
//     for(let i = initialNum; i <= finalNum; i++){
//         console.log(i**2);
//     }
// }

// squareNumbers(2, 7)
//100, 101, 104

//2
// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. 
// Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция 
// получения случайного числа в диапазоне min - max. 
// Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию

// function checkIfNumIsGreaterThanTen(number) {
//     if (number >= 10){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log( checkIfNumIsGreaterThanTen(10) ) //true
// const result2 = checkIfNumIsGreaterThanTen(15) //true
// const result3 = checkIfNumIsGreaterThanTen(7) //false

// console.log(true)
// console.log(true)
// console.log(false)

//RETURN

// function sumTwoNumbers(num1, num2){
//     return num1 + num2
//     // console.log(num1 + num2)
// }

// sumTwoNumbers(1, 2) //в консоле - 3 (в случае с console.log) 
// sumTwoNumbers(1, 2) //в коде - 3 (в случае с return)

// console.log(sumTwoNumbers(5, 7));

// const someNumber = sumTwoNumbers(5, 7) + 10 //12 + 10
// console.log(someNumber);

// function isGoden(weight, height, isHaveDisease, age){
//     // if(age > 18){
//     //     if(isHaveDisease === false){
//     //         if(weight >= 70){
//     //             if(height >= 160){
//     //                 console.log("Ты годен");
//     //             }
//     //         }
//     //     }
//     // }

//     if(age < 18){
//         return "Вам меньше 18"
//     }
//     else if(isHaveDisease === true){
//         return "Вы больны"
//     }
//     else if(weight < 70){
//         return "Вы худой"
//     }
//     else if(height < 160){
//         return "Вы коротышка"
//     }
//     return "Ты годен"
// }

// const result = isGoden(80, 184, true, 20)
// console.log(result);
// console.log(isGoden(80, 184, true, 20));


// OBJECTS
// const username = "Demidog03"
// const name = "Olzhas"
// const age = 20
// const password = "qwerty123"

// const username2 = "Username777"
// const name2 = "Olzhas"

// const user1 = { //ссылка на обьект
//     // key: value //поле (ключ): значение
//     username: "Demidog03",
//     name: "Olzhas",
//     age: 20,
//     password: "qwerty123"
// }

// const user1Clone = { //ссылка на обьект
//     // key: value //поле (ключ): значение
//     username: "Demidog03",
//     name: "Olzhas",
//     age: 20,
//     password: "qwerty123"
// }

// const text1 = "hello"
// const text2 = "hello"

// console.log(text1 === text2) //true
// console.log(9 === 9) //true;
// console.log(user1 === user1Clone); //false

// const user2 = {
//     username: "dsgdsg",
//     name: "gdsgs",
//     age: 20,
//     password: "sgsgds"
// }

// console.log(user1.username);
// console.log(user1["username"]);


// const studentScore = { //ссылка - qwerty123
//     studentName: "Olzhas",
//     grade: 98
// }

// //Mutable - изменяемый
// const studentScore2 = studentScore //ссылка - qwerty123

// studentScore2.grade = 90

// console.log(studentScore2 === studentScore);
// console.log(studentScore2);
// console.log(studentScore);


// const studentScore = { 
//     studentName: "Olzhas",
//     grade: 98
// }

// // console.log(studentScore);
// // console.log(JSON.stringify(studentScore));
// // console.log(JSON.parse(JSON.stringify(studentScore)));

// // const studentScoreClone = JSON.parse(JSON.stringify(studentScore))
// const studentScoreClone = { ...studentScore } //диструктуризация
// studentScore.grade = 90
// console.log(studentScore);
// console.log(studentScoreClone);

// console.log(studentScoreClone === studentScore);


//1
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000,
//     Katya: 9000
// }

// console.log(engineers.Den);

// console.log("Зарплата Den составляет 1000$");

// for (const key in engineers) {
//     // console.log(key); //поле
//     // console.log(engineers[key]); //engineers["Steve"] значения
//     console.log(`Зарплата ${key} составляет ${engineers[key]}$`);
// }

// // console.log(Object.keys(engineers));
// // console.log(`Зарплата ${Object.keys(engineers["Den"])} составляет ${engineers["Den"]}$`);


// ARRAYS
// const numbers = [4353, 3453, 5345, 32352, 43232] //length = 3, maxIndex = 2
// const names = ["Olzhas", "Dossym", "Nurgul", "Inkar", "Katya"]

// // console.log(numbers[4]);
// // console.log(new Object('TEXT'));

// // for (const value of numbers) { //value (значение)
// //     console.log(`Значение: ${value}`); //1 - значение
// //     console.log(`Индекс: ${numbers.indexOf(value)}`); //0 - индекс
// // }

// // console.log(numbers.length);

// for (let i = 0; i < numbers.length; i++) {
//     //0 1 2 3 4
//     console.log(`Индексу ${i} соответствует цифра ${numbers[i]}`); //numbers[1]
// }


/**ARRAYS ADVANCED */

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). 
// Функция должна вернуть новый массив из элементов arr, 
// но в нем должны содержаться элементы, которые больше или равны
// (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


//MUTABLE - мутабельный (изменяемый)
// let arr = [1, 2, 3]
// arr = [2, 3]
// console.log(arr);

//IMMUTABLE - не мутабельный (неизменямый)
// const arr = [1, 2, 3]
// const arrClone = [...arr] //диструктуризация
// arrClone.shift()
// console.log(arr);
// console.log(arrClone);

// function filterFor(funcArr, a){
//     const newArr = [] //пустой массив
//     // for (const value of funcArr) { //цикл для массиво (цикл элементов)
//     //     if(value >= a){ //элемент >= переменнай a
//     //         newArr.push(value) //если условие подходит то в пустой массив добавляем элемент
//     //     }
//     // }

//     //callback - функция внутри параметров

//     funcArr.forEach(function (value) {
//         if(value >= a){
//             newArr.push(value)
//         }
//     })
//     return newArr
// }

// const newArr1 = filterFor([5, 4, 3, 8, 0], 5) //const newArr1 = newArr
// const newArr2 = filterFor([7, 9, 1, 4, 2], 3) //const newArr1 = newArr
// console.log(newArr1);
// console.log(newArr2);

//2
// вернуть новый массив с обновленными данными - квадраты всех чисел
// const arr = [2, 5, 7, 1, 3]
// const newArr = [4, 25, 49, 1, 9]

// если кол-во элементов не меняется - размер массива
// const arr = [2, 5, 7, 1, 3]
// const newArr = arr.map(function (element) { //создаст новый массив
//     return value*2
// })
// console.log(newArr);


//Улучшенная версия с помощью анонимной стрелочной функции
// const arr = [2, 5, 7, 1, 3]
// const newArr = arr.map((element) => element ** 2 ) //создаст новый массив
 
// console.log(newArr);

// //() => value //() => {return value}


//MAP и ТЕРНАРНЫЙ ОПЕРАТОР
//MAP не меняет размер массива
// const arr = [2, 5, 7, 6, 3]

//1
// const newArr = arr.map((element) => {
//     if(element % 2 === 0){
//         return element ** 2
//     }
//     else {
//         return null
//     }
// } ) 

//2
//`` - обратные кавычки
// const newArr = arr.map((element) => (element % 2 === 0) ? element ** 2 : null ) 
// console.log(newArr);

//STRING IS ARRAY?
// console.log(new String("hello"));

// const name = "Katya"
// console.log(name[0]);

// 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.
// uppercase - заглавная буква

// ucFirst("hello")
// "Hello"

// function ucFirst(str){
//     const firstLetter = str[0].toUpperCase()
//     // console.log(str.slice(1, 3));
//     // //1 index = 2 буква, 2 index = 3 буква

//     const slicedText = str.slice(1)
//     return firstLetter + slicedText
// }

// const uppercaseText1 = ucFirst("hello")
// const uppercaseText2 = ucFirst("dossym")
// console.log(uppercaseText1);
// console.log(uppercaseText2);


// 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

//Привет Инкар BaDWorD = true

function checkSpam(str){
    const lowercaseStr = str.toLowerCase()
    //"привет инкар badword"
    if(lowercaseStr.includes("badword") || lowercaseStr.includes("xxx")){
        return true
    }
    else{
        return false
    }
}


// const arr = [1, 2, 3]
// console.log(arr.includes(2));
console.log(checkSpam("Привет Инкар XXX"));