document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional.

    const formData = new FormData(this);

    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Muestra el mensaje de éxito o error.
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
});
