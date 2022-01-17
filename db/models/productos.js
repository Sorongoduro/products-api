const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.Schema.Types.Number.cast(false)
mongoose.Schema.Types.String.cast(false)

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

let Producto = mongoose.model('productos', schema)

module.exports = Producto