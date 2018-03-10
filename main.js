"use strict";

var src = require('./src');
var bin = require('./bin');
var utils = require('./utils');
var scripts = require('./scripts');
var sequence_map = utils.sequenceMap;
var parameters_map = utils.parameterMap;

//var pca_40 = src.principalComponentAnalysis.init(bin.pcaTrainingDataset_40);
//var pca_80 = src.principalComponentAnalysis.init(bin.pcaTrainingDataset_80);


var args = process.argv.slice(2);
var filePath = args[0];

if(!filePath){
	console.log("Please enter the sequence file path.");
}

else{
	src.readSequenceFile(filePath, function(e){
		if(e) return console.log(e);
		//src.getParametersDetails.calculateParameters(1,function(e){
		src.getParametersDetails.iterateSequences(function(e){
			if(e) return console.log(e);
			//console.log(parameters_map.normalized_params_map[1]['aa']);
			Object.keys(parameters_map.normalized_params_map).forEach(function(k){
				console.log(k)
				src.predictTss.iterate(k);
			});
		});
	});
}


