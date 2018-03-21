"use strict";

var lib = require('../lib');
var bin = require('../bin');
var utils = require('../utils');

var constants = lib.constants;
var parameters_map = utils.parameterMap;

var predictedResultsMap = utils.predictedResultsMap;
var predicted_results = predictedResultsMap.predicted_results;

var pca_equations = lib.pcaEquations;
var reg_equations = lib.regEquations;

var lr = require('./logisticRegression');
var pca = require('./principalComponentAnalysis');


var motif_positions = [['486-493','463-472','420-437','720-737','763-772','786-793'],
				['487-494','464-471','453-462','440-452','787-794','764-771','753-762','740-752'],
				['483-494','463-472','450-459','434-445','783-794','763-772','750-759','734-745'],
				['487-498','463-472','450-459','432-445','787-798','763-772','750-759','732-745']];

var motifs_size = [[8,10,18],
					[8,8,10,13],
					[12,10,10,12],
					[12,10,10,14]];

var motifs_dist_end = [[19,42,85],
					[18,41,52,65],
					[22,42,55,71],
					[18,42,55,73]];


function extractWindow(tss_start, tss_stop, motif, dist_end, struct_ener_map){
	var motif_start = tss_stop - dist_end;
	var motif_stop = motif_start + motif-1;

	var params_arr = [];
	Object.keys(struct_ener_map).forEach(function(k){
		var obj = struct_ener_map[k];
		var sum = 0;
		var len = 0;
		for(var i=motif_start; i<=motif_stop; i++){
			if(obj[i] === undefined)
				continue;
			sum+=Number(obj[i]);
			len++;
		}
		params_arr.push((sum/len).toFixed(6));
	});
	return params_arr;
}

function transformStructMap(struct_map){
	var new_map = {};
	Object.keys(struct_map).forEach(function(seq){
		var map = struct_map[seq];
		Object.keys(map).forEach(function(k){
			if(new_map[k] === undefined)
				new_map[k] = [];
			map[k].forEach(function(obj){
				new_map[k].push(obj);
			});
		});
	});
	return new_map;
}

