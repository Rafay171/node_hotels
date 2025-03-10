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

// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}

app.get('/', logRequest ,function(req,res){
    res.send('Welcome to our hotel')
})

app.listen(PORT,()=>{
    console.log('server file in running in port 3000')
})