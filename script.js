const menu = document.querySelector(".btn--open");
const submenu = document.querySelector(".content--open");
const buttons = document.querySelectorAll(".--colored");


if (menu) {
    menu.addEventListener("click", (event) => {
        submenu.classList.toggle("open");
        event.stopPropagation();
    });
}

if (buttons) {
    buttons[0].classList.add("active");
    buttons.forEach(b => {
        b.addEventListener("click", () => {
            buttons.forEach(btn => {
                btn.classList.remove("active");
            })
            b.classList.add("active");
        });
    });
}



// buttons[0].classList.add("active");
// buttons.forEach(b => {
//     b.addEventListener("click", () => {
//         buttons.forEach(btn => {
//             btn.classList.remove("active");
//         })
//         b.classList.add("active");
//     });
// });
