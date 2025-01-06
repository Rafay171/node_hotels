const mongoose = require('mongoose')
require('dotenv').config()
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDB server is connected')
})

db.on('error',(error)=>{
    console.log('MongoDB server is not connecting',error)
})

db.on('disconnected',()=>{
    console.log('MongoDB server disconnecting')
})

module.exports = db;