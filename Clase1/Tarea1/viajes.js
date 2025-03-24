// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte, alojamiento, personas) => {
    // Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        alojamiento,
        personas,
        costo: calcularCosto(destino, transporte, alojamiento, personas)
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, alojamiento, personas) => {
    let costoBase = 0;

    // Costo base por destino
    switch (destino) {
        case "Paris":
            costoBase = 500;
            break;
        case "Londres":
            costoBase = 400;
            break;
        case "New York":
            costoBase = 600;
            break;
        case "Tokyo":
            costoBase = 700;
            break;
        case "Barcelona":
            costoBase = 450;
            break;
        case "Mexico":
            costoBase = 650;
            break;
        case "Colombia":
            costoBase = 250;
            break;
        default:
            costoBase = 300; // Costo por defecto
            break;
    }

    // Costo adicional por tipo de transporte
    costoBase += transporte === "Avión" ? 200 : transporte === "Tren" ? 100 : transporte === "Bus" ? 50 : 0;

    // Costo adicional por alojamiento
    costoBase += alojamiento === "Hotel 5 estrellas" ? 450 : alojamiento === "Hotel 3 estrellas" ? 300 : alojamiento === "Hostal" ? 100  : alojamiento === "Airbnb" ? 200 : 150;
    
    // Aplicar descuento por número de personas
    const descuento = personas > 2 ? 0.1 : 0; // 10% de descuento si más de 2 personas
    costoBase -= costoBase * descuento;

    return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento}`);
        console.log(`Personas: ${viaje.personas}`);
        console.log(`Costo: $${viaje.costo.toFixed(2)}`); // El costo del viaje se muestre con 2 decimales
        console.log("---------------------------");
    });
};

// Exportar las funciones
export { registrarDestino, mostrarItinerario };