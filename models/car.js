const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carname: String,
    brand: String,
    manufacturing_year: Number
})
module.exports = mongoose.model("car",carSchema)