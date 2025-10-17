
const proyectos = [
  {
    nombre: "Formulario Epic",
    descripcion: "Un formulario moderno y responsivo.",
    imagen: "fotos/formulario epic.png"
  },
  {
    nombre: "Website Responsive",
    descripcion: "Diseño adaptable para todos los dispositivos.",
    imagen: "fotos/website responsive.png"
  },
  {
    nombre: "Página Web Moderna",
    descripcion: "Estructura limpia con un toque profesional.",
    imagen: "fotos/página web.png"
  }
];

const contenedorProyectos = document.getElementById("contenedorProyectos");

proyectos.forEach(proyecto => {
  const div = document.createElement("div");
  div.className = "bg-[#1a2233] p-4 rounded-xl shadow-lg hover:scale-105 transition";
  div.innerHTML = `
    <img src="${proyecto.imagen}" alt="${proyecto.nombre}" class="rounded-lg mb-4">
    <h3 class="font-bold text-lg mb-2">${proyecto.nombre}</h3>
    <p class="text-gray-400">${proyecto.descripcion}</p>
  `;
  contenedorProyectos.appendChild(div);
});
