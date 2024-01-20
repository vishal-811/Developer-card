require('dotenv').config();
const mongoose =require('mongoose');

const url=process.env.MONGO_URL;
mongoose.connect(url)

const CardSchema =new mongoose.Schema({
       name:{
        type:String,
        required:[true,"Name is required"]
       },
      description:{
        type:String,
        required:[true,'Description is required'],
      },
      interests:{
        type:[String],
        required:[true,'interest section is required'],
      },
      links:{
        type:[String],
        required:[true,'links is required']
      },

},
{
    timestamps:true
})


// create model 
const Card =mongoose.model("card" ,CardSchema);

module.exports={
    Card
}