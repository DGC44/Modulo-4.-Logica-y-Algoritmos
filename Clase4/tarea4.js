const invitados = ["Ana", "Carlos", "Diana", "Cecilia", "Dylan","Gustavo", "Gabriel", "Esmeralda","Eduardo", "Miguel", "Alejandro", "Daniela", "Esther", "Estela","Ilda"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        if (arr[inicio][0] === arr[siguiente][0]) {
            // Si coinciden, devuelve el par
            return [arr[inicio], arr[siguiente]];
        }
        // Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado [Gustavo, Gabriel]