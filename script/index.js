//FUNCIÓN PARA ENCRIPTAR EL TEXTO
function encriptar (){
    var caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#texto").value;

    if (texto.match(caracteres) != texto.match(caracteres)){
        alert("No se permiten mayúsculas ni carácteres especiales.");
    } 
    else{
        var textoCodificado = texto.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");

        document.querySelector(".textoCopiado").value = textoCodificado;
        document.querySelector("#texto").value;

        document.getElementById("mensajeCopiado").style.visibility = "visible";
        document.getElementById("botonCopiar").style.visibility = "visible";
        document.getElementById("imagen").style.display="none";
    }
}
var botonE = document.querySelector("#botonEncriptar"); 
botonE.onclick = encriptar;

//FUNCIÓN PARA COPIAR EL TEXTO

function copiarTexto(){
    var copiar = document.getElementById("mensajeCopiado");
    copiar.select();
    navigator.clipboard.writeText(copiar.value);
    alert("Se copio el texto:  " + copiar.value);
    console.log(alert);
}

var botonC = document.querySelector("#botonCopiar");
botonC.onclick = copiarTexto;

//FUNCIÓN PARA DESENCRIPTAR EL TEXTO
function desencriptar (){
    var texto = document.querySelector("#texto").value; 
    var textoCodificado = texto.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u"); 
    
    document.querySelector(".textoCopiado").value = textoCodificado; 
    document.querySelector("#texto").value;
    document.getElementById("mensajeCopiado").style.visibility = "visible";
    document.getElementById("botonCopiar").style.visibility = "visible";
}

var botonD = document.querySelector("#botonDesencriptar");
botonD.onclick = desencriptar;

//FUNCIÓN PARA OBTENER EL RESULTADO
function resultado(){
    var inputText = document.querySelector("#texto").value;  
    if (inputText=== ""){
        document.getElementById("copiar").style.display = "none";
        document.getElementById("imagen").style.display ="block";
    } 
    else{
        document.getElementById("copiar").style.display = "block";
        document.getElementById("imagen").style.display="none";
    }
}
