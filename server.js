var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('views'));

var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./views/routing/apiRoutes")(app);
require("./views/routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});

