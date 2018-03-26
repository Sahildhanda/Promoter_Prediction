"use strict";

var lib = require('../lib');
var utils = require('../utils');
var predictedResultsMap = utils.predictedResultsMap;

var pca = require('./principalComponentAnalysis');
var lr = require('./logisticRegression');

var constants = lib.constants;
var parameter_map = utils.parameterMap;

var pca_equations = lib.pcaEquations;
var reg_equations = lib.regEquations;


function extractWindow(start, stop, params, params_map){
	var arr = [];
	params.forEach(function(p){
		var param_arr = params_map[p];
		var sum = 0;
		var len = 0;
		for(var i=start; i<=stop; i++){
			if(param_arr[i] === undefined)
				continue;
			sum+=param_arr[i];
			len++;
		}
		arr.push(Number((sum/len).toFixed(6)));
	});
	return arr;
}

function extractWindow80(motif_start, motif_stop, params, params_map){
	var start = motif_stop - 80;
	var stop = motif_stop;
	return extractWindow(start, stop, params, params_map);
}

function extractWindow40(motif_start, motif_stop, params, params_map){
	var start = motif_stop - 40;
	var stop = motif_stop;
	return extractWindow(start, stop, params, params_map);
}

var predictTss = {
	iterateSequences: function(){
		var final_result = {};
		var normalized_map = parameter_map.normalized_params_map;
		Object.keys(normalized_map).forEach(function(seq){
			final_result[seq] = self.iterate(seq);
		});
		return final_result;
	},

	iterate: function(seq){
		console.log(seq)
		var normalized_map = parameter_map.normalized_params_map;
		
		var params_map = normalized_map[seq];
		var params = Object.keys(params_map);
		var len = params_map[params[0]].length;
		
		var i=0;

		var seq_40_map = {};
		var seq_80_map = {};
		//temp_check
//var i=424;
//len =786;

		while((i+constants.ITR_WINDOW_SIZE+constants.NO_TSS_WINDOW_LENGTH+constants.ITR_WINDOW_SIZE)<=len){
			var tss_motif_start = i;
			var tss_motif_stop = tss_motif_start+constants.ITR_WINDOW_SIZE;
			var no_tss_motif_start = tss_motif_stop+constants.NO_TSS_WINDOW_LENGTH;
			var no_tss_motif_stop = no_tss_motif_start+constants.ITR_WINDOW_SIZE;
//			console.log(tss_motif_start, tss_motif_stop, no_tss_motif_start, no_tss_motif_stop)
			
			var tss_window_40_arr = extractWindow40(tss_motif_start, tss_motif_stop, params, params_map);
			var no_tss_window_40_arr = extractWindow40(no_tss_motif_start, no_tss_motif_stop, params, params_map);

			var tss_window_80_arr = extractWindow80(tss_motif_start, tss_motif_stop, params, params_map);
			var no_tss_window_80_arr = extractWindow80(no_tss_motif_start, no_tss_motif_stop, params, params_map);

			seq_40_map[tss_motif_start] = [];
			seq_40_map[tss_motif_start].push(tss_window_40_arr);
			seq_40_map[tss_motif_start].push(no_tss_window_40_arr);

			seq_80_map[tss_motif_start] = [];
			seq_80_map[tss_motif_start].push(tss_window_80_arr);
			seq_80_map[tss_motif_start].push(no_tss_window_80_arr);

			i+=constants.SKIP_WINDOW;
		}
		parameter_map.normalized_params_map[seq] = {};
		return self.predictPCA(seq, seq_40_map, seq_80_map);
	},

	predictPCA: function(seq, seq_40_map, seq_80_map){

		Object.keys(seq_40_map).forEach(function(start){
			seq_40_map[start][0] = pca.getPCAs(seq_40_map[start][0],pca_equations.window_40);
			seq_40_map[start][1] = pca.getPCAs(seq_40_map[start][1],pca_equations.window_40);
		});

		Object.keys(seq_80_map).forEach(function(start){
			seq_80_map[start][0] = pca.getPCAs(seq_80_map[start][0],pca_equations.window_80);
			seq_80_map[start][1] = pca.getPCAs(seq_80_map[start][1],pca_equations.window_80);
		});

		return self.predictRegression(seq, seq_40_map, seq_80_map);
	},

	predictRegression: function(seq, seq_40_map, seq_80_map){


		Object.keys(seq_40_map).forEach(function(start){
			seq_40_map[start][0] = lr.predict(seq_40_map[start][0],reg_equations.window_40, constants.WINDOW_40_PROB);
			seq_40_map[start][1] = lr.predict(seq_40_map[start][1],reg_equations.window_40, constants.WINDOW_40_PROB);
		});

		Object.keys(seq_80_map).forEach(function(start){
			seq_80_map[start][0] = lr.predict(seq_80_map[start][0],reg_equations.window_80, constants.WINDOW_80_PROB);
			seq_80_map[start][1] = lr.predict(seq_80_map[start][1],reg_equations.window_80, constants.WINDOW_80_PROB);
		});
		return self.processResults(seq, seq_40_map, seq_80_map);
	},

	processResults: function(seq, seq_40_map, seq_80_map){
		var combined_result_map = {};
		Object.keys(seq_40_map).forEach(function(start){
			var res_40_tss = seq_40_map[start][0];
			var res_40_notss = seq_40_map[start][1];
			var res_80_tss = seq_80_map[start][0];
			var res_80_notss = seq_80_map[start][1];
			combined_result_map[start] = [];
			combined_result_map[start].push(res_40_tss||res_80_tss);
			combined_result_map[start].push(res_40_notss||res_80_notss);
		});
		return combined_result_map;
	}
};

var self = module.exports = predictTss;