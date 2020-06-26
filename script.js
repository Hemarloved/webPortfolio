const STA =document.querySelector(".services-text a");
const PRO = document.querySelector("#proj")


STA.classList.remove('hide',);
PRO.classList.add('hide');

function reveal(e){
    e.preventDefault();
    STA.classList.toggle('hide');
    PRO.classList.toggle('hide');
}

STA.addEventListener('click', reveal, false)
STA.addEventListener('click',function(){console.log('The button was clicked')}, false)