const charactersApi = require('../apis/Characters/routes');
const spellsApi = require('../apis/Spells/routes')

module.exports = (app) => {
    app.get("/", (req, res) => res.send("Welcome to my API!"));
    app.use('/characters-api', charactersApi);
    app.use('/spells-api', spellsApi);
};