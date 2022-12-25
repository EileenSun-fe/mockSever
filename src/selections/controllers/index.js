const path = require("path");
const fs = require("fs");

const basePathToData = path.join(__dirname, "mockData");

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  if (fs.existsSync(filename)) {
    return JSON.parse(fs.readFileSync(filename, "utf-8"));
  } else return "file not found";
};

exports.getData = function (req, res) {
  var filename = req.params.filename;
  var data = getJsonData(basePathToData, `${filename}.json`);
  setTimeout(function () {
    return res.send(data);
  }, 100);
};
