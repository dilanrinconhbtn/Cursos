//Variables 
const listaTweets = document.getElementById('lista-tweets');


//Event Listeners

eventListeners();

function eventListeners() {
    //cuando se envié formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);


}
//Functions

// Añadir Tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // Read the value that have the text area
    const tweet = document.getElementById('tweet').value;

    //Create element X for delete
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    
    //Create element and at to the list
    const li = document.createElement('li');
    //add tweet to the list
    li.innerText = tweet;
    //add boton delete to the list
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
}