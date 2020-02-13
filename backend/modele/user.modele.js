const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema =new Schema ({
    username:{
        type: String,
        required: true,
        unique: true,
        //trim pour eleminer les espaces apres les noms
        trim: true,
        minlength: 3
    },
},{
    timestamps: true,
})

const user = mongoose.model('User', UserSchema)
module.exports = user