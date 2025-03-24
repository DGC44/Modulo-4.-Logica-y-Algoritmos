export const destinos = [];

export const registrarDestino = (destino, fecha, transporte, viajeros) => {
    destinos.push({
        destino,
        fecha,
        transporte,
        viajeros,
        costo: calcularCosto(destino, transporte, viajeros)
    });
};

export const calcularCosto = (destino, transporte, viajeros) => {
    const tarifasDestino = {
        Paris: 500,
        Londres: 400,
        "New York": 600
    };

    const tarifasTransporte = {
        Avión: 200,
        Tren: 100
    };

    const costoBase = (tarifasDestino[destino] || 0) + (tarifasTransporte[transporte] || 0);
    let costoTotal = costoBase * viajeros;

    // Descuento por número de viajeros
    if (viajeros > 3) costoTotal *= 0.9;
    if (viajeros > 5) costoTotal *= 0.85;

    return costoTotal;
};