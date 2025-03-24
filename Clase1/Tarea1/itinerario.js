import { destinos } from "./destino.js";

export const mostrarItinerario = () => {
    destinos.forEach(({ destino, fecha, transporte, costo, viajeros }) => {
        console.log(`Destino: ${destino}`);
        console.log(`Fecha: ${fecha}`);
        console.log(`Transporte: ${transporte}`);
        console.log(`Viajeros: ${viajeros}`);
        console.log(`Costo total: $${costo}`);
        console.log("---------------------------");
    });
};