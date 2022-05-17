window.onload = init;

function init() {
    initMouseClick();
}

function initMouseClick() {
    toggleClassOnClick(".button--open", ".content--open", "open");
    // scrollToHref(".js-href");
}

function toggleClassOnClick(trigger, element, className) {
    document.querySelector(trigger).addEventListener("click", (event) => {
        document.querySelector(element).classList.toggle(className);
        event.stopPropagation();
    });
}

// function scrollToHref(anchorTags) {
//     const links = document.querySelectorAll(anchorTags);
//     links.forEach(link => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault();
//             console.log("click")
//             const href = link.getAttribute("href");
//             document.querySelector(href).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });
// }

