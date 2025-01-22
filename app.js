let amigos = [];
let nombreamigo

function ActualizarLista(){
   
    //limpieza de la lista
    document.querySelector('#listaAmigos').innerHTML = "";

    //Se recorre el array para mostrar la lista
    for (let i=0;i<amigos.length;i++){
        document.querySelector('#listaAmigos').innerHTML += '<li>'+amigos[i]+'</li>';

    }
    limpiarCaja();
}

function agregarAmigo(){

    //lectura del dato ingresado por el usuario
   nombreamigo = document.querySelector('#amigo').value;

   // se validan los datos, evitar campos vacios
    if (nombreamigo == '') {

        alert('Por favor, inserte un nombre.');
       } else {
        
        // validacion de datos, los nombres no se repiten
        if (amigos.includes(nombreamigo)){

            alert('El nombre ya se encuentra en la lista, por favor inserte uno nuevo.')
        } else {

            //datos validados, se ingresan al array y se limpia el campo para nuevo dato
            amigos.push(nombreamigo);
            ActualizarLista();
            
        }
        
       }

}

function sortearAmigo(){

        //se valida array con datos
    if (amigos.length > 1) {

        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        document.querySelector('#listaAmigos').innerHTML = `El amigo secreto sorteado es: ${amigos[numeroGenerado]}`;
        amigos = [];

        // se valida que exista más de un nombre para poder sortear
    } else {

        alert ('Por favor, inserte un minimo de dos nombres para sortear.');
    }
    


}

// funcion para limpiar la caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

