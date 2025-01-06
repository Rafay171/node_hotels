const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000




// Import the router files
const usersRoutes = require('./routes/personRoutes')
app.use('/person',usersRoutes)

// Use the routers
const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

app.listen(PORT,()=>{
    console.log('server file in running in port 3000')
})