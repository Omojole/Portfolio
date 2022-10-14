'use strict';
const navToggler=document.querySelector('.nav-toggler');
const menuBtn=document.querySelector('.menu-btn');
const navDropDown=document.querySelector('.nav');
let active=false;


const menuDown=function(){
    if(!active){
        navToggler.classList.add('open-nav');
        navDropDown.classList.add('nav-down')
        active=true;
    }
    else{
        navToggler.classList.remove('open-nav');
        navDropDown.classList.remove('nav-down')

        active=false;
    }
}

menuBtn.addEventListener('click',menuDown);