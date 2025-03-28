const invitados = ["Ana", "Carlos", "Diana", "Cecilia", "Dylan","Gustavo", "Gabriel", "Esmeralda","Eduardo", "Miguel", "Alejandro", "Daniela", "Esther", "Estela","Ilda"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado [Gustavo, Gabriel]