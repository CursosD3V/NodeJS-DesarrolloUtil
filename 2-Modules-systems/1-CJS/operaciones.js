const suma = (numA, numB) => {
    return numA + numB;
}

const resta = (numA, numB) => {
    return numA - numB;
}

const multiplicacion = (numA, numB) => {
    return numA * numB;
}

// What show module?
// The module object represents the current module.
// The module object is a global object that is available in all modules.
// The module object is an instance of the Module class.
// The module object has properties that provide information about the current module.
// console.log(module);

/**
 * Currently show the following properties:
 * - id: The identifier for the module. Typically the fully resolved filename.
 * - path: The fully resolved filename to the module.
 * - exports: A reference to the module.exports.
 * - filename: The fully resolved filename to the module.
 * - loaded: Whether or not the module is done loading, or is in the process of loading.
 * - children: An array of the module objects required by this one.
 * - paths: An array of search paths for required modules.
 * 
 * Example:
 * {
 *  id: '.',
 *  path: 'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\CJS',
 *  exports: {},
 *  filename: 'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\CJS\\operaciones.js',
 *  loaded: false,
 *  children: [],
 *  paths: [
 *    'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\CJS\\node_modules',
 *    'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\node_modules',
 *    'C:\\Projects\\Cursos\\Node\\node_modules',
 *    'C:\\Projects\\Cursos\\node_modules',
 *    'C:\\Projects\\node_modules',
 *    'C:\\node_modules'
 *  ]
 * }
 * 
 */

// Export module
module.exports = {
    suma,
    resta,
    multiplicacion
};

// console.log(module);

/**
 * Currently show the following properties:
 * - id: '.',
 * - path: 'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\CJS',
 * - exports: {
 *      suma: [Function: suma],
 *      resta: [Function: resta],
 *      multiplicacion: [Function: multiplicacion]
 *  },
 * - filename: 'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\CJS\\operaciones.js',
 * - loaded: true,
 * - children: [],
 * - paths: [
 *     'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\CJS\\node_modules',
 *     'C:\\Projects\\Cursos\\Node\\2-Modules-systems\\node_modules',
 *     'C:\\Projects\\Cursos\\Node\\node_modules',
 *     'C:\\Projects\\Cursos\\node_modules',
 *     'C:\\Projects\\node_modules',
 *     'C:\\node_modules'
 * ]
 */

// Cuando exportamos tenemos un alias para module.exports que es exports
// exports = module.exports
// exports = {
//     suma,
//     resta,
//     multiplicacion
// }
//
// module.exports = exports
// module.exports = {
//     suma,
//     resta,
//     multiplicacion
// }
//
// return module.exports
// return {
//     suma,
//     resta,
//     multiplicacion
// }
//
// Si hacemos lo siguiente:
// exports = {
//     suma,
//     resta,
//     multiplicacion
// }
//
// module.exports = {
//     division
// }
//
// return module.exports
// return {
//     division
// }
//
// Pero no es conveniente hacerlo de esta manera, ya que exports es un alias de module.exports 
// y si lo sobreescribimos perderemos la referencia a module.exports