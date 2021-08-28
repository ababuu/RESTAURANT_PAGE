import { initial_page } from "./common-page";
import { home } from './home-page.js';
import {menu} from './menu-page';
import { contact } from "./contact.js";
import './style.css';

const initial=initial_page();
const tabs = initial.querySelectorAll("li");
const list1=initial.querySelector('.list-1');
const list2=initial.querySelector('.list-2');
const list3=initial.querySelector('.list-3');
const sections = initial.querySelectorAll(".my-tabs .tab-content");
const homeSection=initial.querySelector('.home');
const menuSection=initial.querySelector('.menu');
const contactSection=initial.querySelector('.contact');
window.addEventListener("load", (e)=>{
    e.preventDefault();
    removeActiveTab();
    homeSection.innerHTML='';
    const newHome=home();
    initial.appendChild(newHome);
    addActiveTab(list1);
});


list1.addEventListener('click',e=>{
    e.preventDefault();
    removeActiveTab();
    homeSection.innerHTML='';
    const newHome=home();
    initial.appendChild(newHome);
    addActiveTab(list1);
});

list2.addEventListener('click',e=>{
    e.preventDefault();
    removeActiveTab();
    menuSection.innerHTML='';
    const newMenu=menu();
    initial.appendChild(newMenu);
    addActiveTab(list2);
});

list3.addEventListener('click',e=>{
    e.preventDefault();
    removeActiveTab();
    contactSection.innerHTML='';
    const newContact=contact();
    initial.appendChild(newContact);
    addActiveTab(list3);
});



const removeActiveTab = () => {
    tabs.forEach(tab => {
        tab.classList.remove("is-active");
    });
    sections.forEach(section => {
    section.classList.remove("is-active");
    });
}

const addActiveTab = tab => {
    tab.classList.add("is-active");
    const href = tab.querySelector("a").getAttribute("href");
    const matchingSection = document.querySelector(href);
    matchingSection.classList.add("is-active");
}

window.addEventListener("load", (e)=>{
    e.preventDefault();
    removeActiveTab();
    homeSection.innerHTML='';
    const newHome=home();
    initial.appendChild(newHome);
    addActiveTab(list1);
});