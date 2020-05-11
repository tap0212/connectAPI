var mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

var eventSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        trim:true,
        required:true,
        maxlength:50
    },
    expiry:{
        type:String,
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:4000
    },
    link:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
        trim:true
    },
    venue:{
        type:String
    },
    longitude:{
        type:Number
    },
    latitude:{
        type:Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    category:{
        type: ObjectId,
        ref: "Category",
        required: true
    },
    person:{
        type:ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Event", eventSchema);