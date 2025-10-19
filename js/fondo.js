const botonFondo = document.querySelector("#toggleFondo");
const cuerpo = document.body;


window.addEventListener("DOMContentLoaded", () => {
  cuerpo.classList.add("animated-gradient");
  botonFondo.textContent = "Desactivar fondo animado";
});


botonFondo.addEventListener("click", () => {
  cuerpo.classList.toggle("animated-gradient");

  if (cuerpo.classList.contains("animated-gradient")) {
    botonFondo.textContent = "Desactivar fondo animado";
  } else {
    botonFondo.textContent = "Activar fondo animado";
  }

 
  botonFondo.classList.add("scale-110");
  setTimeout(() => {
    botonFondo.classList.remove("scale-110");
  }, 150);
});


botonFondo.addEventListener("mouseover", () => {
  botonFondo.classList.add("shadow-[0_0_15px_#60a5fa]");
});

botonFondo.addEventListener("mouseout", () => {
  botonFondo.classList.remove("shadow-[0_0_15px_#60a5fa]");
});

