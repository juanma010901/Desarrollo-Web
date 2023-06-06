const express = require('express')
const app = express()

let Routes = require('./routes')

app.use('/users', Routes.UserRoutes)

app.listen(8080, () => {
    console.log(`Server up on port: 8080`)
})