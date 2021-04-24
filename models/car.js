const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carname: {
        type: String,
        required: [true, "car name is Required"]
    },
    brand: String,
    manufacturing_year: {
        type: Number,
    
            min:[1900,"Minimum year for manufacturing"],
            max:[2020,"Maximum year for manufacturing"]
    }
    
    })
module.exports = mongoose.model("car",carSchema)