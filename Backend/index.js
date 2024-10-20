import express from 'express';
import { createPool } from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const pool = createPool({
    host: 'cwe1u6tjijexv3r6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'sayqs9nmswsaipkv',
    password: 'x1sh2kupdhtij79x',
    database: 'gdhllnwvgt3kkj5m',
    port: 3306
});

// Verifica la conexión a la bd
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos establecida correctamentee');
        connection.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
})();

app.post('/transaction', async (req, res) => {
    try {
        const { Descripcion, Precio } = req.body;

        // La lógica en el backend permanece igual
        const insertQuery = 'INSERT INTO transaccion (Descripcion, Precio) VALUES (?, ?)';
        const result = await pool.query(insertQuery, [Descripcion, Precio]);
        
        console.log('Transacción insertada correctamente en la base de datos');
        res.status(200).send('Transacción insertada correctamente');
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});


//  GET para obtener las últimas 5 transacciones
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

const PORT = process.env.PORT || 3000; // Usa el puerto proporcionado por Heroku o el 3000 por defecto

app.listen(PORT, () => {
    console.log(`Estoy escuchando en el puerto ${PORT}`);
});

export default app; 