// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Var
var operation = "";
var number1;
var number2;
// Routes
// =============================================================

// // Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// Displays a single character, or returns false
app.get("/api/calc/:operation", function(req, res) {
  var calcOpe = req.params.operation;

  console.log(calcOpe);

  // for (var i = 0; i < operation.length; i++) {
  //   if (chosen === characters[i].routeName) {
  //     return res.json(characters[i]);
  //   }
  // }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/operation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var input = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
 // input.routeName = input.name.replace(/\s+/g, "").toLowerCase();

  console.log(input);

  //characters.push(newcharacter);

  res.json(input);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
