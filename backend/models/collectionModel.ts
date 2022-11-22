const CollectionDB = require('mongoose');
const CollectionSchemaHolder = CollectionDB.Schema; 

const CollectionSchema = new CollectionSchemaHolder({
  image: String,
  name: String
});



module.exports = CollectionDB.model('Collection', CollectionSchema) 
