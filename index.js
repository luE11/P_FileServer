const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const ip = require('ip')
const fs = require('fs')

app.use(bodyParser.json( {limit: "50mb"}))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Ok')
})

app.post('/savephoto', (req, res) => {
  let filePath = req.body.path
  let base64buffer = req.body.image
  let bufferObj = Buffer.from(base64buffer, 'base64')
  fs.writeFile(__dirname+filePath, bufferObj, function (err) {
    if(err){
      console.log("Error al guardar la imagen");
    }else{
      console.log("Imagen guardada en "+filePath)
    }
  })
})

app.listen(3000, () => {
  console.log(`Servidor ejecutandose en: http://${ip.address()}:${port}`)
})