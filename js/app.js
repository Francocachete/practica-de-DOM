const cambiarTitulo = ()=>{
    const titulo = document.querySelector("h1"); //selector de etiqueta
    //const titulo = document.querySelector("#algunID"); cuando es con id se lo busca asi
    //const titulo = document.querySelector(".nuevoTitulo"); selector de clase
    //const muchosParrafos = document.querySelectorAll("p"); 
    //const muchosParrafos = document.getElementById("nuevo titulo"); 
    //const muchosParrafos = document.getElementsByClassName("nuevo titulo"); siempre devuelven un array
    //const muchosParrafos = document.getElementsByTagName("p"); //siempre devuelven un array

    console.log(titulo);
    //titulo.innerText = "Nuevo titulo desde JS" (esto es para cambiar un texto)
    titulo.innerHTML = "Nuevo titulo desde <b>JS</b>" //(no usarlo mucho)
    titulo.className = "display-3 text-primary" ;
}