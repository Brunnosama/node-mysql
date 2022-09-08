const { Router } = require("express");
const route = Router();

route.get('/spells', (req, res) =>
    res.send({
        msg: "Working", serviceRoute: "Spells Service API"
    })
);

module.exports = route;