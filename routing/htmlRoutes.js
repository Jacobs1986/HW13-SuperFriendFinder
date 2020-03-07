const path = require("path");

module.exports = function(app) {
    app.get("/survey", function(reqeust, result) {
        result.sendFile(path.join(`${__dirname}/../public`, "survey.html"))
    })
}