const mongoose = require('mongoose')

const mongoURL = 'mongodb://127.0.0.1:27017/mydatabase'

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnified
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