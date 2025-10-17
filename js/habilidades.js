console.log("habilidades.js funcionando correctamente ");


const habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
];


const contenedorHabilidades = document.querySelector("#listaHabilidades");


habilidades.forEach((habilidad) => {
  
  const li = document.createElement("li");


  li.textContent = habilidad;


  li.className =
    "bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition";


  contenedorHabilidades.appendChild(li);
});

console.log("Habilidades agregadas dinámicamente ");
