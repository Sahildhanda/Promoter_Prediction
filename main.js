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

		// src.sequenceAlgorithm.iterateSequences(function(e){
			
		// });
		src.getParametersDetails.iterateSequences(function(e){
			if(e) return console.log(e);
			var arr=[];
			Object.keys(sequence_map).forEach(function(seq){
				arr.push(src.motifsAlgorithm.iterate(seq));

			});
			var final = '';
			arr.forEach(function(a){
				final+='1,'
				final+=a[0];
				final+='\n';
				final+='0,';
				final+=a[1];
				final+='\n';
			})
writeFile.write('./m_0_2_1',final,console.log)

//			var final = '';
//			var final_1 = '';

			// var pca_reg_results = src.predictTss.iterateSequences();

			// writeFile.writeResults('./pca_reg_4',pca_reg_results,console.log)

			// 	var map_temp = map['seq_40'];
			// 	var map_temp_80 = map['seq_80'];
			// 	Object.keys(map_temp).forEach(function(k){

			// 			var arr = map_temp[k];
			// 			final+='1,';
			// 			final+=arr[0];
			// 			final+='\n';
			// 			final+='0,'
			// 			final+=arr[1];
			// 			final+='\n';

				
			// 	});

			// 	Object.keys(map_temp_80).forEach(function(k){

			// 			var arr = map_temp_80[k];
			// 			final_1+='1,';
			// 			final_1+=arr[0];
			// 			final_1+='\n';
			// 			final_1+='0,'
			// 			final_1+=arr[1];
			// 			final_1+='\n';

				
			// 	});
			// });
			// writeFile.write('/home/sahil/Documents/Promoter_Prediction/bin/parametersDatapoints/dataPoints_40_4.csv',final,console.log);
			// writeFile.write('/home/sahil/Documents/Promoter_Prediction/bin/parametersDatapoints/dataPoints_80_4.csv',final_1,console.log);


		});
	});
}


