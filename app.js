let listadenombres = ["uno","dos","tres"];
//console.log(listadenombres);



function ActualizarLista(){
    let nombreamigo = document.querySelector('#amigo').value;
    document.querySelector('#listaAmigos').innerHTML += '<li>'+nombreamigo+'</li>';
    limpiarCaja();

}

function agregarAmigo(){
let nombreamigo = document.querySelector('#amigo').value;
   if (nombreamigo == '') {

    alert('Por favor, inserte un nombre.');
   } else {

    ActualizarLista();

   }

}



function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

