import mongoose from 'mongoose'
import express from 'express'
import { Car } from '../models/Car'
let router = express.Router()

router.get('/', (req, res) => {
    Car.find(req.query).
        exec().
        then(result => {
            if (!result) {
                res.status(404).json({ messsage: 'Item not found' })
            }
            res.json(result)
        }).catch(err => {
            res.json({ message: err })
        })
})

router.post('/', (req, res) => {
    let car = new Car({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        length: req.body.length,
        engine: req.body.engine //this is Object 
    })
    car.save().then(result => {
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })
})
router.get('/:id', (req, res) => {
    Car.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }).
        exec().
        then(result => {
            if (!result) {
                res.status(404).json({ message: 'Item not found' })
            }
            res.json(result)
        }).catch(err => {
            res.json({ message: err })
        })
})


router.delete('/:id', (req, res) => {
    Car.findByIdAndDelete({ _id: req.params.id }).
        exec().
        then(result => {
            res.json(result)
        }).catch(err => {
            res.json({ message: err })
        })
})

router.delete('/', (req, res) => {
    Car.deleteMany(req.query).
        exec().
        then(result => {
            if (!result) {
                res.status(404).json({ messsage: 'Item not found' })
            }
            res.json(result)
        }).catch(err => {
            res.json({ message: err })
        })
})


//update 1
router.put('/', (req, res) => {
    Car.updateOne({ name: "mercedes" }, { $set: req.body }).exec().then(result => {
        if (!result) {
            res.json({ message: 'Item not found' })
        }
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })
})


export default router




