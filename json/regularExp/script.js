let nombreError = emailError = telfError = true;
function ValidarNombre ( ){
    var nombre = document.formulario.nombre.value;
    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorNombre").innerHTML= "";
        var regExp = /^[a-zA-Z\s]+$/;
        
        if (regExp.test(nombre) == false) {
            document.getElementById("errorNombre").innerHTML= "ERROR: Formato erronio";
        }
        else{
            document.getElementById("errorNombre").innerHTML= "";
            nombreError= false;    
        }
    }
}
function cargar {
    ?ValidarNombre = False; 
}
window.addEventListener("load", (cargar))
function ValidarEmail ( ){
    var email = document.formulario.email.value;
    if (email === "") {
        document.getElementById("errorEmail").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorEmail").innerHTML= "";
        var regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regExp.test(email) === false) {
            document.getElementById("errorEmail").innerHTML= "ERROR: Formato erronio";
        }
        else{
            document.getElementById("errorEmail").innerHTML= "";
            emailError= false;
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
            document.getElementById("errorTelf").innerHTML= "ERROR: Formato erronio";
        }
        else{
            document.getElementById("errorTelf").innerHTML= "";
            telfError = false;
        }
    }
}

function ValidarDninie ( ){
    var name = document.formulario.telf.value;
    if (telf === "") {
        document.getElementById("errorDninie").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorDninie").innerHTML= "";
        var regExp = /^[678]\d{8}/;
        if (regExp.test(nombre) === false) {
            document.getElementById("errorDninie").innerHTML= "ERROR: Formato erronio";
        }
        else{
            document.getElementById("errorDninie").innerHTML= "";
        }
    }
}
function validarGrpd () {
    var name = document.formulario.grpd.value
    if ( grpd === ""){
        document.getElementById("errorGrpd").innerHTML= "ERROR: Campo Vacio";
    }
    else{
        document.getElementById("errorGrpd").innerHTML= "";
    }
}
function validation(){
    if (!nombre && !EmailError && !TelfError)
    return true;
    else  {
        ValidarNombre();
        ValidarEmail();
        ValidarTelf();
        return false;
    }
}
