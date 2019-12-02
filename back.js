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

_________________________________________________________var
function CreateUser (userName, userAge) {

    this.name = userName;
    this.age = userAge;
    this.send = function() {
        alert(`data send: ${this.name}${this.age}`)
    }

}

var user1 = new CreateUser ('vasya', 25);
var user2 = new CreateUser ('kolya', 35);

//user1.send();
//user2.send();

console.log(user1);
console.log(user2);
___________________________________________________________
var mainMenu = [
    {name: 'Home', link: '/home'},
    {name: 'Contacts', link: '/contacts'},
    {name: 'Products', link: '/products'},
    {name: 'Gallery', link: '/gallery'},
]

var sidebarMenu = [
    {name: 'Phones', link: '/phones'},
    {name: 'Laptops', link: '/laptops'},
    {name: 'Tablets', link: '/tablets'},
    {name: 'Displays', link: '/displays'},
]

function CreateMenu (data, className, menuId) {

    this.data = data;
    this.clicked = [];
    this.className = className;
    this.menuId = menuId;
    this.container = document.querySelector(menuId);
    this.list = document.querySelector(menuId + 'Clicked');
    this.listBtn = document.querySelector(menuId + 'Clicked button');

    this.onClickHandler = function (e) {
        e.preventDefault();
        console.log(e.currentTarget.innerText);
        this.clicked.push(e.currentTarget.innerText);
    }

    this.init = function () {

        for(var item of this.data) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.innerHTML = item.name;
            a.href = item.link;
            a.onclick = this.onClickHandler.bind(this);
            li.appendChild(a);
            this.container.appendChild(li)
        }
this.container.classList.add(this.className);

this.listBtn.onclick = function () {
    this.list.append(this.clicked);
}.bind(this);
    }

}

var sidebar = new CreateMenu(sidebarMenu, 'sidebar-menu', '#sidebarMenu');
var main = new CreateMenu(mainMenu, 'main-menu', '#mainMenu');


sidebar.init()
main.init()

console.log(sidebar);
console.log(main);
_________________________________________________________
var btn = document.querySelector(#btn)

btn.onclick = function() {
console.log(this === btn);
}

btn.onclick();

function show () {
    console.log(this.name);
}

var user = {name: 'USER'}
var car = {name: 'CAR'}

user.myshow = show
car.toshow = show

user.myshow();
____________________________________________________
var btn = document.querySelector('#btn')

var user = {name: 'shankar'}

var show = function (event) {
if (event.type === 'click') {
    event.target.style = 'background: magenta';
}

if (event.type === 'dblclick') {
    event.target.style = 'background: orange';
}

}.bind(user);


btn.onclick = show;
btn.ondblclick = show;
_________________________________________________________var btn = document.querySelector('#btn');
var text = document.querySelector('#text-block');
var color = document.querySelector('#color-block');
var container = document.querySelector('#block-list');

function remove () {
    this.parentNode.remove();
}

btn.onclick = function(){
 

 var block = document.createElement('p');
 var rem = document.createElement('span');

rem.innerHTML = 'x';

rem.onclick = remove;


 block.innerHTML = text.value;
 block.appendChild(rem);

 block.style.backgroundColor = color.value;
 container.appendChild(block);
}
____________________________________________________
var lists = document.querySelectorAll('h1');

var myClick = function () {
    alert(this.innerHTML)
}

lists.forEach(function (el, index) {
    el.onclick = myClick;
});
____________________________________________________