// Task 1
// Выведи все элементы массива в консоль с помощью метода forEach

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// fibonacci.forEach(function printNum(el) { console.log(el) });
// fibonacci.forEach(el => console.log(el));


// Task 2
// Используя метод map создайте новый массив, на основе массива users, в котором каждый 
// элемент массива будет содержать строку вида: ['member 1: Darya', 'member 2: Masha', ... etc]


// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// const decorUsers1 = users.map(function decorUser(el, index) { return `member ${index+1}: ${el}` });
// console.log(decorUsers1);
// const decorUsers2 = users.map((el, index) => `member ${index+1}: ${el}`);
// console.log(decorUsers2);


// Task 3
// С помощью метода filter создайте новый 
// массив в котором не будет отрицательных чисел.

// const numbers = [7, -4, 32, -90, 54, 32, -21];

// const positiveNums1 = numbers.filter(el => el > 0);
// console.log(positiveNums1);
// const positiveNums2 = numbers.filter(function checkPositive(el) { return el > 0 });
// console.log(positiveNums2);


// Task 4 
// Используя метод reduce получите сумму всех чисел массива.

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// const sum1 = fibonacci.reduce((x, y) => x + y);
// console.log(sum1);
// const sum2 = fibonacci.reduce(function sumNums(x, y) { return x + y });
// console.log(sum2);



// Task 5
// Используя метод find найдите в массиве первое четное число.

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const firstEven1 = numbers.find(el => el % 2 === 0);
// console.log(firstEven1);
// const firstEven2 = numbers.find(function findEven(el) { return el % 2 === 0 });
// console.log(firstEven2);


// Task 1
// Написать функцию конструктор **Student**
// В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
// На основе функции создать 
// минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// Создать массив **students** и поместить в него студентов.
// Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов,
//  которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// **D** - плохой рейтинг и мы не можем дать кредит

// function Student(salary, rate, name) {
//     this.salary = salary;
//     this.rate = rate;
//     this.name = name;

//     this.determineSum = function() {
//         const category = { "A": 12, "B": 9, "C": 6, "D": 0 };
//         return this.salary * category[this.rate];
//     };
// }

// const studentOlya = new Student(2000, "A", "Olya");
// const studentSasha = new Student(3000, "A", "Sasha");
// const studentPasha = new Student(1800, "B", "Pasha");
// const studentSveta = new Student(1900, "C", "Sveta");
// const studentMaks = new Student(2300, "D", "Maks");

// const students = [studentOlya, studentSasha, studentPasha, studentSveta, studentMaks];

// function findTotalCredit(arr) {
//     return arr.reduce((acc, next) => acc + next.determineSum(), 0);
// }

// console.log("Total credit sum is ", findTotalCredit(students));


// Task 2
// Тролли атакуют наш раздел с комментариями!!!

// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев 
// троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую 
// строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// function deleteVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// console.log(deleteVowels("This website is for losers LOL!"));


// Task 3
// Нет истории, нет теории
// В приведенных ниже примерах показано, как написать 
// функцию:
// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> 
// "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```
// Параметр - это строка, которая включает только буквы от a..z и A..Z.

// function accum(str) {
//     const arr = str.toLowerCase().split('');
//     const newArr = arr.map((el, index) => `${el.toUpperCase()}${el.repeat(index)}`);
//     return newArr.join('-');
// }

// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAt"));


// Task 4
// Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, 
// разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// ```javascript

// highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"

// highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```

// > Строка вывода должна состоять из двух чисел,
//  разделенных одним пробелом, при этом наибольшее число должно быть первым.

// 1
// function highAndLow(str) {
//     let arr = str.split(' ');
//     return `${Math.max(...arr)} ${Math.min(...arr)}`;
// }

// 2
// function highAndLow(str) {
//     let arr = str.split(' ');
//     arr.sort((a, b) => a - b);
//     return `${arr[arr.length - 1]} ${arr[0]}`;
// }

// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("1 9 3 4 -5"));


// Task 5
// Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, 
// последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, 
// содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. 
// Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false

// isIsogram("moOse") == false // -- ignore letter case
// ```

// function isIsogram(str) {
//     str = str.toLowerCase();
//     return str.length === new Set(str).size;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));
// console.log(isIsogram(""));


// Task 6
// Считаем коды символов

// Учитывая строку, превратите каждый символ в его код символа ASCII и 
// соедините их вместе, чтобы создать число. Поместите результат в переменную **`total1`**

// Затем замените все числа `7` 
// на число `1` и назовите это число **`total2`**

// После верните разницу между суммой цифр **`total1`** и **`total2`**

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// function countLetters(str) {
//     total1 = str.split('').map(el => el.charCodeAt()).join('');
//     total2 = total1.split('').map(el => el === '7' ? '1' : el).join('');
//     return Number(total1) - Number(total2);
// }

// console.log(countLetters('ABC'));

// Task 7
// Дубликаты

// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой 
// строке равен `(`, если этот символ появляется только один раз в исходной строке, или `)`,
// если этот символ встречается более одного раза в исходной строке. Игнорируйте использование
// заглавных букв при определении дубликата символа.


// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```

function findDublicates(str) {
    str = str.toLowerCase().split('');
    counts = {};
    for (let i of str) {
        counts[i] = (counts[i] || 0) + 1;
    }
    const result = str.map(el => counts[el] > 1 ? ')' : '(').join('');
    return result;
}


console.log(findDublicates("din"));
console.log(findDublicates("recede"));
console.log(findDublicates("Success"));
console.log(findDublicates("(( @"));