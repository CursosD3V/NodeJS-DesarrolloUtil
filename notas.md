# Notas sobre Node.js

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/es/download/)

## Comandos

#### Creación de archivo package

```
$ npm init --y
```

#### Instalación de libraría jsonwebtoken

```
npm install jsonwebtoken
```

#### Dependencia nodemon

Es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js reiniciando automáticamente la aplicación del nodo cuando se detectan cambios de archivos en el directorio.

```
npm install -E -D nodemon
```

Para configurarlo, editamos los scripts en nuestro `package.json`, colocamos una llave `dev` y agreamos el script nodemon `./index.js` o el archivo principal de nuestro proyecto:

```
  "scripts": {
    "dev": "nodemon . /index.js"
  },
```

- `-E`: Fijar en el proyecto _(Esta opción asegura que se guarde la versión exacta del paquete en el archivo package.json)._
- `-D`: Sólo en modo desarrollo _(Esta opción indica que nodemon será una dependencia de desarrollo. Esto significa que nodemon será necesario solo durante el desarrollo del proyecto, pero no en el entorno de producción)._

#### Dependecia dotenv

Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env en Process.env. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de la aplicación Twelve-Factor.

```
npm install dotenv
```

#### Ejecutar scripts

```
npm run dev
```

#### Instalación de EXPRESS

```
npm install -E express
```

## Notas

#### Uso de CJS y MJS

Para identificar qué tipo de sistema de módulo quiero usar, se debe de identificar en`package.json`, por defecto si no se declara el sistema de módulo a usar es `commonjs`, pero si deseamos usar `ES` debe de ponerse `"type": "module"`.

Ya si queremos utilizar los dos sistemas en un mismo proyecto, lo quedebemos hacer es dejar en `"type": "module"` y al querer usar `commonjs` el archivo js debemos de ponerle como extensión `.cjs`, de esa forma forzamos que sea CommonJS, mientras que el proyecto seguiría usan ECMAScript. Si en el caso fuea al revés, el archivo debe tener como extesión `.mjs`

#### HTTP

##### Solicitud HTTP

![Solicitud HTTP](https://hackmd.io/_uploads/rkj_KOpbR.png)

##### Respuesta HTTP

![Respuesta HTTP](https://hackmd.io/_uploads/HkkhtdTWR.png)

#### Segmentos variables en URL

En Express.js, los segmentos variables en las rutas permiten capturar valores dinámicos en las URLs. Estos segmentos se definen utilizando dos puntos (`:`) seguidos por un nombre en la ruta de la URL. Esta funcionalidad es útil cuando se necesitan manejar rutas que tienen partes variables, como identificadores únicos, nombres de usuarios, etc.

Por ejemplo, en la ruta `/usuarios/:id`, `:id` es un segmento variable que puede representar cualquier valor en la URL.

Aquí hay algunas características importantes sobre el uso de segmentos variables en Express.js:

1. Captura de valores dinámicos: Cuando se hace una solicitud HTTP a una ruta que contiene un segmento variable, Express captura el valor de ese segmento y lo hace accesible a través del objeto req.params.
2. Acceso al valor capturado: El valor capturado se puede acceder mediante req.params.nombreDelSegmento. En el ejemplo anterior, si la ruta es /usuarios/123, entonces req.params.id contendrá el valor `'123'`.
3. Pueden haber múltiples segmentos variables: Una ruta puede contener múltiples segmentos variables. Por ejemplo, `/usuarios/:id/posts/:postId` captura tanto el id del usuario como el postId del post.
4. Coincidencia de patrones: Las rutas con segmentos variables coinciden con cualquier URL que tenga el mismo patrón, independientemente del valor real del segmento variable. Esto permite manejar de manera eficiente diferentes solicitudes con un solo manejador de ruta.
5. Flexibilidad en el manejo de rutas: El uso de segmentos variables hace que las rutas sean más flexibles y dinámicas. Esto es útil para construir aplicaciones web o APIs RESTful donde las URL pueden variar según los datos específicos que se están manipulando.

#### Headers

Podemos obtener los headers usando expressjs con el mismo parámetro que se utiliza con nodejs nativo

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Aquí puedes acceder a los headers de la solicitud
  console.log(req.headers);

  // Envía una respuesta al cliente
  res.send('Hola mundo!');
});

