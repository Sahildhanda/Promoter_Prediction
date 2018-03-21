"use strict";

var src = require('./src');
var bin = require('./bin');
var utils = require('./utils');
var scripts = require('./scripts');
var sequence_map = utils.sequenceMap;
var parameters_map = utils.parameterMap;
var writeFile = src.writeFile;
var predictedResultsMap = utils.predictedResultsMap;
var predicted_results = predictedResultsMap.predicted_results;


var args = process.argv.slice(2);
var filePath = args[0];

if(!filePath){
	console.log("Please enter the sequence file path.");
}

else{
	src.readSequenceFile(filePath, function(e){
		if(e) return console.log(e);

		src.getParametersDetails.iterateSequences(function(e){
			if(e) return console.log(e);

			
		});
	});
}
