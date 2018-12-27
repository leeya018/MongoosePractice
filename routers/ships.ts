import express from 'express'
import { Ship } from '../models/Ship'
let router = express.Router()

router.get('/', (req, res) => {
    Ship.find().exec().then(result => {
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })
}).post('/', (req, res) => {
    let ship = new Ship({ name: req.body.name, length:req.body.length })
    ship.save().then(result => {
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })
})

export default router
