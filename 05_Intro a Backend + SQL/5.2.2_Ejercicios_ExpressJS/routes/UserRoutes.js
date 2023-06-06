let express = require('express')
let router = express.Router()

router.use('/static', express.static('public'))

router.get('/', (req, res) => {
    res.send('<h1> Hello! </h1>')
})

router.get('/api', (req, res) => {
    res.json({
        nombre: "Juan M",
        apellido: "Hincapié",
        edad: 22
    })
})

//Para pasar QUERY ?data=valor&data2=valor2
router.get('/user', (req, res) => {
    let user = req.query
    console.log(user)
    res.json({
        username: user
    })
})

//Para pasar parametros: Donde están los ":" se enviarán los parámetros
router.get('/ejemplo/:numero', (req, res) => {
    let params = req.params
    console.log(params)
    res.json({
        params: params
    })
})


module.exports = router