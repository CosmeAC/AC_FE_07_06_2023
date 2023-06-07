fetch('data2.json')
.then (Response => Response.json())
.then (respuesta =>{
    let header = document.createElement( "div") ;
    let nombre = document.createElement("h1");    
    let email= document.createElement("h2");
    let edad = document.createElement ("h3");
    let caja = document.createElement( "div") ;
    let table= document.createElement("table");
    let th = document.createElement ("th");
    let tr= document.createElement("tr");
    let td = document.createElement("td");
    
    header.classList.add(header);
    nombre.textContent ="Nombre: " + respuesta.nombre;
    email.textContent = "Email: " + respuesta.email;
    edad.textContent = "Edad: " + respuesta.email;
    let elemento= document.getElementsByClassName("header");

    elemento.appendChild(nombre);
    elemento.appendChild(email);
    

    th.textContent = respuesta.work;
    let elemento2 = document.getElementById("contenedor")


    elemento2.appendChild(work);
    elemento.innerHTML += elemento;
})
.catch(error => {
    console.error("Error al cargar el archivo:", error);
    });
