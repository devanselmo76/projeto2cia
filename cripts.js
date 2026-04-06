const modal = document.getElementById("modal-login");
const abrir = document.getElementById("abrir-login");
const fechar = document.getElementById("fechar");

abrir.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// fechar clicando fora
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

function login() {
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    if (user === "admin" && senha === "admin") {
        localStorage.setItem("logado", "true");
        window.location.href = "formulario.html";
    } else {
        erro.textContent = "Login ou senha inválidos";
    }
}

/*--- Vídeo Institucional ---*/

const video = document.querySelector('.video-container');

if (video) {
    video.addEventListener('click', () => {
        window.open('./assets/institucional.mp4', '_blank');
    });
}


/* --- Slider --- */

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

let index = 0;
const slidesToShow = 3;
const totalSlides = slides.length;

// DUPLICA OS PRIMEIROS 3 PARA LOOP
for (let i = 0; i < slidesToShow; i++) {
    const clone = slides[i].cloneNode(true);
    track.appendChild(clone);
}

function moveSlide() {
    track.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
}

// Próximo
document.querySelector('.next').addEventListener('click', () => {
    index += slidesToShow;

    if (index >= totalSlides) {
        index = 0;
    }

    moveSlide();
});

// Anterior
document.querySelector('.prev').addEventListener('click', () => {
    index -= slidesToShow;

    if (index < 0) {
        index = totalSlides - slidesToShow;
    }

    moveSlide();
});

// AUTO SLIDE
setInterval(() => {
    index += slidesToShow;

    if (index >= totalSlides) {
        index = 0;
    }

    moveSlide();
}, 4000);