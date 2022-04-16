//TASK 1. Дан массив:
//     const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.
const colors = ['red', 'green', 'blue'];
console.log(colors.length);


//TASK 2. Дан массив:
//     const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

//TASK 3. Дан массив:
//     const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// > Реализуйте решение двумя способами.
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers_2 = [5, 43, 63, 23, 90];
numbers_2.splice(0);
console.log(numbers_2);

//TASK 4. Дан массив:
//     const students = ['Polina', 'Dasha', 'Masha']
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.
const students = ['Polina', 'Dasha', 'Masha'];
students[students.length-1] = "Borya";
students[0] = "Andrey";
console.log(students)

const students_2 = ['Polina', 'Dasha', 'Masha'];
students_2.pop();
students_2.push("Borya");
students_2.shift();
students_2.unshift("Andrey");
console.log(students_2);

//TASK 5. Дан массив:
//     const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.
const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};

for (let i of cats) {
    console.log(i);
};

//TASK 6. 
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = [...evenNumbers, ...oddNumbers];  // evenNumbers.concat(oddNumbers); evenNumbers.push(...oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

//TASK 7.  Дан массив:
//     const binary = [0, 0, 0, 0]
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.
// > [0, 0, 0, 0] -> '0101010'
const binary = [0, 0, 0, 0];
console.log(binary.join('1'));

// ADVANCED level

// TASK 1. Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
};

console.log(isPalindrome('Anna'));
console.log(isPalindrome('Olga'));

// TASK 2.  const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]
// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let sum = 0;
let count = 0;

for (let i of matrix) {
    sum += i.reduce((localSum, el) => localSum + el);
    count += i.length;
};

console.log(sum / count);

//TASK 3.  Дан массив:
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
// Оба массива затем выведите в консоль. 
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

let positiveNumbers = mixedNumbers.filter((el) => el >= 0);
let negativeNumbers = mixedNumbers.filter((el) => el < 0);

console.log(positiveNumbers);
console.log(negativeNumbers);

//TASK 4. Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
// Далее написать алгоритм который берет все числа из исходного массива, возводит их 
// в куб и записывает в новый массив. В конце вывести оба массива в консоль.
let myArr = [];

for (let i = 0; i <= Math.random() * 10 + 5; i++) {           // длина массива от 5 до 15 по формуле Math.random() * (max - min) + min
    myArr.push(Math.round(Math.random() * 200 - 100));       // числа в массиве от -100 до 100
};

let myNewArr = myArr.map((el) => Math.pow(el, 3));          // или el*el*el

console.log(myArr);
console.log(myNewArr);

