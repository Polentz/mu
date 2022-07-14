const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
}

// window.addEventListener("click", () => {
//     clearCanvas();
//     init();
// })

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

window.addEventListener("touchmove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

function drawCircle() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2)
    ctx.fill();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // this.x = canvas.width / 2;
        // this.y = canvas.height / 2;
        // this.x = canvas.width * 1 - 1;;
        // this.y = canvas.height * 1 - 1;
        this.size = Math.random() * 90 + 10;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "#ffff00";
        ctx.arc(this.x, this.y, 80, 45, Math.PI * 2)
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 30; i++) {
        particlesArray.push(new Particle());
    }
}
init();

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    handleParticles();
}
animate();


