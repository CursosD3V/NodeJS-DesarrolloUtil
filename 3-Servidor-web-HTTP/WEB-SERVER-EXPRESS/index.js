console.clear();

import express from "express";

const PORT = 3000;
const app = express();

const handleGetBodyError = (req, res, next) => {
    if (req.method === 'GET' && Object.keys(req.body).length > 0) {
        return res.status(400).json({ error: 'El método GET no debe incluir un cuerpo en la solicitud.' });
    }
    next();
};

app.use(express.json()); //Funciona para todos los métodos HTTP
app.use(express.text()); //Funciona para todos los métodos HTTP
app.use(handleGetBodyError);

// Puedo utilizar diferentes métodos HTTP para acceder a la misma ruta
// get, post, put, delete, patch, all
app.get('/producto', (req, res) => {
    // res.send('Mi cuenta personal');
    console.log(req.body);

    res.send();

});


app.post('/producto', (req, res) => {
    // res.send('Mi cuenta personal');
    console.log(req.body);

    res.send();

});

// Con query params
app.post('/item', (req, res) => {
    // res.send(`Mi cuenta personal con id: ${req.params.idcuenta}`);

    console.log(req.query);

    res.send();
});



app.put('/producto', (req, res) => {
    // res.send(`Mi cuenta personal con id: ${req.params.idcuenta}`);

    console.log(req.body);

    res.send();
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

