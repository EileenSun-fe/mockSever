const fs = require("fs");

const controller = require("./controllers/index");

const path = require("path");
const directoryPath = path.join(__dirname, "controllers/mockData/");

exports.routes = (app) => {
  //   fs.readdir(directoryPath, (err, files) => {
  //     console.log(files);
  //     files?.forEach((file) => {
  //       console.log(file);
  //     });
  //   });
  app.get("/api/:filename", controller.getData);
};
