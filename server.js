const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const path = require('path');  // Para manejar las rutas correctamente
const app = express();
const port = 3000;

// Configurar Body Parser para manejar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la conexión a la base de datos
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'tienda_pescados',
  password: 'yadira123',
  port: 5432,
});

// Conectar a la base de datos
client.connect()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error('Error de conexión a la base de datos', err));

// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','nosotros.html'));  // Uso de path.join para manejar rutas
});

// Ruta para manejar la recepción del formulario
app.post('/submit', async (req, res) => {
  const { nombre, email, direccion, telefono } = req.body;

  try {
    // Insertar datos en la base de datos
    const result = await client.query(
      'INSERT INTO formulario (nombre, email, direccion, telefono) VALUES ($1, $2, $3, $4)',
      [nombre, email, direccion, telefono]
    );
    res.send('Formulario enviado con éxito.');
  } catch (err) {
    console.error('Error al insertar en la base de datos', err);
    res.send('Hubo un error al guardar los datos.');
  }
});

// Cerrar la conexión cuando el servidor se detiene
process.on('SIGINT', () => {
  client.end()
    .then(() => {
      console.log('Conexión a la base de datos cerrada');
      process.exit();
    })
    .catch((err) => {
      console.error('Error al cerrar la conexión', err);
      process.exit(1);
    });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
