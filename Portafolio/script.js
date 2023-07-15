document.addEventListener("DOMContentLoaded", function() {
  const numEstrellas = 500; // Número de estrellas a generar

  for (let i = 0; i < numEstrellas; i++) {
    crearEstrella();
  }
});

function crearEstrella() {
  const estrella = document.createElement("div");
  estrella.classList.add("estrella");

  const tamanio = Math.random() * 3;
  estrella.style.width = tamanio + "px";
  estrella.style.height = tamanio + "px";

  const duracionAnimacion = Math.random() * 5 + 2;
  estrella.style.animationDuration = duracionAnimacion + "s";

  const posicionX = Math.random() * window.innerWidth;
  const posicionY = Math.random() * window.innerHeight;
  estrella.style.left = posicionX + "px";
  estrella.style.top = posicionY + "px";

  document.getElementById("fondo-estrellas").appendChild(estrella);
}
