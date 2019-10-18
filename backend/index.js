const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, "data")));
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application"});
});
require('./routes')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});