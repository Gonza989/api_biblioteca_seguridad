const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
// Importamos el Middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
  audience: "https://localhost:3000/api/biblioteca",
  issuerBaseURL: "https://dev-plq6f6ped4q4wd3v.us.auth0.com/",
  tokenSigningAlg: "RS256",
});


const app = express();
app.use(express.json());


// Importamos el Router de Libros
const librosRouter = require("./routes/libros");


app.use("/libros", autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
