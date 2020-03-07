const path = require("path");
heroArray = require("../app/data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(request, result) {
        return result.json(heroArray);
    })
}