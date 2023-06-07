fetch('data.json')
.then (Response => Response.json())
// convierte siempre el formato a un json
// fetch = es recoger/agarrar en este caso archivos
.then (respuesta =>{
    let elemento = document.getElementById("container");
    let codigo_HTML = "";
    codigo_HTML += "<h1>" +respuesta.nombre+ "</h1>";
    codigo_HTML += "<h2>"+respuesta.email+ "</h2>";
    codigo_HTML += "<table>";
    codigo_HTML += "<tr>";
    respuesta.work.forEach(element => {
        codigo_HTML += "<table>" + "<tr>"+element.empresa+ "</tr>" + "<tr>" +element.ubicacion+ "</tr>" + "<tr>"+element.f_start + "</tr>" + "</table>"
    })
    console.log(codigo_HTML)
    codigo_HTML += "</table>"
    elemento.innerHTML += codigo_HTML;
})
.catch(error => {
    console.error("Error al cargar el archivo:", error);
    });
