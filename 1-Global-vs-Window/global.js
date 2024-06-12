console.log(window);

// window is the global object in the browser

// The document property of a window object points to the DOM document loaded in that window.
// window.document === document; // true 

// When we use node.js, the global object is called global
console.log(global);

document = global.document;

global.document === document; // false

// The process object is a global that provides information about, and control over, the current Node.js process.
console.log(process);

// The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.
process.exit();

// process.env is an object containing the user environment
console.log(process.env); // environment variables

