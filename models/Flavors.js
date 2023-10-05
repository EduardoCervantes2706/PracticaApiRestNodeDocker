const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flavorsSchema = new Schema({
    flavor: {
        type: String,
        unique: true,
        trim: true
    }
})

module.exports = mongoose.model('Flavors', flavorsSchema)