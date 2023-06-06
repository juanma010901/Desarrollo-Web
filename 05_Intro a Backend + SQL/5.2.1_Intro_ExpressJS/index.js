const express = require('express')
const app = express()

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1> Hello! </h1>')
})

app.get('/api', (req, res) => {
    res.json({
        nombre: "Juan M",
        apellido: "Hincapié",
        edad: 22
    })
})

//Para pasar QUERY ?data=valor&data2=valor2
app.get('/user', (req, res) => {
    let user = req.query
    console.log(user)
    res.json({
        username: user
    })
})

//Para pasar parametros: Donde están los ":" se enviarán los parámetros
app.get('/ejemplo/:numero', (req, res) => {
    let params = req.params
    console.log(params)
    res.json({
        params: params
    })
})



app.listen(8080, () => {
    console.log(`Server up on port: 8080`)
})