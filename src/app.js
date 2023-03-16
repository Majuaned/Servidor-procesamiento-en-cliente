const express = require("express");
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})
