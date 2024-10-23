let stars = document.getElementById(`stars`);
let moon = document.getElementById(`moon`);
let mountains3 = document.getElementById(`mountains3`);
let mountains2 = document.getElementById(`mountains2`);
let rivers = document.getElementById(`rivers`);
let boat = document.getElementById(`boat`);
let nouvil = document.querySelector(`.nouvil`);

window.onscroll = function(){
    let value = window.scrollY;
    
    stars.style.left=value+`px`
    moon.style.top=value * 3 +`px`
    mountains3.style.top = value * 1.5 +`px`
    mountains2.style.top = value * 1.1 +`px`
    rivers.style.top = value * 1.1 +`px`
    boat.style.left = value * 3.2 +`px`
    nouvil.style.fontSize = value + `px`;

    if(scrollY >= 60){
    nouvil.style.fontSize = 60 + `px`;
    nouvil.style.position =`fixed`;

    }
    if(scrollY >= 435){
        nouvil.style.display =  `none`;

    }
    else{
        nouvil.style.display =  `block`;

    }
}

