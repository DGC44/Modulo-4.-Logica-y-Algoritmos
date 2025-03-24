// Importar las funciones de viajes.js
import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", "Hotel 5 estrellas", 3);
    registrarDestino("Londres", "2024-07-01", "Tren", "Hotel 2 estrellas", 1);
    registrarDestino("New York", "2024-08-20", "Bus", "Airbnb", 4);
    registrarDestino("Tokyo", "2024-05-01", "Avión", "Hotel 3 estrellas", 5);
    registrarDestino("Barcelona", "2024-09-04", "Tren", "Hotel 5 estrellas", 2);
    registrarDestino("Mexico", "2024-10-11", "Bus", "Airbnb", 6);
    registrarDestino("Colombia", "2024-11-23", "Avión", "Camping", 2);
    registrarDestino("España", "2024-04-21", "Tren", "Hostal", 3);
    
    console.log("ITINERARIO DE VIAJES")
    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();