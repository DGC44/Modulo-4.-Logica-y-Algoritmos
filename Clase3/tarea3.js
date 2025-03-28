// Arreglo de productos
const productos = [
    // Electrónica
    { nombre: "Mouse", precio: 50, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 80, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 200, categoria: "Electrónica" },
    { nombre: "Audífonos", precio: 90, categoria: "Electrónica" },
    { nombre: "Cargador", precio: 30, categoria: "Accesorios" },
    
    // Higiene
    { nombre: "Jabón", precio: 15, categoria: "Higiene" },
    { nombre: "Shampoo", precio: 70, categoria: "Higiene" },
    { nombre: "Pasta dental", precio: 40, categoria: "Higiene" },
    { nombre: "Desodorante", precio: 55, categoria: "Higiene" },
    
    // Ropa
    { nombre: "Toalla", precio: 150, categoria: "Ropa" },
    { nombre: "Camiseta", precio: 90, categoria: "Ropa" },
    { nombre: "Pantalón", precio: 200, categoria: "Ropa" },
    { nombre: "Calcetines", precio: 30, categoria: "Ropa" },
    
    // Limpieza
    { nombre: "Detergente", precio: 85, categoria: "Limpieza" },
    { nombre: "Escoba", precio: 60, categoria: "Limpieza" },
    { nombre: "Trapeador", precio: 70, categoria: "Limpieza" },
    { nombre: "Cloro", precio: 40, categoria: "Limpieza" }
];

// Filtrar productos con precio menor a $100
const productosFiltrados = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:", productosFiltrados);

// Ordenar alfabéticamente por nombre
const productosOrdenados = productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

// Obtener solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

// Uso de reduce() para obtener el precio total de los productos filtrados
const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
console.log("Suma de los precios de los productos:", precioTotal);

// Uso de some() para verificar si hay algún producto de la categoría 'Accesorios'
const hayAccesorios = productosFiltrados.some(producto => producto.categoria === "Accesorios");
console.log("¿Hay productos de la categoría 'Accesorios' en los filtrados?", hayAccesorios);
