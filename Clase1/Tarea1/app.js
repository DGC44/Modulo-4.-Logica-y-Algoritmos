import { registrarDestino } from "./destino.js";
import { mostrarItinerario } from "./itinerario.js";

const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 4);
    
    mostrarItinerario();
};

iniciarApp();

