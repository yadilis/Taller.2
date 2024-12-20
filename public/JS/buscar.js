
function buscar() {
    
    var input = document.getElementById('buscar-input').value.toUpperCase();
    var contenedores = document.getElementsByClassName('contenedor-caja');


    for (var i = 0; i < contenedores.length; i++) {

        var texto = contenedores[i].textContent.toUpperCase();

        if (texto.includes(input)) {
            contenedores[i].style.display = '';  
        } else {
            contenedores[i].style.display = 'none';  
        }
    }
}


document.getElementById('buscar-form').addEventListener('submit', function(event) {
    event.preventDefault();  
    buscar();  
});
