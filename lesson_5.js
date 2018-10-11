/**
 * Created by MironovaE
 */

'use strict'

/**
 *1. Написать функцию generateCode() для генерации четырехзначного кода.
 *  Каждый новый вызов функции должен возвращать новую строку. Постараться
 *  не гуглить решение, а попробовать придумать его. Например,
 *  alert(generateCode()); // '9726'
 *  alert(generateCode()); // '0391'
 *  alert(generateCode()); // '1488'
 */

let rand  = (min,max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));


function generateCodeToNumber(min = 1000,max = 9999)  { //почему при min = 0,max = 9 ответ иногда -0?
   return (rand(min,max));
}

 alert("generateCodeToNumber = " + generateCodeToNumber());

//or

function generateCodeToArray (min = 0,max = 9) {
    let array = [];
    for (let i = 0; i < 4; i++){
        array.push(rand(min,max));
    }
    return array;
}
alert("generateCodeToArray = " + generateCodeToArray().join(''));

//or

function generateCodeToString (min = 0,max = 9) {
    let str = '';
    for (let i = 0; i < 4; i++){
        str += (rand(min,max));
    }
    return str;
}
alert("generateCodeToString = " + generateCodeToString());


/**
 * 2. Написать функцию generatePassword() для генерации шестизначного пароля,
 *  состоящего из латинских букв и цифр. Регистр можно оставить нижним.
 *  Постараться не гуглить решение, а попробовать придумать его. Каждый новый
 *  вызов функции должен возвращать новую строку. Например,
 *  alert(generatePassword()); // 'hkuk48'
 *  alert(generatePassword()); // 'h91rb4'
 *  alert(generatePassword()); // '7s81tr'
 */

function generatePassword (){
    return Math.random().toString(36).substr(3,6);
}
alert("generatePassword = " + generatePassword());

//or

function generatePasswordOr () {
    let str = '';
    for (let i = 0; i < 6; i++) {
        switch (Math.round(Math.random() * 2)) {
            case 0: {
                str += String.fromCharCode((65 + Math.random() * (90 - 65)));
                break;
            }
            case 1: {
                str += String.fromCharCode((97 + Math.random() * (122 - 97)));
                break;
            }
            case 2: {
                str += Math.round(Math.random() * 9);
                break;
            }

        }
    }
    return str;
}
alert("generatePasswordOr = " + generatePasswordOr());

/**
 * 3. Написать функцию addZerosTo(num, strLength), принимающую два числа.
 *  Функция должна добавлять необходимое количество нулей к целому
 *  числу num, причем итоговая длина строки должна составлять
 *  strLength символов. Например,
 *  alert(addZerosTo(5, 3)); // '005'
 *  alert(addZerosTo(14, 3)); // '014'
 *  alert(addZerosTo(100, 3)); // '100'
 *  alert(addZerosTo(1234, 3)); // '1234'
 */

let addZerosTo = (num, strLength) => {
    let numLength = num.length;
    
}); // '1234'