const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Reemplaza con tu nombre de usuario de MySQL
    password: '', // Reemplaza con tu contraseña de MySQL
    database: 'prueba_transacciones' // Reemplaza con el nombre de tu base de datos
});

db.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Ruta GET para verificar que el servidor está funcionando
app.get('/transaction', (req, res) => {
    res.send('¡El servidor está funcionando!');
});

// Ruta POST para insertar en la base de datos
app.post('/transaction', (req, res) => {
    const { Descripcion, Precio } = req.body;

    const insertQuery = 'INSERT INTO transaccion (Descripcion, Precio) VALUES (?, ?)';
    db.query(insertQuery, [Descripcion, Precio], (err, result) => {
        if (err) {
            console.log('Error al insertar en la base de datos:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Transacción insertada correctamente en la base de datos');
            res.status(200).send('Transacción insertada correctamente');
        }
    });
});

// Ruta GET para obtener las últimas 5 transacciones
app.get('/lasttransactions', (req, res) => {
    const selectQuery = 'SELECT * FROM transaccion ORDER BY id DESC LIMIT 5';
    db.query(selectQuery, (err, result) => {
        if (err) {
            console.log('Error al obtener las últimas transacciones:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Últimas transacciones obtenidas correctamente');
            res.status(200).json(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Estoy escuchando en http://localhost:${port}`);
});
