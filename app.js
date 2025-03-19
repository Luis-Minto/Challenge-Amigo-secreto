//Almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");
    
    //Revisar si hay algo escrito
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    //Revisar si el nombre esta repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    //Ingresar nombre de amigos a la lista
    amigos.push(nombre);

    // Crear un nuevo elemento de lista
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    nuevoElemento.classList.add("name-item");
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el input
    input.value = "";
    input.focus();
}

//Sorteo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("No hay suficientes nombres para el sorteo. Agrega al menos un amigo.");
        return;
    }

    //Nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
