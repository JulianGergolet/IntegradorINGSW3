const formElement = document.getElementById("GuardarTransaccion");
const listaTransaccionesElement = document.getElementById("listaTransacciones");
const mensajeElement = document.getElementById("mensaje");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let Descripcion = document.getElementById("Descripcion").value.trim();
    let Precio = document.getElementById("Precio").value.trim();

    // Validación de campos vacíos
    if (!Descripcion || !Precio) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // Validación de campo Precio para permitir solo números
    if (isNaN(Precio)) {
        alert("El campo Precio solo puede contener números");
        return;
    }

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
        mensajeElement.classList.remove("error");
        mensajeElement.classList.add("exito");

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            mensajeElement.innerText = '';
            mensajeElement.classList.remove("exito");
        }, 5000);

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
    .catch(error => {
        console.error('Error:', error);
        mensajeElement.innerText = 'Error al insertar la transacción';
        mensajeElement.classList.remove("exito");
        mensajeElement.classList.add("error");
    });
});

// Validar el campo Precio para permitir solo números
document.getElementById("Precio").addEventListener("input", (event) => {
    const input = event.target;
    const value = input.value;
    
    if (isNaN(value)) {
        alert("El campo Precio solo puede contener números");
        input.value = value.replace(/\D/g, '');
    }
});
