// Description: Importing a module from a .mjs file.
import('./operaciones.mjs').then(({ suma }) => console.log(suma(1, 2)));