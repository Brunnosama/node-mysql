const { Router } = require("express");
const route = Router();

route.get('/characters', (req, res) =>
    res.send({
        msg: "Working", serviceRoute: "Character Service API"
    })
);

module.exports = route;