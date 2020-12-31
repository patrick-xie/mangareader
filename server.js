var mongoose = require("mongoose");
const express = require("express");
const app = express();
var port = 4000;
var manga = require("./mangamodel.js");
const router = express.Router();
var uri = 'mongodb+srv://pxie:890uiohjk@cluster0.d7wlf.azure.mongodb.net/CaseClosed?retryWrites=true&w=majority'

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use("/", router);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
})

router.route("/fetch").get(function(req, res) {
  manga.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
