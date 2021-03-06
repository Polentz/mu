const menu = document.querySelector(".btn--open");
const submenu = document.querySelector(".content--open");
const buttons = document.querySelectorAll(".nav--link");
const closeButton = document.querySelector(".btn--close");
const navLinks = document.querySelectorAll(".js-href");

if (menu) {
    menu.addEventListener("click", (event) => {
        submenu.classList.toggle("open");
        event.stopPropagation();
    });
}

if (buttons) {
    buttons.forEach(b => {
        b.addEventListener("click", () => {
            buttons.forEach(btn => {
                btn.classList.remove("active");
            })
            b.classList.add("active");
        });
    });
}

if (closeButton) {
    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (history.length) {
            history.back();
            return false;
        }
    });
}

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const href = link.getAttribute("href");
            const element = document.getElementById(href);
            const elementId = element.getAttribute("id");

            element.scrollIntoView({
                behavior: "smooth"
            });
            if (href === elementId) {
                buttons.forEach(b => {
                    b.addEventListener("click", () => {
                        buttons.forEach(btn => {
                            btn.classList.remove("active");
                        })
                        b.classList.add("active");
                    });
                });
            }
        });
    });
}
