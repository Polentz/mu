window.onload = init;

function init() {
    initMouseClick();
}

function initMouseClick() {
    toggleClassOnClick(".btn--open", ".content--open", "open");
}

function toggleClassOnClick(trigger, element, className) {
    document.querySelector(trigger).addEventListener("click", (event) => {
        document.querySelector(element).classList.toggle(className);
        event.stopPropagation();
    });
}
