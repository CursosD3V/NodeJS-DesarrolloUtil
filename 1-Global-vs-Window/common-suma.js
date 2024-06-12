// Forma 1
// function suma(numA, numB) {
//     return numA + numB;
// }

// Forma 2
const suma = (numA, numB) => { 
    return numA + numB 
};


// Yo puedo asignar a la función lo que quiero exportar
// module.exports = suma;

// o puedo asignar a un objeto lo que quiero exportar
module.exports = {
    suma
};

// La diferencia es que si asigno a la función, al importarla debo hacerlo de la siguiente forma:
// const suma = require('./common-suma');
// console.log(suma(1, 2));
