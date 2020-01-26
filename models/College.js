var mongoose = require ("mongoose");


var collegeSchema = new mongoose.Schema({
    name : String,
    image : String,
    quora : String,
    Siksha : String,
    career360: String,
    Placement : String,
    Cultural_Soc : String,
    Technical_Soc : String
    
});



module.exports = mongoose.model("college", collegeSchema);