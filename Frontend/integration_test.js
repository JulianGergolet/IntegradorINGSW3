Feature('Pruebas de integración');

Scenario('Enviar transacción y verificar últimas transacciones', async ({ I }) => {
  I.amOnPage('/');
  await I.waitForElement('#Descripcion');
  await I.fillField('#Descripcion', 'Compra de alimentos');
  await I.waitForElement('#Precio');
  await I.fillField('#Precio', '50');
  await I.click('Guardar Transaccion');

  await I.wait(5);
  await I.see('Transacción insertada correctamente');

  await I.see('Compra de alimentos: $50', '#listaTransacciones');
});

