import express from 'express'
let router = express.Router()
import {User} from  '../models/User'

router.post('/',(req, res) => {
    let user = new User({ name: req.body.name, pass:req.body.pass,age: req.body.age })
    user.save().then(result => {
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })
})

router.get('/',(req, res) => {
    User.find().then(result => {
        res.json(result)
    }).catch(err => {
        res.json({ message: err })
    })

})


export default router