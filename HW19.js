//TASK 1. Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
let myObj = {
    first: 1,
    second: 2,
};

console.log(myObj);
delete myObj.first;  // or delete myObj['first']
delete myObj.second;  // or delete myObj['second']
console.log(myObj);

//TASK 2. Создать любой обьект с двумя ключами и любыми значениями в них, 
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

let mySecondObj = {
    third: 3,
    fourth: 4,
};

console.log('third' in mySecondObj);
console.log('fifth' in mySecondObj);

// TASK 3. C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true,
};

for (let key in student) {
    console.log(`Key: ${key}, value: ${student[key]}`);
};

// TASK 4. Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum']['red']);
console.log(colors['ru pum pu ru rum']['blue']);

// TASK 5. Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
};

let totalSalary = 0;
let peopleCount = 0;

for (let person in salaries) {
    totalSalary += salaries[person];
    peopleCount += 1;
};

let avgSalary = totalSalary / peopleCount;

console.log(avgSalary);

//TASK 6. Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.

// форма в файле index.html
// let formData = {};

// document.addEventListener('submit', (event) => {
//     // console.log(event);
//     event.preventDefault();  //отключить отправку формы (перезагрузку страрницы)
//     getFormData(event.target); //передаю в функцию форму
// });

// function getFormData(form) {
//     // console.log(form);
//     // console.log(formData);
//     if (!formData['email'] || !formData['password']) { // если в объекте нет данных, кладу в него значения при условии, что оба поля были заполнены
//         if (!form.email.value || !form.password.value) {
//             alert("Форма невалидна.")
//             form.reset();    //очистка полей формы
//         } else {
//             formData['email'] = form.email.value;
//             formData['password'] = form.password.value;
//             alert('Подтвердите данные')
//             form.reset();
//         }
//         // console.log(formData);
//     } else {
//         // console.log(formData);
//         form.email.value === formData.email && form.password.value === formData.password ? alert('Добро пожаловать') : alert('Неверные данные');
//         formData = {};    //очищаю объект после проверки
//         form.reset();
//         // console.log(formData);      
//     };
// };

// ADVANCED level

//TASK 1. Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

function verbouseScore(numScore){
    const verbouseNums = {
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять',
    };
    numScore = numScore.split(':');
    return `Счет игры ${verbouseNums[numScore[0]]}:${verbouseNums[numScore[1]]}`
}

console.log(verbouseScore('5:7'));

// TASK 2. Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};


function isEqual(obj1, obj2) {         // решение из гугла для объектов любой вложенности. Разобралась, как работает 
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let i = 0; i < obj1Keys.length; i++) {
      const prop = obj1Keys[i];
      const bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
  
      if ((!bothAreObjects && (obj1[prop] !== obj2[prop]))
      || (bothAreObjects && !isEqual(obj1[prop], obj2[prop]))) {
        return false;
      }
    }
  
    return true;
  }

  console.log(isEqual(student1, student2));


//   let _ = require('lodash');                    //через lodash
//   console.log(_.isEqual(student1, student2));

  // TASK 3. У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
//   Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
//   Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.
  
const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    }
 }
 
//  1
'bird' in animals ? console.log(animals['bird']['name']) : console.log('The bird flew away!')

// 2
console.log(animals?.bird?.name);

// 3
try {
    console.log(animals['bird']['name']);
} catch (TypeError) {
    console.log('There is no "bird" in animals');
};
