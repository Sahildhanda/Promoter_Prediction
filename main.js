"use strict";

var src = require('./src');
var lib = require('./lib');
var utils = require('./utils');
var scripts = require('./scripts');
var sequence_map = utils.sequenceMap;
var parameters_map = utils.parameterMap;
var writeFile = src.writeFile;
var constants = lib.constants;


var args = process.argv.slice(2);
var filePath = args[0];
var writeFilePath = args[1];



if(!filePath){
	return console.log("Please enter the input sequence file.");
}
if(!writeFilePath){
	return console.log("Please enter the output file path.");
}

var arr = filePath.split("/");
var len = arr.length;
var writeFileName = arr[len-1];

src.readSequenceFile(filePath, function(e){
	if(e) return console.log(e);

	src.getParametersDetails.iterateSequences(function(e){
		if(e) return console.log("Error in calculating parameters: ",e);

		var map_pca = src.pcaRegressionAlgorithm.iterateSequences();
		var map_motif = src.motifsAlgorithm.iterateSequences();

		var final_map = {};
		Object.keys(map_pca).forEach(function(seq){
			var map_pca_1 = map_pca[seq];
			var map_motif_1 = map_motif[seq];
			final_map[seq] = {};
			Object.keys(map_pca_1).forEach(function(start){
				final_map[seq][start] = [];
				var map_pca_2 = map_pca_1[start];
				var map_motif_2 = map_motif_1[start];
				//console.log(start,map_pca_2, map_motif_2)
				final_map[seq][start].push(map_pca_2[0]&&map_motif_2[0]);
				final_map[seq][start].push(map_pca_2[1]&&map_motif_2[1]);
			});
		});


		Object.keys(final_map).forEach(function(seq){
			Object.keys(final_map[seq]).forEach(function(start){

				if(final_map[seq][start][0] == 1 && final_map[seq][start][1] == 0)
					final_map[seq][start] = 1;
				else
					final_map[seq][start] = 0;

			});
		});
		final_map = src.processResults.predictSequencewiseTss(final_map);
		var pos_map = src.processResults.getTssPositions(final_map);

		var path = writeFilePath+"/"+writeFileName;
		writeFile.writeResults(path,final_map,console.log)
		writeFile.writePositionFile(path,pos_map,console.log)

	});
});



