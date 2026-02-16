let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });


  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(`Agregado: ${nombre}`);
}


function mostrarCarrito() {
  const contenedor = document.getElementById("lista-carrito");
  if (!contenedor) return; 

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  carrito.forEach((item, index) => {
    contenedor.innerHTML += `
      <div class="item-carrito">
        <strong>${item.nombre}</strong><br>
        Precio: $${item.precio}<br>
        <button onclick="eliminar(${index})">Eliminar</button>
      </div>
      <hr>
    `;
  });
}

function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
});

function togglePergamino() {
    const titulo = document.querySelector(".titulo-snacks");

    if (titulo.classList.contains("desenrollado")) {
        titulo.classList.remove("desenrollado");
        titulo.classList.add("enrollado");
    } else {
        titulo.classList.remove("enrollado");
        titulo.classList.add("desenrollado");
    }
}

window.addEventListener("load", () => {
  const overlay = document.getElementById("cartaOverlay");
  if (!overlay) return;

  const container = document.querySelector(".carta-container");

  setTimeout(() => {
    container.classList.add("carta-abierta");
  }, 600);

  overlay.addEventListener("click", () => {
    overlay.classList.add("cerrando");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 600);
  });
});

