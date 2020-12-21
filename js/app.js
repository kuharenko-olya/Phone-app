
import Like from './modules/Like.js';



let wrapper = document.querySelector('.wrapper');
let sideButton = document.querySelector('.side-button');
let menuButton = document.querySelector('.menu-button');



let apps = { // applications
    like_app: Like
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


    console.log('показываю экран');
}

function buildMenu() {

    let applications = Object.keys(apps);

    let content = "";

    applications.map(app_key => { // app_key = like_app
        let app = apps[app_key]
        content +=
            "<div class='" + app.icon + "' onclick='"
            + app.program + "'>"
            + app.name +
            "</div>"
    });

    return '<div class="menu-container">'
        + content
        + '</div>';
}


function disableDisplay() {
    console.log('скрываю экран');
}

