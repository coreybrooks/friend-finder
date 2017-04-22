var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//set an initial port
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/app/public"));

//standard body-parser code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
//==========================================

//ROUTER
//point server to a series of route files

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});