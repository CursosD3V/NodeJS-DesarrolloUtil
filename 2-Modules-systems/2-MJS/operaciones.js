export const suma = (numA, numB) => {
    return numA + numB;
}

export const resta = (numA, numB) => {
    return numA - numB;
}

export const multiplicacion = (numA, numB) => {
    return numA * numB;
}

// Para exportar con EMACScript
// se antecede em cada constante la palabra reservada export
// export const suma = (numA, numB) => { ... }
// o tambien se puede exportar al final del archivo con un linear export o export nombrado
// export {suma, resta, multiplicacion}

// No está permitido exportar la declaración, debe ser un objeto
// export multiplicacion; // Error

// La otra forma de exportar es con export default
// export default multiplicacion;
// export default {suma, resta, multiplicacion}; // Error

// Lo que hace es exportar un valor por defecto, que puede ser cualquier valor, un objeto, una función, una clase, etc.
// Se puede importar con cualquier nombre y tomará el valor por defecto.