//lo que se instala
const express = require("express")
const login = require("morgan")
const cors = require("cors")

// importes ruta
const indexRouter = require("./routes/index")
const apiRouter = require("./routes/api")

//connect
const {connect} = require("./db/db")

//express
const app = express()

//uso con express
app.use (login("devnpm "))
app.use (express.json())
app.use (cors())

//rutas
app.use("/", indexRouter)
app.use("/api", apiRouter)

//conexion con la base de datos
connect();



module.exports = app
