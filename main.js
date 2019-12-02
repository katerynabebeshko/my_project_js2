// //функция объявленая в стиле declaration. Можно вызвать до ее объявления.

// function show (){
// alert('hi')
// }

// // в стиле expression

// var show = function () {
//     alert('hi')
// }

// // call-back - способ использования

// var show = function () {
//     alert('hi')
// }

// var cart = function (x) {
//     x();
// }

// cart(show)

// // анонимная

// (function (){
//     var a = 5;
//     var b = 10;
//     window.result = a + b;
// })()


// стрелочная функция

var hi = function (message) {
    return `hello ${message}`;

}

var hi2 = message => {
    return `hello ${message}`;
}

alert(hi('shankar'));
_______________________________________

var name = 'HELLO VAR';

var user = {
    name: 'USER',
    getName: () => {
        alert(this.name)
    }
}

user.getName()

console.log(window.name)