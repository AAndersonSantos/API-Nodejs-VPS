require('dotenv').config();
const express = require('express');
const port = process.env.SERVER_PORT || 8080
const app = express();

app.use(express.urlencoded({ extended: true }))

const routes = require("./src/routes/route");

app.use(routes)

app.listen(port, () => {
    console.log("Servidor conectado na porta: " + port)
})