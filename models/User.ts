import mongoose from 'mongoose'
let {Schema,model} = mongoose

let UserSchema = new Schema({
    name:String,
    pass:String,
    age:Number
})
let User = model('User',UserSchema)

export {User}