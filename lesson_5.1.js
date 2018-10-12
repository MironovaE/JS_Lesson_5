/**
* 4. Написать функцию isInstanceOfUser(obj), принимающую что угодно,
*  возвращающую true/false. true возвращать в случае, если в качестве аргумента
*  передан объект, у которого есть свойства name и surname со строковым (!)
*  значением и свойство age с числовым (!) значением. false возвращать
*  во всех остальных случаях. Например,
*  var vasya = {
*        name: 'Вася',
*        surname: 'Пупкин',
*        age: 15
*      };
*
*  var masha = {
*        age: 17.5,
*        name: 'Маша',
*        surname: 'Пупкина'
*      };
*
*  var petya = {
*        name: 'Петя',
*        dateOfBirth: '21.12.2012'
*      };
*
*  alert(isInstanceOfUser(vasya)); // true
*  alert(isInstanceOfUser(masha)); // true
*  alert(isInstanceOfUser(petya)); // false
*  alert(isInstanceOfUser(17)); // false
*  alert(isInstanceOfUser(false)); // false
*  alert(isInstanceOfUser('trololo')); // false
*  alert(isInstanceOfUser({})); // false
*/


// Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
//
//     var arr = [1, -1, 2, -2, 3];
//
// function isPositive(number) {
//     return number > 0;
// }
//

// alert( arr.some(isPositive) ); // true, есть хоть одно положительное

//
// function isInstanceOfUser(obj) {
//     var keys = Object.keys(obj);
//     var arr = [];
//    arr.push(keys.some(containsProperties,properties));
// }
//
// function containsProperties(keys , properties) {
//
//      return (keys ===  properties);
//  }
//
//  //console.log(isInstanceOfUser())
//
//
//
// var vasya = {
//     age: 15,
//     name: 'Вася',
//     surname: 'Пупкин',
//
// };
//
// isInstanceOfUser(vasya);

function isInstanceOfUser(obj) {
    var keys = Object.keys(obj);
    let arr = [];
    for (let key in obj) {
        if (key === 'age' && typeof(obj[key]) === "number") {
            arr.push(true);
            //continue;
        }
        else if ((key === 'name' || key === 'surname') && typeof(obj[key]) === "string") {
            arr.push(true);
           // continue;
        }
        // if (key === 'surname' && typeof(obj[key]) === "string") {
        //     arr.push(true);
        //     continue;
        // }
        else {
            arr.push(false);
           // continue;
        }

    }
    var r = arr.every(containsProperties);
    return r;
}


function containsProperties(arr) {

     return arr === true;
 }

var petya = {
           name: 'Петя',
           dateOfBirth: '21.12.2012'
         };

var t = isInstanceOfUser(petya);

