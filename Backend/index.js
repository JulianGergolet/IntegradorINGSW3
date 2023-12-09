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
    // Código de manejo de transacciones
});

// Ruta GET para obtener las últimas 5 transacciones
app.get('/lasttransactions', async (req, res) => {
    // Código para obtener las últimas transacciones
});

// Obtener el puerto desde la variable de entorno PORT o usar 3000 como predeterminado
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Estoy escuchando en el puerto ${PORT}`);
});

export default app;
