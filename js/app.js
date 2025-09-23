let mensajes = [];

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    mensaje: document.getElementById("mensaje").value
  };

  mensajes.push(data);

  document.getElementById("mensajeModal").textContent = "Mensaje enviado con éxito ✅";
  document.getElementById("modal").style.display = "block";

  mostrarMensajes();

  e.target.reset();
});

document.getElementById("cerrarModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

function mostrarMensajes() {
  const lista = document.getElementById("listaMensajes");
  lista.innerHTML = "";
  mensajes.forEach((m, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${m.nombre} (${m.correo}): ${m.mensaje}`;
    lista.appendChild(li);
  });
}
