Feature('Pruebas de integración');

Scenario('Enviar transacción y verificar últimas transacciones', ({I}) => {
  I.amOnPage('/');
  I.fillField('#Descripcion', 'Compra de alimentos');
  I.fillField('#Precio', '50');
  I.click('Guardar Transaccion');

  I.see('Transacción insertada correctamente');

  // Verificar que las últimas transacciones se muestran correctamente
  I.see('Compra de alimentos: $50', '#listaTransacciones');
});
