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



if(!filePath){
	console.log("Please enter the sequence file path.");
}

else{
	src.readSequenceFile(filePath, function(e){
		if(e) return console.log(e);

		src.getParametersDetails.iterateSequences(function(e){
//			if(e) return console.log(e);

			var map_pca = src.pcaRegressionAlgorithm.iterateSequences();
			var map_motif = src.motifsAlgorithm.iterateSequences();
			// //var map_seq = src.sequenceAlgorithm.iterateSequences();

			var final_map = {};
			Object.keys(map_pca).forEach(function(seq){
				var map_pca_1 = map_pca[seq];
				var map_motif_1 = map_motif[seq];

				//var seq_motif_1 = map_seq[seq];
				final_map[seq] = {};

				Object.keys(map_pca_1).forEach(function(start){
					//final_map[seq][start] = 0;
					var map_pca_2 = map_pca_1[start];
					var map_motif_2 = map_motif_1[start];

					//var map_seq_2 = seq_motif_1[start];
					//console.log(start,map_pca_2, map_motif_2)
					//var tss_pca = 0;
					//var tss_motif = 0;
					//if(map_pca_2[0] == 1 && map_pca_2[1] == 0){
					//	tss_pca = 1;
					//}
					//if(map_motif_2[0] == 1 && map_motif_2[1] == 0){
					//	tss_motif = 1;
					//}

					//var sum = map_pca_2[0]+map_motif_2[0]+map_seq_2;
					//if(sum>=2)
					//	final_map[seq][start] =1;
					//console.log(map_pca_2[0]," ", map_motif_2[0]," ",map_pca_2[0] && map_motif_2[0])
					final_map[seq][start] = (map_pca_2[0] && map_motif_2[0]);
				});
			});


			// var final_map = {};
			// Object.keys(map_pca).forEach(function(seq){
			// 	var map_pca_1 = map_pca[seq];
			// 	var map_motif_1 = map_motif[seq];
			// 	final_map[seq] = {};
			// 	Object.keys(map_pca_1).forEach(function(start){
			// 		final_map[seq][start] = [];
			// 		var map_pca_2 = map_pca_1[start];
			// 		var map_motif_2 = map_motif_1[start];
			// 		//console.log(start,map_pca_2, map_motif_2)
			// 		final_map[seq][start].push(map_pca_2[0]&&map_motif_2[0]);
			// 		final_map[seq][start].push(map_pca_2[1]&&map_motif_2[1]);
			// 	});
			// });

			final_map = src.processResults.predictSequencewiseTss(final_map);
			var pos_map = src.processResults.getTssPositions(final_map);
			//console.log(pos_map)
			//var final_map = map_pca;
			var path = './Results_Seq/PCA_Motif/7By10/Bacillus_Dataset_1';
			writeFile.writeResults(path,final_map,console.log)
			writeFile.writePositionFile(path,pos_map,console.log)

		});
	});
}


