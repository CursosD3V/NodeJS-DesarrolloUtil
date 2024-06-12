import express from "express";
import dotenv from "dotenv";
import { USERS_BBDD } from "./bbdd.json";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.text());

console.log(process.env);

// Obtener los detalles de una cuenta
app.get()

// Crear una nueva cuenta
app.get.app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
// Actualizar una cuenta
app.patch()
// Eliminar una cuenta
app.delete()

app.listen(PORT, () => console.log(`Servidor en el puerto ${port}!`))