console.log("starting server");

var os = require('os');
var fs = require("fs");
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;
console.log('user home dir : ' + os.homedir());

var homeData = os.homedir() + "/data";

function writeFile(path, contents, cb) {
	mkdirp(getDirName(path), function (err) {
		if (err) return cb(err);

		fs.writeFile(path, contents, cb);
	});
}

exports.enableDebug = function () {
	homeData = "./data";
};

exports.start = function (staticDir, internalPort) {
	var express = require('express');
	var bodyParser = require('body-parser');
	var app = express();
	app.use('/', express.static(staticDir));
	app.use(bodyParser.json());

	app.get('/api/load', function (req, res) {
		var id = req.query.id;
		var filename = homeData + "/" + id + ".json";
		fs.readFile(filename, 'utf8', function (err, data) {
			// console.log(data);
			res.end(data);
		});
	});

	app.post('/api/save', function (req, res) {
		var id = req.query.id;
		// console.log(req.query);
		var outputFilename = homeData + "/" + id + ".json";
		var data = req.body;
		writeFile(outputFilename, JSON.stringify(data, null, 4), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("JSON saved to " + outputFilename);
			}
			res.end();
		});
	});

	app.listen(internalPort, function () {
		console.log('Internal server running @' + internalPort);
	});
};
