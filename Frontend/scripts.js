const formElement = document.getElementById("GuardarTransaccion");
const listaTransaccionesElement = document.getElementById("listaTransacciones");
const mensajeElement = document.getElementById("mensaje");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let Descripcion = document.getElementById("Descripcion").value;
    let Precio = document.getElementById("Precio").value;
    let transaccion = { Descripcion: Descripcion, Precio: Precio };
    let transaccionJson = JSON.stringify(transaccion);

    fetch('https://ingsw3backend-5a663973aa85.herokuapp.com/transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: transaccionJson
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Mostrar mensaje de éxito
        mensajeElement.innerText = data;

        // Después de enviar la transacción, obtener las últimas transacciones
        fetch('https://ingsw3backend-5a663973aa85.herokuapp.com/lasttransactions')
        .then(response => response.json())
        .then(lastTransactions => {
            console.log('Últimas 5 transacciones:', lastTransactions);
            // Limpiar la lista
            listaTransaccionesElement.innerHTML = '';

            // Mostrar las últimas transacciones en la lista
            lastTransactions.forEach(transaction => {
                const listItem = document.createElement('li');
                listItem.textContent = `${transaction.descripcion}: $${transaction.precio}`;
                listaTransaccionesElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error al obtener las últimas transacciones:', error));
    })
    .catch(error => console.error('Error:', error));
});
