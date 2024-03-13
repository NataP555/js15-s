

let inp = document.querySelectorAll("input");
let myTextarea = document.getElementById("myTextarea");

let user = document.querySelector("h1");
let image = document.querySelector("img");
let position = document.querySelector("h2");
let birthdayDate = document.querySelector("h3");
let infoAboutMe = document.querySelector("h5");
let facebook = document.querySelector(".facebook");
let linkedin = document.querySelector(".linkedin");

let buttons=document.querySelectorAll("button");

let link1 = "";
let link2 = "";

inp[0].addEventListener('input',function(){
    user.innerHTML = inp[0].value;
})



inp[1].addEventListener('input',function(){
    image.src = inp[1].value;
})


inp[2].addEventListener('input',function(){
    position.innerHTML = inp[2].value;
})

inp[3].addEventListener('input',function(){
    birthdayDate.innerHTML = inp[3].value;
})


inp[4].addEventListener('input',function(){
    link2 = inp[4].value;
})

inp[5].addEventListener('input',function(){
    link1 = inp[5].value;

})



buttons[1].addEventListener('click', function(){
    window.location = link1;
})

buttons[0].addEventListener('click', function(){
    window.location = link2;
})



myTextarea.addEventListener("input", function(e){

 infoAboutMe.innerHTML= myTextarea.value;
});