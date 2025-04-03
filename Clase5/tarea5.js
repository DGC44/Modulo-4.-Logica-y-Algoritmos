function findLongestWord(text) {
    let words = text.split(' '); // Dividir el texto en palabras
    let longestWord = ""; // Inicializar la palabra más larga

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; // Actualizar si se encuentra una palabra más larga
        }
    }
    
    return longestWord;
}

// Ejemplos de uso

//let paragraph = "Imagina que estás desarrollando una herramienta para escritores";
//console.log(findLongestWord(paragraph)); // "desarrollando"

//let paragraph = "Historias que dejan huella, entregadas a tu puerta cada mes.";
//console.log(findLongestWord(paragraph)); // "entregadas"

//let paragraph = "Tu próxima historia favorita , escrita por alguien como tú.";
//console.log(findLongestWord(paragraph)); // "historia"

let paragraph = "Transformamos tu manuscrito en un libro inolvidable.";
console.log(findLongestWord(paragraph)); // "transformamos"
