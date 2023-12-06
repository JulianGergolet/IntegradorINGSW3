import express from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());

// Middleware para permitir el uso de JSON en las solicitudes
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const pool = createPool({
    host: 'database',
    user: 'root',
    password: 'julian',
    database: 'juliancito',
    port: 3306
});

// Verifica la conexión a la base de datos al inicio del servidor
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos establecida correctamente');
        connection.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
})();

// Ruta POST para insertar en la base de datos
app.post('/transaction', async (req, res) => {
    try {
        const { Descripcion, Precio } = req.body;
        const insertQuery = 'INSERT INTO transaccion (Descripcion, Precio) VALUES (?, ?)';
        const result = await pool.query(insertQuery, [Descripcion, Precio]);
        
        console.log('Transacción insertada correctamente en la base de datos');
        res.status(200).send('Transacción insertada correctamente');
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Ruta GET para obtener las últimas 5 transacciones
app.get('/lasttransactions', async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM transaccion ORDER BY id DESC LIMIT 5';
        const [rows] = await pool.query(selectQuery);
        
        console.log('Últimas transacciones obtenidas correctamente');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error al obtener las últimas transacciones:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(3000, () => {
    console.log('Estoy escuchando en el puerto 3000');
});
