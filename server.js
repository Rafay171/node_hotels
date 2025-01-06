const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())





// Import the router files
const usersRoutes = require('./routes/personRoutes')
app.use('/person',usersRoutes)

// Use the routers
const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

app.listen(3000,()=>{
    console.log('server file in running in port 3000')
})