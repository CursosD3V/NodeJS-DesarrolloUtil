// In the browser I can declare an variable global with var
// var globalVar = 'I am a global variable';
// And I can access to this variable from the window object
// console.log(window.globalVar); // 'I am a global variable'
// But this is not a good practice, because I can overwrite the global object
// And I can't do this in node.js

var miValor = 21331;

console.log(global.miValor); // undefined
console.log(miValor); // 21331

// or I can use the global object
global.miValor = 21331;
console.log(global.miValor); // 21331

