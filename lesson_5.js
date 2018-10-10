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

let generateCodeToNumber  =  () => Math.round(1000 + Math.random() * (9999 -1000)).toString();
alert("generateCodeToNumber = " + generateCodeToNumber());

//or

function generateCodeToArray () {
    let array = [];
    for (let i = 0; i < 4; i++){
        array.push(Math.round(Math.random() * 9));
    }
    return array;
}
alert("generateCodeToArray = " + generateCodeToArray().join(''));

//or

function generateCodeToString () {
    let str = '';
    for (let i = 0; i < 4; i++){
        str += (Math.round(Math.random() * 9));
    }
    return str;
}
alert("generateCodeToString = " + generateCodeToString());