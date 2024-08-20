// Seleccionamos los elementos del DOM
const textoArea = document.getElementById('texto');
const textoEvaluar = document.getElementById('textarea-evaluar');
const imgMuneco = document.querySelector('.img-muñeco');
const mensajeUno = document.querySelector('.texto-uno');
const mensajeDos = document.querySelector('.texto-dos');
const btnCopiar = document.querySelector('.btn-copiar');
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");

// Inicialmente desactivar los botones
botonEncriptar.disabled = true;
botonDesencriptar.disabled = true;
btnCopiar.style.display = 'none';

// Expresión regular para validar texto
const regexTexto = /^[a-z\s]*$/;

// Función para mostrar un mensaje de alerta
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// Función para limpiar el campo de texto
function limpiarTexto() {
    textoArea.value = "";
    actualizarEstadoBotones();
}

// Función para verificar el texto ingresado
function verificarTexto(texto) {
    if (!regexTexto.test(texto)) {
        mostrarAlerta("Por favor, ingrese solo letras minúsculas y sin acentos.");
        limpiarTexto();
        return false;
    }
    return true;
}

// Función para encriptar el texto
function encriptar(texto) {
    const matrizCodigo = [["e", "enter"],
                          ["i", "imes"], 
                          ["a", "ai"], 
                          ["o", "ober"], 
                          ["u", "ufat"]];
    let textoEncriptado = texto.toLowerCase();

    matrizCodigo.forEach(([original, reemplazo]) => {
        textoEncriptado = textoEncriptado.replaceAll(original, reemplazo);
    });

    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    const matrizCodigo = [["e", "enter"],
                          ["i", "imes"],
                          ["a", "ai"],
                          ["o", "ober"],
                          ["u", "ufat"]];
    let textoDesencriptado = texto.toLowerCase();

    matrizCodigo.forEach(([original, reemplazo]) => {
        textoDesencriptado = textoDesencriptado.replaceAll(reemplazo, original);
    });

    return textoDesencriptado;
}

// Función para el botón encriptar
function btnEncriptar() {
    const textoIngresado = textoArea.value;

    if (verificarTexto(textoIngresado)) {
        const textoEncriptado = encriptar(textoIngresado);
        textoEvaluar.value = textoEncriptado;
        limpiarTexto();

        // Ocultar elementos
        imgMuneco.style.display = 'none';
        mensajeUno.style.display = 'none';
        mensajeDos.style.display = 'none';
    }
    actualizarEstadoBotones();
}

// Función para el botón desencriptar
function btnDesencriptar() {
    const textoIngresado = textoArea.value.trim(); 

    if (verificarTexto(textoIngresado)) {
        const textoEncriptado = desencriptar(textoIngresado);
        textoEvaluar.value = textoEncriptado;
        limpiarTexto();

        // Ocultar elementos
        imgMuneco.style.display = 'none';
        mensajeUno.style.display = 'none';
        mensajeDos.style.display = 'none';
    }
    actualizarEstadoBotones();
}

// Función para copiar el contenido del textarea al portapapeles
function copiarTexto() {
    navigator.clipboard.writeText(textoEvaluar.value);
    textoEvaluar.value = "";

    imgMuneco.style.display = 'block'; //none
    mensajeUno.style.display = 'block';  
    mensajeDos.style.display = 'block'; 

    actualizarEstadoBotones();
}

// Función para actualizar el estado de los botones
function actualizarEstadoBotones() {
    const textoIngresado = textoArea.value.trim();
    const textoEvaluarContenido = textoEvaluar.value.trim();

    botonEncriptar.disabled = textoIngresado === "";
    botonDesencriptar.disabled = textoIngresado === "";
    btnCopiar.style.display = textoEvaluarContenido === "" ? 'none' : 'block';
}

// Función para manejar el tamaño de la ventana
function manejarTamañoVentana() {
    if (window.innerWidth <= 1250) {
        imgMuneco.style.display = 'none';
    } else {
        imgMuneco.style.display = 'block';
    }
}

// Agregar eventos para actualizar el estado de los botones
textoArea.addEventListener('input', actualizarEstadoBotones);

// Escuchar cambios en el tamaño de la ventana para manejar la visibilidad del muñeco
window.addEventListener('resize', manejarTamañoVentana);

// Inicializar el estado de los botones
actualizarEstadoBotones();

// Asegurarse de manejar el tamaño de la ventana al cargar la página
manejarTamañoVentana();