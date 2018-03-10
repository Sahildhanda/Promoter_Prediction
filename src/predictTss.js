"use strict";

var lib = require('../lib');
var bin = require('../bin');
var utils = require('../utils');
var principalComponentAnalysis = require('./principalComponentAnalysis');

var constants = lib.constants;
var parameter_map = utils.parameterMap;

var pca_40 = principalComponentAnalysis.init(bin.pcaTrainingDataset_40);
var pca_80 = principalComponentAnalysis.init(bin.pcaTrainingDataset_80);

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
	iterate: function(seq){
		var normalized_map = parameter_map.normalized_params_map;
		
		var params_map = normalized_map[seq];
		var params = Object.keys(params_map);
		var len = params_map[params[0]].length;
		
		var i=-1;

		var seq_40_map = {};
		var seq_80_map = {};

		while((i+constants.ITR_WINDOW_SIZE+constants.NO_TSS_WINDOW_LENGTH+constants.ITR_WINDOW_SIZE)<=len){
			var tss_motif_start = i;
			var tss_motif_stop = tss_motif_start+constants.ITR_WINDOW_SIZE;
			var no_tss_motif_start = tss_motif_stop+constants.NO_TSS_WINDOW_LENGTH;
			var no_tss_motif_stop = no_tss_motif_start+constants.ITR_WINDOW_SIZE;
			//console.log(tss_motif_start, tss_motif_stop, no_tss_motif_start, no_tss_motif_stop)
			
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
		return self.predictPCA(seq_40_map, seq_80_map);
	},

	predictPCA: function(seq_40_map, seq_80_map){
		var start_40 = [];
		var start_80 = [];
		var data_40 = [];
		var data_80 = [];
		var label_40 = [];
		var label_80 = [];

		Object.keys(seq_40_map).forEach(function(start){
			start_40.push(start);
			data_40.push(seq_40_map[start][0]);
			label_40.push(1);
			data_40.push(seq_40_map[start][1]);
			label_40.push(0);
		});
		Object.keys(seq_80_map).forEach(function(start){
			start_80.push(start);
			data_80.push(seq_80_map[start][0]);
			label_80.push(1);
			data_80.push(seq_80_map[start][1]);
			label_80.push(0);
		});
		console.log(pca_80)
	}
};

var self = module.exports = predictTss;