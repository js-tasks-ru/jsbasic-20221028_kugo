

function sum(m, n) {

  let a = m + n;

  return a;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list){
  
// }

/** Вторая задача */
/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
  if (name === ' ' || name === null || name.length <= 4) {
    return name;
  } else {
    console.log('в функции isValid ошибка!');
  }
}



function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();


/** Третья задча */
function ucFirst(str) {
  return str.charAt(0).toUpperCase();
}

/* четверная задача */

function checkSpam(str) {
  let lowercase = str.toLowerCase();
  if (lowercase.includes('1xbet') || lowercase.includes('xxx')) {
    return true;
  } else {
    return false;
  } 
}

/* 
Пятая задача
*/


function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}


//-----------------------------



