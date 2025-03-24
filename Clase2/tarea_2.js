const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`${producto} ha sido agregado a la lista.`);
    } else {
        console.log(`${producto} ya está en la lista.`);
    }
};

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${producto} ha sido eliminado de la lista.`);
    } else {
        console.log(`${producto} no se encuentra en la lista.`);
    }
};

const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:", listaDeCompras.join(", "));
    }
};

// Lista de Compras:
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Harina");
agregarProducto("Canela");
agregarProducto("Vainilla");
agregarProducto("Chocolate");
agregarProducto("Levadura");
agregarProducto("Huevos");
agregarProducto("Aceite de oliva");
mostrarLista();
console.log ("----------------------------------------------")
agregarProducto("Manzanas"); // Producto duplicado
agregarProducto("Leche");
mostrarLista();
console.log ("----------------------------------------------")
eliminarProducto("Canela");
mostrarLista();