var motifsAlgorithm = {
	iterateSequences: function(){
		var final_result = {};
		var combined_params_map = parameters_map.combined_params_map;
		Object.keys(combined_params_map).forEach(function(seq){
			final_result[seq] = self.iterate(seq);
		});
		return final_result;

	},

	iterate: function(seq){
		var motif_map = {};
		var struct_ener_map = parameters_map.combined_params_map[seq];
		var params = Object.keys(struct_ener_map);
		var len = Object.keys(struct_ener_map[params[0]]).length;

		var i=0;
		//temp
		//var i=424;
		//len = 786
		while((i+constants.ITR_WINDOW_SIZE+constants.MOTIFS_NO_TSS_WINDOW_LENGTH+constants.ITR_WINDOW_SIZE)<=len){
			var tss_motif_start = i;
			var tss_motif_stop = tss_motif_start+constants.ITR_WINDOW_SIZE;
			var no_tss_motif_start = tss_motif_stop+constants.MOTIFS_NO_TSS_WINDOW_LENGTH;
			var no_tss_motif_stop = no_tss_motif_start+constants.ITR_WINDOW_SIZE;
			//console.log(tss_motif_start, tss_motif_stop, no_tss_motif_start, no_tss_motif_stop)

			if(motif_map[tss_motif_start] === undefined)
				motif_map[tss_motif_start] = {};

			for(var k=0; k<motifs_size.length; k++){

				var motif_size = motifs_size[k];
				var motif_dist_end = motifs_dist_end[k];

				for(var j=0; j<motif_size.length;j++){
					var motif = motif_size[j];
					var dist_end = motif_dist_end[j];
					if(motif_map[tss_motif_start]['m_'+k] === undefined)
						motif_map[tss_motif_start]['m_'+k] = {};
					if(motif_map[tss_motif_start]['m_'+k][j] === undefined)
						motif_map[tss_motif_start]['m_'+k][j] = {};
					motif_map[tss_motif_start]['m_'+k][j][1] = extractWindow(tss_motif_start,tss_motif_stop,motif,dist_end,struct_ener_map);
					motif_map[tss_motif_start]['m_'+k][j][0] = extractWindow(no_tss_motif_start,no_tss_motif_stop,motif,dist_end,struct_ener_map);

				}
			}
			i+=constants.SKIP_WINDOW;

		}
		//temp
		parameters_map.combined_params_map[seq] = {};
		//return motif_map;
		return self.predictPCA(seq, motif_map);
	},

	predictPCA: function(seq, motif_map){


		Object.keys(motif_map).forEach(function(start){
			motif_map[start]['m_0'][0][1] = pca.getPCAs(motif_map[start]['m_0'][0][1],pca_equations.m_0_0);
			motif_map[start]['m_0'][0][0] = pca.getPCAs(motif_map[start]['m_0'][0][0],pca_equations.m_0_0);

			motif_map[start]['m_0'][1][1] = pca.getPCAs(motif_map[start]['m_0'][1][1],pca_equations.m_0_1);
			motif_map[start]['m_0'][1][0] = pca.getPCAs(motif_map[start]['m_0'][1][0],pca_equations.m_0_1);

			motif_map[start]['m_0'][2][1] = pca.getPCAs(motif_map[start]['m_0'][2][1],pca_equations.m_0_2);
			motif_map[start]['m_0'][2][0] = pca.getPCAs(motif_map[start]['m_0'][2][0],pca_equations.m_0_2);

			motif_map[start]['m_1'][0][1] = pca.getPCAs(motif_map[start]['m_1'][0][1],pca_equations.m_1_0);
			motif_map[start]['m_1'][0][0] = pca.getPCAs(motif_map[start]['m_1'][0][0],pca_equations.m_1_0);

			motif_map[start]['m_1'][1][1] = pca.getPCAs(motif_map[start]['m_1'][1][1],pca_equations.m_1_1);
			motif_map[start]['m_1'][1][0] = pca.getPCAs(motif_map[start]['m_1'][1][0],pca_equations.m_1_1);

			motif_map[start]['m_1'][2][1] = pca.getPCAs(motif_map[start]['m_1'][2][1],pca_equations.m_1_2);
			motif_map[start]['m_1'][2][0] = pca.getPCAs(motif_map[start]['m_1'][2][0],pca_equations.m_1_2);

			motif_map[start]['m_1'][3][1] = pca.getPCAs(motif_map[start]['m_1'][3][1],pca_equations.m_1_3);
			motif_map[start]['m_1'][3][0] = pca.getPCAs(motif_map[start]['m_1'][3][0],pca_equations.m_1_3);

			motif_map[start]['m_2'][0][1] = pca.getPCAs(motif_map[start]['m_2'][0][1],pca_equations.m_2_0);
			motif_map[start]['m_2'][0][0] = pca.getPCAs(motif_map[start]['m_2'][0][0],pca_equations.m_2_0);

			motif_map[start]['m_2'][1][1] = pca.getPCAs(motif_map[start]['m_2'][1][1],pca_equations.m_2_1);
			motif_map[start]['m_2'][1][0] = pca.getPCAs(motif_map[start]['m_2'][1][0],pca_equations.m_2_1);

			motif_map[start]['m_2'][2][1] = pca.getPCAs(motif_map[start]['m_2'][2][1],pca_equations.m_2_2);
			motif_map[start]['m_2'][2][0] = pca.getPCAs(motif_map[start]['m_2'][2][0],pca_equations.m_2_2);

			motif_map[start]['m_2'][3][1] = pca.getPCAs(motif_map[start]['m_2'][3][1],pca_equations.m_2_3);
			motif_map[start]['m_2'][3][0] = pca.getPCAs(motif_map[start]['m_2'][3][0],pca_equations.m_2_3);

			motif_map[start]['m_3'][0][1] = pca.getPCAs(motif_map[start]['m_3'][0][1],pca_equations.m_3_0);
			motif_map[start]['m_3'][0][0] = pca.getPCAs(motif_map[start]['m_3'][0][0],pca_equations.m_3_0);

			motif_map[start]['m_3'][1][1] = pca.getPCAs(motif_map[start]['m_3'][1][1],pca_equations.m_3_1);
			motif_map[start]['m_3'][1][0] = pca.getPCAs(motif_map[start]['m_3'][1][0],pca_equations.m_3_1);

			motif_map[start]['m_3'][2][1] = pca.getPCAs(motif_map[start]['m_3'][2][1],pca_equations.m_3_2);
			motif_map[start]['m_3'][2][0] = pca.getPCAs(motif_map[start]['m_3'][2][0],pca_equations.m_3_2);

			motif_map[start]['m_3'][3][1] = pca.getPCAs(motif_map[start]['m_3'][3][1],pca_equations.m_3_3);
			motif_map[start]['m_3'][3][0] = pca.getPCAs(motif_map[start]['m_3'][3][0],pca_equations.m_3_3);
		});

		return self.predictRegression(seq, motif_map);
	},

	predictRegression: function(seq, motif_map){
		Object.keys(motif_map).forEach(function(start){
			motif_map[start]['m_0'][0][1] = lr.predict(motif_map[start]['m_0'][0][1],reg_equations.m_0_0, constants.MOTIF_PROB);
			motif_map[start]['m_0'][0][0] = lr.predict(motif_map[start]['m_0'][0][0],reg_equations.m_0_0, constants.MOTIF_PROB);

			motif_map[start]['m_0'][1][1] = lr.predict(motif_map[start]['m_0'][1][1],reg_equations.m_0_1, constants.MOTIF_PROB);
			motif_map[start]['m_0'][1][0] = lr.predict(motif_map[start]['m_0'][1][0],reg_equations.m_0_1, constants.MOTIF_PROB);

			motif_map[start]['m_0'][2][1] = lr.predict(motif_map[start]['m_0'][2][1],reg_equations.m_0_2, constants.MOTIF_PROB);
			motif_map[start]['m_0'][2][0] = lr.predict(motif_map[start]['m_0'][2][0],reg_equations.m_0_2, constants.MOTIF_PROB);

			motif_map[start]['m_1'][0][1] = lr.predict(motif_map[start]['m_1'][0][1],reg_equations.m_1_0, constants.MOTIF_PROB);
			motif_map[start]['m_1'][0][0] = lr.predict(motif_map[start]['m_1'][0][0],reg_equations.m_1_0, constants.MOTIF_PROB);

			motif_map[start]['m_1'][1][1] = lr.predict(motif_map[start]['m_1'][1][1],reg_equations.m_1_1, constants.MOTIF_PROB);
			motif_map[start]['m_1'][1][0] = lr.predict(motif_map[start]['m_1'][1][0],reg_equations.m_1_1, constants.MOTIF_PROB);

			motif_map[start]['m_1'][2][1] = lr.predict(motif_map[start]['m_1'][2][1],reg_equations.m_1_2, constants.MOTIF_PROB);
			motif_map[start]['m_1'][2][0] = lr.predict(motif_map[start]['m_1'][2][0],reg_equations.m_1_2, constants.MOTIF_PROB);

			motif_map[start]['m_1'][3][1] = lr.predict(motif_map[start]['m_1'][3][1],reg_equations.m_1_3, constants.MOTIF_PROB);
			motif_map[start]['m_1'][3][0] = lr.predict(motif_map[start]['m_1'][3][0],reg_equations.m_1_3, constants.MOTIF_PROB);

			motif_map[start]['m_2'][0][1] = lr.predict(motif_map[start]['m_2'][0][1],reg_equations.m_2_0, constants.MOTIF_PROB);
			motif_map[start]['m_2'][0][0] = lr.predict(motif_map[start]['m_2'][0][0],reg_equations.m_2_0, constants.MOTIF_PROB);

			motif_map[start]['m_2'][1][1] = lr.predict(motif_map[start]['m_2'][1][1],reg_equations.m_2_1, constants.MOTIF_PROB);
			motif_map[start]['m_2'][1][0] = lr.predict(motif_map[start]['m_2'][1][0],reg_equations.m_2_1, constants.MOTIF_PROB);

			motif_map[start]['m_2'][2][1] = lr.predict(motif_map[start]['m_2'][2][1],reg_equations.m_2_2, constants.MOTIF_PROB);
			motif_map[start]['m_2'][2][0] = lr.predict(motif_map[start]['m_2'][2][0],reg_equations.m_2_2, constants.MOTIF_PROB);

			motif_map[start]['m_2'][3][1] = lr.predict(motif_map[start]['m_2'][3][1],reg_equations.m_2_3, constants.MOTIF_PROB);
			motif_map[start]['m_2'][3][0] = lr.predict(motif_map[start]['m_2'][3][0],reg_equations.m_2_3, constants.MOTIF_PROB);

			motif_map[start]['m_3'][0][1] = lr.predict(motif_map[start]['m_3'][0][1],reg_equations.m_3_0, constants.MOTIF_PROB);
			motif_map[start]['m_3'][0][0] = lr.predict(motif_map[start]['m_3'][0][0],reg_equations.m_3_0, constants.MOTIF_PROB);

			motif_map[start]['m_3'][1][1] = lr.predict(motif_map[start]['m_3'][1][1],reg_equations.m_3_1, constants.MOTIF_PROB);
			motif_map[start]['m_3'][1][0] = lr.predict(motif_map[start]['m_3'][1][0],reg_equations.m_3_1, constants.MOTIF_PROB);

			motif_map[start]['m_3'][2][1] = lr.predict(motif_map[start]['m_3'][2][1],reg_equations.m_3_2, constants.MOTIF_PROB);
			motif_map[start]['m_3'][2][0] = lr.predict(motif_map[start]['m_3'][2][0],reg_equations.m_3_2, constants.MOTIF_PROB);

			motif_map[start]['m_3'][3][1] = lr.predict(motif_map[start]['m_3'][3][1],reg_equations.m_3_3, constants.MOTIF_PROB);
			motif_map[start]['m_3'][3][0] = lr.predict(motif_map[start]['m_3'][3][0],reg_equations.m_3_3, constants.MOTIF_PROB);
		});

		return self.processResults(seq, motif_map);
	},

	processResults: function(seq, motif_map){
		var combined_result_map = {};
		Object.keys(motif_map).forEach(function(start){
			var row_map = motif_map[start];
			combined_result_map[start] = {};
			Object.keys(row_map).forEach(function(row){
				var m_map = row_map[row];
				combined_result_map[start][row] = {};
				var threshold = Object.keys(m_map).length-1;
				var tss = 0;
				var no_tss = 0;
				Object.keys(m_map).forEach(function(motif){
					tss+= m_map[motif][1];
					no_tss+= m_map[motif][0];
				});
				
				combined_result_map[start][row][1] = (tss>=threshold)?1:0;
				combined_result_map[start][row][0] = (no_tss>=threshold)?1:0;
			});
		});
		
		Object.keys(combined_result_map).forEach(function(start){
			var tss = 0;
			var no_tss = 0;
			var result = [];
			Object.keys(combined_result_map[start]).forEach(function(row){
				tss+=combined_result_map[start][row][1];
				no_tss+=combined_result_map[start][row][0];
			});
			result.push((tss>0)?1:0);
			result.push((no_tss>0)?1:0);
			combined_result_map[start] = result;
		});
		return combined_result_map;
	}

};

var self = module.exports = motifsAlgorithm;
