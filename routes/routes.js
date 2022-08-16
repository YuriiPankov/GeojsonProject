const express = require('express');
const router = express.Router()
const Model = require('../models/model');
const MapDataModel = require('../models/mapData');

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        type: req.body.type,
        name: req.body.name,
        crs: req.body.crs,
        features: req.body.features
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get MapData Method
router.get('/getMapData/', async (req, res) => {
    try {
        const data = await Model.find();
        const mapData = data.map(innerData => 
            new MapDataModel({
                name: innerData.name,
                longitude: innerData.features[0].geometry.coordinates[0][0],
                latitude: innerData.features[0].geometry.coordinates[0][1],
                id: innerData._id
            })
            );
        res.status(200).json({mapsDataResult: mapData});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(id, updatedData, options)
        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;