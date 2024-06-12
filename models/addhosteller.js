const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "course":String,
        "cyear":String,
        "address":String,
        "place":String,
        "district":String,
        "email":String,
        "gurdain":String,
        "gmobileno":String,
        "username":String,
        "password":String

    }
)

let hostellermodel=mongoose.model("hostellers",schema)
module.exports={hostellermodel}