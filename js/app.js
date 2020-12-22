
import Like from './modules/Like.js';
import Input from './modules/Input.js';
import Star from './modules/star.js';
import Round from './modules/round.js';
import Whatsapp from './modules/whatsapp.js';
import Diamond from './modules/diamond.js';
import Adn from './modules/adn.js';
import Book from './modules/book.js';
import Background from './modules/change-backround.js';




let wrapper = document.querySelector('.wrapper');
let sideButton = document.querySelector('.side-button');
let menuButton = document.querySelector('.menu-button');



let apps = { // applications
    like_app: Like,
    input_app: Input,
    star_app: Star,
    round_app: Round,
    whatsap_app: Whatsapp,
    diamond_app: Diamond,
    adn_app: Adn,
    book_app: Book,
    background_app: Background,
}

console.log(apps);



let enabled = false;

sideButton.addEventListener('click', toogleDisplay);
menuButton.addEventListener('click', toogleDisplay);


function toogleDisplay() {
    enabled = !enabled;
    if (enabled) {
        enableDisplay()

    } else {
        disableDisplay();
    }
}

function enableDisplay() {

    let display = document.querySelector('.display');
    console.log(display);

    const html = buildMenu();
    display.innerHTML = html;
    setCallbacks();


    console.log('показываю экран');
}

function setCallbacks() {
    Object.keys(apps).map(app_key => { // app_key = like_app
        let app = apps[app_key] // Получение конкретного приложения(по app_key)
        document.getElementById(app_key).onclick = app.program;
    });
}

function buildMenu() {

    let applications = Object.keys(apps); // Забрали ключи ["like_app"] у объекта аpps 

    let content = "";

    applications.map(app_key => { // app_key = like_app
        let app = apps[app_key] // Получение конкретного приложения(по app_key)
        content +=
            "<div class='menu-item'><i id='" + app_key + "' class='" + app.icon + "'></i>"
            + '<span class="name-app">' + app.name + '</span>' + '</div>'
    });


    return '<div class="menu-container">'
        + content
        + '</div>';
}


function disableDisplay() {
    let display = document.querySelector('.display');
    console.log(display);
    display.innerHTML = "";
    console.log('скрываю экран');
}

