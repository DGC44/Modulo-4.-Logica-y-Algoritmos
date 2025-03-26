// Metodos adicionales de arreglos

const numeros = [1, 2, 3, 4, 5]
// const funcion= (acumulador, elemento) => acumulador + elemento
const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(suma)

// Numero maximo
const numeros2 = [3, 5, 66, 2, 8, 27, 3, 1]
const max = numeros2.reduce((current_max, valor) => {
    if (valor > current_max) { // 66 > 5
        return valor
    } else {
        return current_max
    }z
},0) // Current max es el acumulador. Compara numero por numero
// const max = numeros2.reduce((current_max, valor) => valor > current_max ? valor : current_max, 0)    --- Esto es igual al if
console.log(max)

console.log ("-----------------------")

// Every 
const numeros3 = [2, 4, 6, 8]
const todosPares = numeros3.every(elemento => elemento % 2 === 0)
console.log(todosPares)
// O de otra forma, en una sola linea:
console.log(numeros3[0] % 2 === 0 && numeros3[1] % 2 === 0 && numeros3[2] % 2 === 0 && numeros3[3] % 2 === 0)

console.log ("-----------------------")

// Some
const numeros4 = [1, 2, 3, 3, 5]
const hayPares = numeros4.some(elemento => elemento % 2 === 0)
console.log(hayPares)
console.log(numeros4[0] % 2 === 0 || numeros4[1] % 2 === 0 || numeros4[2] % 2 === 0 || numeros4[3] % 2 === 0 || numeros4[4] % 2 === 0)

console.log ("-----------------------")

// Includes
const nombres = ['Mackaber', 'Luis', 'Ana', 'Pedro', 'Juan']
const incluyeJuan = nombres.includes('Juan')
console.log(incluyeJuan)

console.log ("-----------------------")

let carritocompras = {
    productos: [],
    agregarProducto: function (producto) {
        this.productos.push(producto)
    },
    eliminarProducto: function(indice) {
        this.productos.splice(indice, 1)
    },
    this_en_objeto: function() {
        return this
    },
    this_en_arrow: () => {
        return this
    }

}

carritocompras.agregarProducto('Leche')
carritocompras.agregarProducto('Manzanas')
carritocompras.agregarProducto('Platanos')
carritocompras.agregarProducto('Uvas')

console.log(carritocompras.productos)

carritocompras.eliminarProducto(0) //Elimina el primero
console.log(carritocompras.productos)
console.log(carritocompras.this_en_objeto())
console.log(carritocompras.this_en_arrow())