
const CollectionModel = require('../models/collectionModel.ts');

const CollectionCreate = async (req, res, next) => {
 
  try {
    const data = req.body;
    console.log("req.body on create", data);
    const Collection = await CollectionModel.create(data);
    await Collection.save();
    res.status(200).json(Collection);
    console.log("server side res.body on create", ...res.headers)
  } catch (err) {
    console.log("err on creating a new Collection", err)
  }
}

const CollectionReadAll = async (req, res, next) => {
  console.log("req on readAll", req.params);
  const Collection = await CollectionModel.find();
  res.status(200).json(Collection);
  console.log("getting all the Collections")
}

const CollectionUpdateById = async (req,res,next) => {
  console.log("req.params on update", req.params);
  const id = req.params.id;
  const updatedCollection = await CollectionModel.findByIdAndUpdate(id, {...req.body}, {new:true});
  res.status(200).send(updatedCollection)
}

const CollectionDeleteById = async (req,res,next) => {
  console.log("req.params on delete", req.params);
  const id = req.params.id;
  await CollectionModel.deleteOne({_id:id});
  console.log(`Deleting a Collection`);
  res.status(200).send("Collection removed");
}




const CollectionHandler= {
  CollectionCreate: CollectionCreate,
  CollectionReadAll: CollectionReadAll,
  CollectionUpdateById: CollectionUpdateById,
  CollectionDeleteById:CollectionDeleteById
};

module.exports = CollectionHandler