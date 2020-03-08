// Dependencies
const express = require("express");
const path = require("path");

// Set up express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

let htmlRoutes = require('./routing/htmlRoutes')(app)
let apiRoutes = require('./routing/apiRoutes')(app)

// Routes
app.get("/", function(request, result) {
    result.sendFile(path.join(`${__dirname}/public`, "home.html"));
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/friends", function(request, result) {
    let newFriend = request.body;
    console.log(newFriend);
    heroArray.push(newFriend);
    result.json(newFriend);
})