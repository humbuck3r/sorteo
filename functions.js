

//event listener

document.querySelector("#btn-agregar").addEventListener("click", agregar)
document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#borrar-ultimo").addEventListener("click", borrarUltimo);
document.querySelector("#btn-sortear").addEventListener("click", sortear);


//modelo de datos

let nombres = []



function agregar() {
   let input = document.querySelector('#nombre')
   let nombre = input.value 

   //agrego un elemnto al arreglo
   nombres.push(nombre)
   console.log(nombres)

   //muestro el arreglo
   mostrar()

   //vaciar input
   input.value = ""
}
   //muestra arreglo en pantalla 
function mostrar() {
    let lista = document.querySelector('.listado')
        lista.innerHTML = " "

    for (let elementoActual of nombres){
        lista.innerHTML += "<li>"+ elementoActual + "<li>"
    }
}
//vaciar arreglos
function reset() {
    nombres = []
    mostrar()
}

//borrar el ultimo elemnento del arreglo
function borrarUltimo() {
    nombres.pop()
    mostrar()
}


function sortear(){
    let random = Math.floor(Math.random() * nombres.length)
    document.querySelector('.ganadores').innerHTML = nombres[random]
}
