let nombreError = emailError = telfError true;
function ValidarNombre ( ){
    var name = document.formulario.nombre.value;
    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorNombre").innerHTML= "";
        var regExp = /^[a-zA-Z\s]/+$;
        if (regExp.test(nombre) === false) {
            document.getElementById("errorNombre".innerHTML= "ERROR: Formato errornio");
        }
        else{
            document.getElementById("errorNombre".innerHTML= "");
            }
        }
    }

function ValidarEmail ( ){
    var name = document.formulario.email.value;
    if (email === "") {
        document.getElementById("errorEmail").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorEmail").innerHTML= "";
        var regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regExp.test(nombre) === false) {
            document.getElementById("errorEmail".innerHTML= "ERROR: Formato erronio");
        }
        else{
            document.getElementById("errorEmail".innerHTML= "");
            nombreError false;
            }
        }
    }

    
function ValidarTelf ( ){
    var name = document.formulario.telf.value;
    if (telf === "") {
        document.getElementById("errorTelf").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorTelf").innerHTML= "";
        var regExp = /^[678]\d{8}/;
        if (regExp.test(nombre) === false) {
            document.getElementById("errorTelf".innerHTML= "ERROR: Formato erronio");
        }
        else{
            document.getElementById("errorTelf".innerHTML= "");
            }
        }
    }
function validation(){
    if (!nombre == EmailError == TelfError == false)
    return true;
    else  return false;
}