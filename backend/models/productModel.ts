const ProductDB = require('mongoose');
const ProductSchemaHolder = ProductDB.Schema

const ProductSchema = new ProductSchemaHolder ({
  image: String,
  name: String,
  Collection: String,
  price: Number,
  quantityInStock: Number,
})

module.exports = ProductDB.model('Product', ProductSchema)