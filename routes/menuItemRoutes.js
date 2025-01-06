const express = require('express')
const router = express.Router();
const MenuItem = require('./../models/MenuItem')

router.post('/', async (req,res)=>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data)
        const response = await newMenu.save()
        console.log('data saved')
        res.status(200).json(response)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

router.get('/',async (req,res)=>{
    try{
        const data = await MenuItem.find()
        console.log('data fetched')
        res.status(200).json(data)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})

router.get('/:taste',async (req,res)=>{
    try{
        const taste = req.params.taste;
        if (taste == 'sweet' || taste == 'sour' || taste == 'spicy') {
            const response = await MenuItem.find({taste: taste})
            console.log('response fetched')
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error: "menu not found"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const menuId = req.params.id;
        const updatedmenuData = req.body

        const response = await MenuItem.findByIdAndUpdate(menuId,updatedmenuData, {
            new: true,
            runValidators: true
        })

        if (!response) {
            res.status(404).json({message: "menu not found"})
        }

        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})
router.patch('/:id', async (req,res)=>{
    try{
        const menuId = req.params.id;
        const updatedmenuData = req.body

        const response = await MenuItem.findByIdAndUpdate(menuId,updatedmenuData, {
            new: true,
            runValidators: true
        })

        if (!response) {
            res.status(404).json({message: "menu not found"})
        }

        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const menuId = req.params.id;

        const response = await MenuItem.findByIdAndDelete(menuId)

        if (!response) {
            res.status(404).json({message: "menu not found"})
        }

        console.log('data delete')
        res.status(200).json({message: "Menu Data Deleted Successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = router;