const path = require("path");
heroArray = require("../app/data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(request, result) {
        return result.json(heroArray);
    })
    // post the new friends information to the array
    app.post("/api/friends", function(request, result) {
        newFriend = request.body;
        console.log(newFriend);
        heroArray.push(newFriend);
        result.json(newFriend);
    })
}