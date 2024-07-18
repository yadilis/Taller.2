let total = 0;
let carrito = [];

const agregarProducto = (id, nombre, precio) => {
    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        const totalProducto = productoEnCarrito.cantidad * precio;
        document.getElementById(`cantidad-${id}`).textContent = productoEnCarrito.cantidad;
        document.getElementById(`total-${id}`).textContent = totalProducto.toFixed(2);
    } else {
        const nuevoProducto = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        };
        carrito.push(nuevoProducto);

        const tbody = document.getElementById("tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${nombre}</td>
            <td id="cantidad-${id}">1</td>
            <td>${precio.toFixed(2)}</td>
            <td id="total-${id}">${precio.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarProducto('${id}', ${precio})"><i class="bi bi-trash"></i></button></td>
        `;
        newRow.id = `fila-${id}`;
        tbody.appendChild(newRow);
    }

    total += precio;
    document.getElementById("total").textContent = total.toFixed(2);
};

const eliminarProducto = (id, precio) => {
    const productoIndex = carrito.findIndex(item => item.id === id);
    if (productoIndex !== -1) {
        const cantidad = carrito[productoIndex].cantidad;
        carrito.splice(productoIndex, 1);
        document.getElementById(`fila-${id}`).remove();
        total -= cantidad * precio;
        document.getElementById("total").textContent = total.toFixed(2);
    }
};
