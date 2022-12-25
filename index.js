var express = require("express");
var app = express();

const routesConfig = require("./src/selections/routes");

app.use(express.json());

routesConfig.routes(app);

app.listen(8080, () => {
  console.log("listening to port 8080");
});
