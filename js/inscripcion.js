let inscripcion = [];
let sectionCapacitaciones = document.getElementById("section-capacitaciones");
let sectionInscripcion = document.getElementById("section-inscripcion");

let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionInscripcion.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadCapacitaciones = document.createElement("div");
cantidadCapacitaciones.innerHTML = "<h3>Cantidad de inscripciones: </h3>";
sectionInscripcion.appendChild(cantidadCapacitaciones);

let cantCapacitaciones = document.createElement("h3");
cantCapacitaciones.innerText = " 0";
cantidadCapacitaciones.appendChild(cantCapacitaciones);

let botonFinalizar = document.createElement("button"); 
botonFinalizar.innerText = "Finalizar inscripción";
sectionInscripcion.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "botonFin");

botonFinalizar.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    alert("Total a abonar: $" + precioFinal);
    vaciarCarrito();
};

for (const capacitacion of capacitaciones) {
    let container = document.createElement("div");
    container.setAttribute("class", "card-product");
    container.innerHTML = ` <div class="img-container">
                            <img src="${capacitacion.foto}" alt="${capacitacion.nombre}" class="img-capacitacion"/>
                            </div>
                            <div class="info-capacitacion">
                            <p class="font">${capacitacion.nombre}</p>
                            <strong class="font">$${capacitacion.precio}</strong>
                            <button class="boton" id="${capacitacion.id}"> Inscribite </button>
                            </div>`;
    sectionCapacitaciones.appendChild(container);
    
    document.getElementById(`${capacitacion.id}`).onclick = () => agregarInscripcion(`${capacitacion.id}`);
};

function agregarInscripcion(id) {
    inscripcion.push(capacitaciones.find(p => p.id == id));
    localStorage.setItem("inscripción", JSON.stringify(inscripcion));
    calcularTotalInscripcion();
};

function calcularTotalInscripcion() {
    let total = 0;
    for (const capacitacion of inscripcion) {
        total += capacitacion.precio;
    };
    montoTotalCompra.innerText = total;
    cantCapacitaciones.innerText = inscripcion.length;
};

function vaciarCarrito() {
    montoTotalCompra.innerText = "0";
    cantCapacitaciones.innerText = "0";
    localStorage.clear();
    inscripcion=[];
};