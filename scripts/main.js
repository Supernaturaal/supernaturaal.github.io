var myHeading = document.querySelector('h1');
myHeading.textContent = 'Зимние виды спорта';
var myVariable = document.querySelector('h1');
alert('Дороу!');

window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 1000);
};

var value = true //условие появления кнопки, true - появиться, false - нет 
var btn = document.createElement('button');//создаём нашу кнопку

var textInBtn = document.createTextNode('BUTTON');//создаем текст для кнопки

btn.appendChild(textInBtn);//добавляем текст в кнопку

if(value){//в зависимости от условия добавляем кнопку в документ
  document.body.appendChild(btn);
} 