app.listen(3000, () => {
  console.log('Servidor Express corriendo en el puerto 3000');
});
```

Además tenemos `req.get()` la finalidad de este método es obtener en específico una cabecera del request

```
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta que maneja solicitudes GET a '/ejemplo'
app.get('/ejemplo', (req, res) => {
  // Obtiene el valor del encabezado 'user-agent'
  const userAgent = req.get('user-agent');

  // Verifica si se proporcionó el encabezado 'user-agent'
  if (userAgent) {
    res.send(`Valor del encabezado 'user-agent': ${userAgent}`);
  } else {
    res.send('No se proporcionó el encabezado \'user-agent\' en la solicitud.');
  }
});

// Inicia el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Por otro lado con el `response` podemos definir un valor de estado el cual por defecto es afirmativo; pero si en el caso la persona no está autenticada se envía un 401 y en el body devolvemos un objeto con errorMessage de No autorizado

```
app.get('/ejemplo', (req, res) => {
  // Verificar si el usuario está autenticado
  const estaAutenticado = false; // Ejemplo: Supongamos que el usuario no está autenticado

  if (estaAutenticado) {
    // Si el usuario está autenticado, responder con un mensaje de éxito
    res.send('Bienvenido, usuario autenticado!');
  } else {
    // Si el usuario no está autenticado, responder con un código de estado 401 y un mensaje de error
    res.status(401).send({ errorMessage: "No autorizado" }); // Nos faciita pintárselo al usuario en front

    // O enviar simplemente un string
    res.status(401).send("No autorizado");
  }
});
```

#### Consideraciones

- No es buena práctica incluir el body en un método get, lo mejor es retornar un error si es que existe un body:

```
const express = require('express');
const app = express();

// Middleware para manejar errores de body en solicitudes GET
const handleGetBodyError = (req, res, next) => {
  if (req.method === 'GET' && Object.keys(req.body).length > 0) {
    return res.status(400).json({ error: 'El método GET no debe incluir un cuerpo en la solicitud.' });
  }
  next();
};

// Middleware para manejar errores no encontrados
const handleNotFound = (req, res, next) => {
  return res.status(404).json({ error: 'Recurso no encontrado' });
};

// Middleware para manejar errores generales
const handleErrors = (err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ error: 'Error interno del servidor' });
};

// Aplicar middleware
app.use(express.json());
app.use(handleGetBodyError);
app.use(handleNotFound);
app.use(handleErrors);

// Ruta de ejemplo con método GET
app.get('/ejemplo', (req, res) => {
  res.send('Esta es una respuesta de ejemplo para una solicitud GET.');
});

// Ejemplo de incluir body en el get
app.get('/producto', (req, res) => {
    // res.send('Mi cuenta personal');
    console.log(req.body);

    res.send();

});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

```

## Links

#### Documentación - Node

- Versiones de Node: https://nodejs.org/es/about/releases/
- Descarga de Node Windows/MacOs: https://nodejs.org/es/download/
- Descarga de Node Ubuntu/Debian/RHEL: https://github.com/nodesource/distributions/blob/master/README.md
- Documentación de Node: https://nodejs.org/es/docs/

#### Documentación - Express

- Express documentación V4: https://expressjs.com/es/4x/api.html

#### Globals

- Globals: https://nodejs.org/dist/latest-v22.x/docs/api/globals.html
- Globals CJS: https://nodejs.org/dist/latest-v22.x/docs/api/modules.html#the-module-scope
- URL: https://nodejs.org/dist/latest-v22.x/docs/api/url.html

#### CommonJS (CJS) & ECMAScript Modules (ESM)

- Documentación Common.JS (CJS): https://nodejs.org/dist/latest-v22.x/docs/api/modules.html
- Documentación ECMAScript Modules (ESM): https://nodejs.org/dist/latest-v22.x/docs/api/esm.html
- CJS con ESM: https://nodejs.org/dist/latest-v22.x/docs/api/esm.html#interoperability-with-commonjs

#### Servidor en Node.JS & Principios HTTP

- Capas OSI: https://www.guru99.com/images/1/092119_0729_LayersofOSI1.png
- Verbos HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Methods
- Códigos de estado: https://www.webfx.com/web-development/glossary/http-status-codes/
- Códigos de estado con gatos: https://http.cat/
- Documentación http Node: https://nodejs.org/docs/latest-v22.x/api/http.html

#### Utilidades

- https://json-generator.com/

---

Por @adelsguerr
