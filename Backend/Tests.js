import request from 'supertest';
import app from './index'; // Asegúrate de exportar tu aplicación desde index.js

describe('Test de las rutas del servidor', () => {
  let server;

  beforeAll(async () => {
    server = app.listen(4000); // Levanta el servidor en un puerto diferente para las pruebas
  });

  afterAll((done) => {
    server.close(done); // Cierra el servidor después de las pruebas
  });

  it('Debería obtener una respuesta "Hello World" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });

  it('Debería insertar una transacción correctamente', async () => {
    const newTransaction = {
      Descripcion: 'Prueba',
      Precio: 100
    };

    const response = await request(app)
      .post('/transaction')
      .send(newTransaction);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Transacción insertada correctamente');
  });

  it('Debería obtener las últimas transacciones', async () => {
    const response = await request(app).get('/lasttransactions');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeLessThanOrEqual(5); // Verifica que se obtengan como máximo 5 transacciones
  });
});
