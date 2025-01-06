const mongoose = require('mongoose')

const personSchema = {
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef','manager','waiter','owner','bangi'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    }
}

const person = mongoose.model('person',personSchema)

module.exports = person;