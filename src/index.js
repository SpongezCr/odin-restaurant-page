import "./style.css"
import { loadHomePage } from "./modules/home.js";
import { loadMenuPage } from "./modules/menu.js";
import { loadAboutPage } from "./modules/about.js";



loadHomePage();
let curPage = "home";
const nav = document.querySelector("nav");
function changePage(event) {
    if (!event.target.id) return;
    if (event.target.id === curPage) return;
    curPage = event.target.id;
    const container = document.querySelector("#content");
    container.innerHTML = "";
    switch (event.target.id) {
        case "home":
            loadHomePage();
            break;
        case "menu":
            loadMenuPage();
            break;
        case "about":
            loadAboutPage();
            break;
    }
}
nav.addEventListener('click', changePage);
