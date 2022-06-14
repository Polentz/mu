const menu = document.querySelector(".btn--open");
const submenu = document.querySelector(".content--open");
const buttons = document.querySelectorAll(".nav--link");
const navLinks = document.querySelectorAll(".js-href");
const closeButton = document.querySelector(".btn--close")


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

// const inViewport = (e) => {
//     const elementRect = e.getBoundingClientRect();
//     return (elementRect.top < innerHeight && elementRect.bottom > 0);
// };

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const href = link.getAttribute("href");
        const element = document.getElementById(href);
        const elementId = element.getAttribute("id");
        console.log(href)
        console.log(element)
        console.log(elementId)

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

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (history.length) {
        history.back();
        return false;
    }
})




// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll(".content--block");
//     const sectionWithId = sections.querySelectorAll('[id]');
//     console.log(sectionWithId)

// })



// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll(".content--block");
//     sections.forEach(section => {
//         if (section.hasAttribute("id") && section.inViewport) {

//             console.log("bau")
//         }
//     });
// })


// const inViewport = (e) => {
//     const elementRect = e.getBoundingClientRect();
//     return (elementRect.top < innerHeight && elementRect.bottom > 0);
// };

// document.addEventListener("scroll", () => {
//     if (section.inViewport) {
//         buttons.forEach(b => {
//             b.addEventListener("click", () => {
//                 buttons.forEach(btn => {
//                     btn.classList.remove("active");
//                 })
//                 b.classList.add("active");
//             });
//         });
//     }
// })