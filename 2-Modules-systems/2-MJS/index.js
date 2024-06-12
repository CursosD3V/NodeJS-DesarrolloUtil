// Importando 1 función o constante o más de un archivo
import { suma, multiplicacion, resta } from './operaciones.js';

console.log("Suma:", suma(2, 7), "Resta:", resta(10, 5), "Multiplicación:", multiplicacion(3, 4));

// No se puede hacer
// console.log(__dirname, __filename); // Error

// La salida es: ReferenciaError: __dirname is not defined in ES module scope, you can use import.meta.url instead

// Para obtener la ruta del archivo actual se puede usar import.meta.url
console.log(import.meta.url);

// Tampoco podemos hacer una importación de json
import users from './users.json'; // Error
console.log(users);