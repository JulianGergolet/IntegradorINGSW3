import { assert } from 'chai';
import fetch from 'node-fetch';

describe('Backend API Tests', () => {
    // Prueba para verificar la conexión a la base de datos al iniciar el servidor
    it('Should establish a connection to the database', async () => {
        // Realiza una solicitud GET a la ruta principal del servidor
        const response = await fetch('http://localhost:3000/');
        const data = await response.text();

        assert.equal(data, 'Hello World');
    });

    // Prueba para verificar la inserción de una transacción en la base de datos
    it('Should insert a transaction into the database', async () => {
        const transaction = {
            Descripcion: 'Compra de libros',
            Precio: 50
        };

        // Realiza una solicitud POST para insertar la transacción
        const postResponse = await fetch('http://localhost:3000/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        });
        const postData = await postResponse.text();

        assert.equal(postResponse.status, 200);
        assert.equal(postData, 'Transacción insertada correctamente');
    });

    // Prueba para verificar la obtención de las últimas transacciones desde la base de datos
    it('Should retrieve the last 5 transactions from the database', async () => {
        // Realiza una solicitud GET para obtener las últimas transacciones
        const response = await fetch('http://localhost:3000/lasttransactions');
        const data = await response.json();

        assert.equal(response.status, 200);
        assert.isArray(data);
        assert.isAtMost(data.length, 5);
    });
});
