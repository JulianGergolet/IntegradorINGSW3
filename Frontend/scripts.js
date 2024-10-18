const formElement = document.getElementById("GuardarTransaccion");
const listaTransaccionesElement = document.getElementById("listaTransacciones");
const mensajeElement = document.getElementById("mensaje");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Obtener la hora actual
    const now = new Date();
    const horas = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const precio = `${horas},${minutos}`;  // Formato "20,07"
    
    // Actualizar la descripción con la hora
    const descripcion = `Toma de creatina a las ${horas}:${minutos}`;
    
    // Crear el objeto de transacción con la nueva descripción y precio
    let transaccion = { Descripcion: descripcion, Precio: precio };
    let transaccionJson = JSON.stringify(transaccion);

    // Enviar la transacción al backend
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
        mensajeElement.innerText = data;
        mensajeElement.classList.remove("error");
        mensajeElement.classList.add("exito");

        setTimeout(() => {
            mensajeElement.innerText = '';
            mensajeElement.classList.remove("exito");
        }, 5000);

        // Obtener las últimas transacciones
        // Modificar la parte donde se muestran las últimas transacciones
fetch('https://ingsw3backend-5a663973aa85.herokuapp.com/lasttransactions')
.then(response => response.json())
.then(lastTransactions => {
    listaTransaccionesElement.innerHTML = '';

    lastTransactions.forEach(transaction => {
        const descripcion = transaction.Descripcion || transaction.descripcion; // Asegúrate de que la propiedad coincida
        const precio = transaction.Precio || transaction.precio; // Asegúrate de que la propiedad coincida

        const listItem = document.createElement('li');
        listItem.textContent = `${descripcion}: $${precio}`;
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
