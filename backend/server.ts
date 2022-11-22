const express = require('express'); // server handler
const mongoose = require('mongoose'); // db handler
const cors = require('cors');
const bodyParser = require('body-parser'); // MW that verifies user input
require("dotenv").config();
const axios = require("axios"); // used to make request at client
const productHandler = require('./routes/productRoutes.ts')
const collectionHandler = require('./routes/collectionRoutes.ts')

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_CONNECTION_STRING;

const app = express();
//MW
app.use(cors());
app.use(express.json());

// options after the uri can be used to handle auth.username/auth.password
mongoose.connect(DB_URL).then(() => console.log("connected to mongodb"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

console.log("productHandler", productHandler);
console.log("collectionHandle", collectionHandler);

app.post("/product", productHandler.productCreate);
app.get("/product", productHandler.productReadAll);
app.put("/product/:id", productHandler.productUpdateById);
app.delete("/product/:id", productHandler.productDeleteById);

app.post("/collection", collectionHandler.CollectionCreate);
app.get("/collection", collectionHandler.CollectionReadAll);
app.put("/collection/:id", collectionHandler.CollectionUpdateById);
app.delete("/collection/:id", collectionHandler.CollectionDeleteById);


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));