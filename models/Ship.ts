    import mongoose from 'mongoose'
    let {Schema,model} = mongoose

    let ShipSchema = new Schema({name:String,length:Number})
    let Ship = model('Ship',ShipSchema)

    export {Ship}