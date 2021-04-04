'use strict';

function informationOutput(){

let userName = prompt('What is your name?');
console.log(typeof userName);
let userAge = prompt('How old are you?');
console.log(typeof userAge);
let userGraduated = prompt('What did you graduate?');
console.log(typeof userGraduated);
let userFavourite = prompt('What is your preferred programming language?');
console.log(typeof userFavourite);
let informationOutput = "Your name is " + userName + "and your age is " + userAge + "you are graduated" + userGraduated + "and your favourite programming language is" + userFavourite ;

alert(informationOutput);
}

informationOutput();
