// Task 1 💻 Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

let x = 20;  
let y = 58;  
let z = 42;

console.log(x+y+z);

// #### Task 2 💻

// Создайте переменные:

// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году

//   Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;

let myAgeInSeconds = 25*days*hours*minutes*seconds;
console.log(myAgeInSeconds);

// #### Task 3 💻

//     ```javascript  
//     let count = 42    
//     let userName = \'42\' 
//     ```


// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в
// число. Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName = '42';

console.log(typeof('' + count));
console.log(typeof(String(count)));
console.log(typeof(+userName));
console.log(typeof(Number(userName)));

// #### Task 4 💻

// Имеется три переменные:  
//     ```javascript   
//     let a = 1   
//     let b = 2   
//     let c = "белых медведей" ```

// Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.

let a = 1   
let b = 2   
let c = 'белых медведей';

console.log('' + a + b + ' ' + c);

// #### Task 5 💻

// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и
// посчитайте в ней длинну всех слов из списка:

// - доступ
// - морпех
// - наледь
// - попрек
// - рубило

let d = 'доступ';
let m = 'морпех';
let n = 'наледь';
let p = 'попрек';
let r = 'рубило';

let lengthWords = d.length + m.length + n.length + p.length + r.length;

console.log(lengthWords);

// #### Task 6 💻

// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:     
// `Variable: %variable name% have type: %type variable%`

let first = 1;
let second = '1';
let third = null;

console.log(`Variable: 'first' have type: ${typeof(first)}`);
console.log(`Variable: 'second' have type: ${typeof(second)}`);
console.log(`Variable: 'third' have type: ${typeof(third)}`); // ошибка js 


// #### Task 7 💻

// Запросить у пользователя имя и возраст и вывести их в консоль.

// let name = prompt('Введите имя:');
// let age = prompt('Введите возраст:');

// console.log(`Вас зовут ${name}, вам ${age} лет.`);

// #### Task 1 👨‍🏫

// Поменяйте значение переменных местами не создавая дополнительной
// переменной:  ```javascript     let a = 4     let b = 3 ```

let second_a = 4;
let second_b = 3;

console.log(second_a, second_b);

[second_a, second_b] = [second_b, second_a]

console.log(second_a, second_b);


// #### Task 2 👨‍🏫

// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы
// слов!  

//     ```javascript     
//     let codeWord1 = "обернись";
//     let codeWord2 = "неужели";
//     let codeWord3 = "огурцы";
//     let codeWord4 = "липкие";
//     let codeWord5 = "?!"; ```

// Создайте переменную **`cipher`** и поместите туда необходимые символы'.

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let myList = [codeWord1, codeWord2, codeWord3, codeWord4, codeWord5];
let cipher = '';

for (let i of myList) {
    cipher += i[1];
};

console.log(cipher)

