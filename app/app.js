import { loadPage } from "../model/model.js";

const changeRoute = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    loadPage(pageID);

}

function initURLListener() {
    $(window).on('hashchange', changeRoute);  
    changeRoute();  
}

const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active"); 
});


function initListeners() {
    
    $("nav a").on("click", (e) => {
        let pageID = e.currentTarget.hash.replace('#', '');  
        window.location.hash = pageID;  
        loadPage(pageID);  
        nav.classList.remove("active"); 
    });


    $("nav").on("click", (e) => {
        nav.classList.remove("active");
    })
}

$(document).ready(function () {
    initListeners();  
    initURLListener();  
});
