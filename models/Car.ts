import mongoose from 'mongoose'
let { Schema, model } = mongoose


let CarSchema = new Schema({
    name: String,
    length: Number,
    engine: {
        force: Number,
        speed: Number
    }
})
let Car = model('Car', CarSchema)

export { Car }

