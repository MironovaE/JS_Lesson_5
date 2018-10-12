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
    let numStr = num.toString();
    let arrNum = [];
    if(numStr.length < strLength){
        for(let i = 0; i < (strLength - numStr.length); i++){
            arrNum.unshift(0);
        }
        arrNum.push(numStr);
        //console.log(arrNum.join(''))
        alert(arrNum.join(''));
    }
    else {
        //console.log(num)
         alert(num);
    }
}

//or

let addZerosTo = (num, strLength) => {
    let numStr = num.toString();
    let newStr = "";
    if(numStr.length < strLength){
        for(let i = 0; i < (strLength - numStr.length); i++){
            newStr += 0;
        }
        newStr +=numStr;
        //console.log(newStr)
        alert(newStr);
    }
    else {
        //console.log(numStr)
        alert(newStr);
    }
}

addZerosTo(5, 3); // '005'
addZerosTo(14, 3); // '014'
addZerosTo(100, 3); // '100'
addZerosTo(1234, 3); // '1234'


/**
 * 4. Написать функцию isInstanceOfUser(obj), принимающую что угодно,
 *  возвращающую true/false. true возвращать в случае, если в качестве аргумента
 *  передан объект, у которого есть свойства name и surname со строковым (!)
 *  значением и свойство age с числовым (!) значением. false возвращать
 *  во всех остальных случаях. Например,
 *  var vasya = {
 *    name: 'Вася',
 *    surname: 'Пупкин',
 *    age: 15
 *  };
 *
 *  var masha = {
 *    age: 17.5,
 *    name: 'Маша',
 *    surname: 'Пупкина'
 *  };
 *
 *  var petya = {
 *    name: 'Петя',
 *    dateOfBirth: '21.12.2012'
 *  };
 *
 *  alert(isInstanceOfUser(vasya)); // true
 *  alert(isInstanceOfUser(masha)); // true
 *  alert(isInstanceOfUser(petya)); // false
 *  alert(isInstanceOfUser(17)); // false
 *  alert(isInstanceOfUser(false)); // false
 *  alert(isInstanceOfUser('trololo')); // false
 *  alert(isInstanceOfUser({})); // false
 */