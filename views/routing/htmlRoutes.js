var path = require('path');
var characters = require('../data/character')

module.exports = function(app) {
    var choices = {
        name: [],
        fear: [],
        power: [],
        color: [],
        race: [],
        universe: [],
        weakness: []
    };
    characters.forEach((e) => {
        choices["name"].includes(e.name) ? null : choices["name"].push(e.name);
        choices["fear"].includes(e.fear) ? null : choices["fear"].push(e.fear);
        choices["power"].includes(e.power) ? null : choices["power"].push(e.power);
        choices["color"].includes(e.color) ? null : choices["color"].push(e.color);
        choices["race"].includes(e.race) ? null : choices["race"].push(e.race);
        choices["universe"].includes(e.universe) ? null : choices["universe"].push(e.universe);
        choices["weakness"].includes(e.weakness) ? null : choices["weakness"].push(e.weakness);
    });
console.log(choices)
    app.get("/survey", (req, res) => {
        res.render("survey", choices);
    })
    app.get("/", (req, res) => {
        res.render("index");
    })
    app.get("*", (req, res) => {
        res.render("index");
    })
}