let user = document.getElementById('fname');
let password = document.getElementById("pass");
let email= document.getElementById("email");
let date = document.getElementById("bday");
let gender= document.getElementById("radio");

const btne1 = document.querySelector('submit');
const inpute1 = document.querySelector('input');
const liste1 = document.querySelector('ul');

btne1.addEventListener('click', () =>{

    const inputValue = inpute1.value;
    liste1.innerHTML=<li>$(inputValue)</li>



})
