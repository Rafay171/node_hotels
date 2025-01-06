const express = require('express')
const router = express.Router()
const person = require('../models/person') // 1st method to import person models
// const person = require('../models/person') // 2nd method to import person models

router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newPerson = new person(data)

        const response = await newPerson.save()

        console.log('data saved')
        res.status(200).json(response)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await person.find()
        console.log('data fetched')
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; // Extract the work type from the URL parameter
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager' || workType == 'owner') {
            const response = await person.find({ work: workType })
            console.log('response fetched')
            res.status(200).json(response)
        }
        else {
            res.status(404).json({ error: "Invalid work type" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatedpersonData = req.body; // updated data for the person
        
        const response = await person.findByIdAndUpdate(personId,updatedpersonData, {
            new: true, // Return the updated document
            runValidators: true // Run Mongoose validation
        })
        if (!response) {
            return res.status(404).json({ error: "person not found" })
        }

        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; // Extract the person,s ID form the URL parameter

        // Assuming you have a person model
        const response = await person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({error: "person not found"})
        }
        console.log('data delete')
        res.status(200).json({message: "person Deleted Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = router;
