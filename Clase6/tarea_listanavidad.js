
// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota", "Un hunko de Harry Potter", "Jenga", "Xbox", "Oso de peluche"];

// Función recursiva para buscar un regalo
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: Si encontramos el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: seguimos buscando en la siguiente posición
    return findGift(gifts, giftName, index + 1);
}

// Ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); // "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); // "Camión no está en la lista."

giftToFind = "Muñeca de Frozen";
console.log(findGift(gifts, giftToFind)); 

giftToFind = "Hunko de Harry Potter";
console.log(findGift(gifts, giftToFind)); 