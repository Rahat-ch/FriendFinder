const gamers = require("../data/gamers.js");

module.exports = function(app) {
  app.get("/api/gamers", function (req, res) {
    res.json(gamers);
  });

  app.post("/api/gamers", function (req, res) {

    const match = {
      name: "",
      photo: "",
      difference: 0
    };

    console.log(req.body);

    let gamerData = req.body;
    let gamerScores = gamerData.scores;

    console.log(gamerScores);

    let totalDifference = 0;

    for (let i = 0; i < gamers.length; i++) {

      console.log(gamers[i]);
      totalDifference = 0;

      for (let j = 0; j < gamers[i].scores[j]; j++) {

        totalDifference += Math.abs(parseInt(gamerScores[j]) - parseInt(gamers[i].scores[j]));

        if (totalDifference <= match.difference) {
          match.name = gamers[i].name;
          match.photo = gamers[i].photo;
          match.difference = totalDifference;
        }
      }
    }

    gamers.push(gamerData);

    res.json(match);
  });
};
