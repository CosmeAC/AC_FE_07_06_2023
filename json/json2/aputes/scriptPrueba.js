fetch('data2.json')
.then (Response => Response.json())
// convierte siempre el formato a un json
// fetch = es recoger/agarrar en este caso archivos
.then (respuesta =>{
    let nombre = document.createElement("h1");
    // esto se tiene que elaçar al padre
    let email= document.createElement("h2");
    let lista= document.createElement("ul");
    // como esta fuera del DOM no se visualiza

    nombre.textContent ="nombre:" + respuesta.nombre;
    email.textContent = respuesta.email;
    // textcontent es otra forma de añadir contenidio, forma de añadir texto

    let elemento= document.getElementById("contenedor");

    elemento.appendChild(nombre);
    // aqui injectamos el elemento al padre( que es el contenedor importado)
    elemento.appendChild(email);
    // elemento.appendChild(lista);
    elemento.appendChild(lista);
})
.catch(error => {
    console.error("Error al cargar el archivo:", error);
    });
