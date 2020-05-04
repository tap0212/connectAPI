const Product = require("../models/event")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs");




exports.createProduct = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) =>{
        if(err){
            return res.status(400).json({
                error: "Problem with image"
            });
        }

        //destructure the fields
        //TODO: express validation
        const {name, description,price, category,stock,age} = fields;
        if(
            !name ||
            !description ||
            !price ||
            !category||
            !stock||
            !age
        ){
            return res.status(400).json({
                error:"All fields are compulsory"
            })
        }
     

        let product = new Product(fields)

        //handle the file
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size too big should be under 2.5MB"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type;
        }
        product.save((err,product) => {
            if(err){
                return res.status(400).json({
                    error: "Saving item in DB failed"
                })
            }
            res.json(product)
        })
    })
}




//middleware
// exports.photo = (req,res,next) => {
//     if(req.product.photo.data){
//         res.set("Content-Type", req.product.photo.contentType)
//         return res.send(req.product.photo.data)
//     }
//     next()
// }




exports.getAllProducts = (req,res) => {

    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    Product.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, "asc"]])

        .exec((err,products) => {
            if(err){
                return res.status(400).son({
                    error:"No Product found"
                })
            }
            res.json(products)
        })
}


