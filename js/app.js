
let wrapper = document.querySelector('.wrapper');
console.log(wrapper);
let sideButton = document.querySelector('.side-button');
console.log(sideButton);
// let menuButton = document.querySelector('.menu-button');
// console.log(menuButton);


let enabled = false;

sideButton.addEventListener('click', toogleDisplay);


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
    return '<div class="menu">'
        + '<div class="menu-item"> 123 </div>'
        + '</div>';
}


function disableDisplay() {
    console.log('скрываю экран');
}

