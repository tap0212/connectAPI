var mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

var locationSchema = new mongoose.Schema(
  {
    event:{
        type:ObjectId
    },
    longitude:{
        type:Number
    },
    latitude:{
        type:Number
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Location", locationSchema);