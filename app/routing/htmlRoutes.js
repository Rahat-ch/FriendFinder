const path = require("path");

module.exports = app => {

  //route for sruvey page
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  //this needs to go last for the rest of the routes to actually work this will automatically make any page not specified above go to the home page
  app.use( (req,res) => {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });





};
