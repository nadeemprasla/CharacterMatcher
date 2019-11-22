var path = require('path');
var characters = require('../data/character')


module.exports = function(app) {
    var winner = 0;
    var winningChar;
    var index;
    app.post("/api/characters", (req, res) => {
        var yourChar = [];
        var ans = req.body
        var points = 0;
        characters.forEach((e) => {
            points = 0;
            (e.name === ans.name) ? points++ : null;
            (e.fear === ans.fear) ? points++ : null;
            (e.power === ans.power) ? points++ : null;
            (e.color === ans.color) ? points++ : null;
            (e.race === ans.race) ? points++ : null;
            (e.universe === ans.universe) ? points++ : null;
            (e.weakness === ans.weakness) ? points++ : null;
            yourChar.push(points);
            console.log(yourChar);
        })

        function pointChecker() {
            winner = 0;
            
            for (var i = 0; i <= yourChar.length; i++) {
                if (i < yourChar.length) {
                    if (winner < yourChar[i]) {
                        winner = yourChar[i];
                        console.log("Winning ", yourChar[i])
                        index = i;
                    }
                } else {
                    winningChar = characters[index].name
                    console.log("index :", characters[index].name)
                    res.redirect("/api/character/reload")
                }
            }

        }
        pointChecker()
    })

    app.get("/api/character/reload", (req, res) => {
        res.render("modal", {
            name: winningChar,
            url: characters[index].photo
        });
    })


}