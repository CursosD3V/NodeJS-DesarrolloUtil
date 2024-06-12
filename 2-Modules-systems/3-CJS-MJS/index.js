// createRequire es una función que se utiliza para importar módulos de CommonJS en módulos de ES6
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// // Importando 1 función o constante o más de un archivo
// import { suma } from './operaciones.cjs';

// console.log(suma(1, 2)); // 3

const users = require('./users.json');

console.log(users);