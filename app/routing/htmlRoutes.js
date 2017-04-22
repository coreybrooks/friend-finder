var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });

    //defaults to home if no route is found
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });
}