let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function iniciar() {
  maximo = 600;
  medio = document.getElementById('medio');
  reproducir = document.getElementById('reproducir');
  barra = document.getElementById('barra');
  progreso = document.getElementById('progreso');
  reproducir.addEventListener('click', presionar, false);
  barra.addEventListener('click', mover, false);
}

function presionar() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    window.clearInterval(bucle);
  } else {
    medio.play();
    bucle = setInterval(estado, 1000);
  }
}

function estado() {
  if (!medio.ended) {
    var total = parseInt(medio.currentTime * maximo / medio.duration);
    progreso.style.width = total + 'px';
  } else {
    progreso.style.width = '0px';
    reproducir.innerHTML = 'Reproducir';
    window.clearInterval(bucle);
  }
}

function mover(e) {
  if (!medio.paused && !medio.ended) {
    var ratonX = e.pageX - barra.offsetLeft;
    var nuevoTiempo = ratonX * medio.duration / maximo;
    medio.currentTime = nuevoTiempo;
    progreso.style.width = ratonX + 'px';
  }
}


function makeLarge() { 
 medio.width = 1000; 
}
function makeSmall() { 
  medio.width = 250; 
} 