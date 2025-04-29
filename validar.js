//esta funcion se ejecuta cuando se envia el formulario
function validarFormulario(){
    //se debe obtener los valores de cada campo de texto
    const nombre=document.getElementById('nombre').value.trim(); //elimina espacios
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value;
    const confirmar=document.getElementById('confirmar').value;

    //VALIDACION 1: EL NOMBRE DEBE DE CONTENER AL MENOS 3 CARACTERES
    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres.");
        return false; //Evita el envio del formulario
    }

    //VALIDACION 2: EL CORREO DEBE CONTENER AL MENOS UN "@"
    if(!email.includes("@")){
        alert("Correo Invalido.");
        return false;
    }

    //VALIDACION 3: LA CONTRASEÑA DEBE SER MINIMO DE 6 CARACTERES
    if(password.length < 6){
        alert("La contraseña debe poseer 6 caracteres como minimo.");
        return false;
    }

    //VALIDACION 4: AMBAS CONTRASEÑAS DEBEN DE COINCIDIR.
    if(password!==confirmar){
        alert("Las contraseñas no coinciden.");
        return false;
    }

    //SI TODAS LAS VALIDACIONES CUMPLEN, SE VISUALIZARA UN MENSAJE
    alert("Formulario valido ✅");
    return true;//permite enviar al formulario
}