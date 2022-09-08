const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3003;

app.use(express.json());

routes(app);

app.listen(PORT, () => console.log(`the server is running at port ${PORT}`))