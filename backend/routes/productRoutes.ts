const ProductModel = require('../models/productModel.ts');

const productCreate = async (req, res, next) => {
  
  try {
    const data = req.body;
    console.log("req.body on create", data);
    const Product = await ProductModel.create(data);
    await Product.save();
    res.status(200).json(Product);
    console.log("server side res.body on create", ...res.headers)
  } catch (err) {
    console.log("err on creating a new Product", err)
  }
}

const productReadAll = async (req, res, next) => {
  console.log("req on ProductreadAll", req.params);
  const Product = await ProductModel.find();
  res.status(200).json(Product);
  console.log("getting all the products")
}

const productUpdateById = async (req,res,next) => {
  console.log("req.params on update", req.params);
  const id = req.params.id;
  const updatedProduct = await ProductModel.findByIdAndUpdate(id, {...req.body}, {new:true});
  res.status(200).send(updatedProduct)
}

const productDeleteById = async (req,res,next) => {
  console.log("req.params on delete", req.params);
  const id = req.params.id;
  await ProductModel.deleteOne({_id:id});
  console.log(`Deleting a Product`);
  res.status(200).send("Product removed");
}

const ProductHandler= {
  productCreate: productCreate,
  productReadAll: productReadAll,
  productUpdateById: productUpdateById,
  productDeleteById:productDeleteById
};

module.exports = 
  ProductHandler
