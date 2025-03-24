const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let bola = new Bola(canvas.width / 2, canvas.height / 2);

let numero = 400;
let b = 10;
let numBolas = 14;

bola.dibujar();
bola.mover();

let bolas = []; // para actualizar con el for

function actualizarBolas(numBolas) {
    bolas = [];
    for (let i = 0; i < numBolas; i++) {
        bolas.push(new Bola(canvas.width / 2, canvas.height / 2));
    }
}

actualizarBolas(b);

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bolas.forEach(bola => {
        bolas.forEach(bola2 => {
            let dx = bola.x - bola2.x;
            let dy = bola.y - bola2.y;
            let dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (dist < numero) {
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y);
                ctx.lineTo(bola2.x, bola2.y);
                ctx.stroke();
                ctx.closePath();
            }
        });
        bola.dibujar();
        bola.mover();
    });

    requestAnimationFrame(animar);
}

animar();

const rangoNumero = document.getElementById('rangoNumero');
const valorNumero = document.getElementById('valorNumero');

const rangoBolas = document.getElementById('rangoBolas');
const valorBolas = document.getElementById('valorBolas');


// Funcion cambiar el numero de distancia entre bolas
rangoNumero.addEventListener('input', function () {
    numero = parseInt(rangoNumero.value);
    valorNumero.textContent = numero;
});

// Funcion numero de bolas 
rangoBolas.addEventListener('input', function () {
    b = parseInt(rangoBolas.value);
    valorBolas.textContent = b;
    actualizarBolas(b);
});

