"use strict";

var lib = require('../lib');
var bin = require('../bin');
var utils = require('../utils');

var constants = lib.constants;
var parameters_map = utils.parameterMap;

var predictedResultsMap = utils.predictedResultsMap;
var predicted_results = predictedResultsMap.predicted_results;

var logisticRegression = require('./logisticRegression');
var principalComponentAnalysis = require('./principalComponentAnalysis');


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
	iterateSequences: function(cb){
		var all_struct_map = {};
		Object.keys(parameters_map.combined_params_map).forEach(function(seq){
			all_struct_map[seq] = self.iterate(seq);
		});
		//console.log(all_struct_map)
		all_struct_map = transformStructMap(all_struct_map);
		return self.predictRegression(all_struct_map, cb);
	},

	iterate: function(seq){
		//console.log(seq)
		var motif_map = {};
		var struct_ener_map = parameters_map.combined_params_map[seq];
		var params = Object.keys(struct_ener_map);
		var len = Object.keys(struct_ener_map[params[0]]).length;

		var i=0;
		//temp
		var i=424;
		len = 786
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
//console.log(motif_map[tss_motif_start]['m_'+k][j][1])
					motif_map[tss_motif_start]['m_'+k][j][0] = extractWindow(no_tss_motif_start,no_tss_motif_stop,motif,dist_end,struct_ener_map);

				}
			}
			//if(tss_motif_start == 424)
			//	console.log(motif_map[tss_motif_start]['m_0'])
			i+=constants.SKIP_WINDOW;

		}
		//temp
		parameters_map.combined_params_map[seq] = {};
		//return motif_map;
		return self.predictPCA(seq, motif_map);
	},

	predictPCA: function(seq, motif_map){
		var m_0_0_arr = [];
		var m_0_1_arr = [];
		var m_0_2_arr = [];
		var m_1_0_arr = [];
		var m_1_1_arr = [];
		var m_1_2_arr = [];
		var m_1_3_arr = [];
		var m_2_0_arr = [];
		var m_2_1_arr = [];
		var m_2_2_arr = [];
		var m_2_3_arr = [];
		var m_3_0_arr = [];
		var m_3_1_arr = [];
		var m_3_2_arr = [];
		var m_3_3_arr = [];

		Object.keys(motif_map).forEach(function(start){
			m_0_0_arr.push(motif_map[start]['m_0'][0][1]);
			m_0_0_arr.push(motif_map[start]['m_0'][0][0]);
			m_0_1_arr.push(motif_map[start]['m_0'][1][1]);
			m_0_1_arr.push(motif_map[start]['m_0'][1][0]);
			m_0_2_arr.push(motif_map[start]['m_0'][2][1]);
			m_0_2_arr.push(motif_map[start]['m_0'][2][0]);

			motif_map[start]['m_0'] = null;

			m_1_0_arr.push(motif_map[start]['m_1'][0][1]);
			m_1_0_arr.push(motif_map[start]['m_1'][0][0]);
			m_1_1_arr.push(motif_map[start]['m_1'][1][1]);
			m_1_1_arr.push(motif_map[start]['m_1'][1][0]);
			m_1_2_arr.push(motif_map[start]['m_1'][2][1]);
			m_1_2_arr.push(motif_map[start]['m_1'][2][0]);
			m_1_3_arr.push(motif_map[start]['m_1'][3][1]);
			m_1_3_arr.push(motif_map[start]['m_1'][3][0]);

			motif_map[start]['m_1'] = null;

			m_2_0_arr.push(motif_map[start]['m_2'][0][1]);
			m_2_0_arr.push(motif_map[start]['m_2'][0][0]);
			m_2_1_arr.push(motif_map[start]['m_2'][1][1]);
			m_2_1_arr.push(motif_map[start]['m_2'][1][0]);
			m_2_2_arr.push(motif_map[start]['m_2'][2][1]);
			m_2_2_arr.push(motif_map[start]['m_2'][2][0]);
			m_2_3_arr.push(motif_map[start]['m_2'][3][1]);
			m_2_3_arr.push(motif_map[start]['m_2'][3][0]);

			motif_map[start]['m_2'] = null;

			m_3_0_arr.push(motif_map[start]['m_3'][0][1]);
			m_3_0_arr.push(motif_map[start]['m_3'][0][0]);
			m_3_1_arr.push(motif_map[start]['m_3'][1][1]);
			m_3_1_arr.push(motif_map[start]['m_3'][1][0]);
			m_3_2_arr.push(motif_map[start]['m_3'][2][1]);
			m_3_2_arr.push(motif_map[start]['m_3'][2][0]);
			m_3_3_arr.push(motif_map[start]['m_3'][3][1]);
			m_3_3_arr.push(motif_map[start]['m_3'][3][0]);

			motif_map[start]['m_3'] = null;
		});
return m_0_2_arr;
}
	// 	var results_m_0_0 = pca_m_0_0.predict(m_0_0_arr);
	// 	var results_m_0_1 = pca_m_0_1.predict(m_0_1_arr);
	// 	var results_m_0_2 = pca_m_0_2.predict(m_0_2_arr);

	// 	var results_m_1_0 = pca_m_1_0.predict(m_1_0_arr);
	// 	var results_m_1_1 = pca_m_1_1.predict(m_1_1_arr);
	// 	var results_m_1_2 = pca_m_1_2.predict(m_1_2_arr);
	// 	var results_m_1_3 = pca_m_1_3.predict(m_1_3_arr);

	// 	var results_m_2_0 = pca_m_1_0.predict(m_2_0_arr);
	// 	var results_m_2_1 = pca_m_1_1.predict(m_2_1_arr);
	// 	var results_m_2_2 = pca_m_1_2.predict(m_2_2_arr);
	// 	var results_m_2_3 = pca_m_1_3.predict(m_2_3_arr);

	// 	var results_m_3_0 = pca_m_1_0.predict(m_3_0_arr);
	// 	var results_m_3_1 = pca_m_1_1.predict(m_3_1_arr);
	// 	var results_m_3_2 = pca_m_1_2.predict(m_3_2_arr);
	// 	var results_m_3_3 = pca_m_1_3.predict(m_3_3_arr);

	// 	m_0_0_arr = [];
	// 	m_0_1_arr = [];
	// 	m_0_2_arr = [];
	// 	m_1_0_arr = [];
	// 	m_1_1_arr = [];
	// 	m_1_2_arr = [];
	// 	m_1_3_arr = [];
	// 	m_2_0_arr = [];
	// 	m_2_1_arr = [];
	// 	m_2_2_arr = [];
	// 	m_2_3_arr = [];
	// 	m_3_0_arr = [];
	// 	m_3_1_arr = [];
	// 	m_3_2_arr = [];
	// 	m_3_3_arr = [];

	// 	var seq_map = {};
	// 	var start_arr = Object.keys(motif_map);

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_0_0;
	// 	var row = 0;
	// 	var motif = 0;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_0_0'] = motif_arr;
	// 	results_m_0_0 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_0_1;
	// 	var row = 0;
	// 	var motif = 1;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_0_1'] = motif_arr;
	// 	results_m_0_1 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_0_2;
	// 	var row = 0;
	// 	var motif = 2;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_0_2'] = motif_arr;
	// 	results_m_0_2 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_1_0;
	// 	var row = 1;
	// 	var motif = 0;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_1_0'] = motif_arr;
	// 	results_m_1_0 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_1_1;
	// 	var row = 1;
	// 	var motif = 1;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_1_1'] = motif_arr;
	// 	results_m_1_1 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_1_2;
	// 	var row = 1;
	// 	var motif = 2;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_1_2'] = motif_arr;
	// 	results_m_1_2 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_1_3;
	// 	var row = 1;
	// 	var motif = 3;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_1_3'] = motif_arr;
	// 	results_m_1_3 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_2_0;
	// 	var row = 2;
	// 	var motif = 0;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_2_0'] = motif_arr;
	// 	results_m_2_0 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_2_1;
	// 	var row = 2;
	// 	var motif = 1;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_2_1'] = motif_arr;
	// 	results_m_2_1 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_2_2;
	// 	var row = 2;
	// 	var motif = 2;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_2_2'] = motif_arr;
	// 	results_m_2_2 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_2_3;
	// 	var row = 2;
	// 	var motif = 3;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_2_3'] = motif_arr;
	// 	results_m_2_3 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_3_0;
	// 	var row = 3;
	// 	var motif = 0;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_3_0'] = motif_arr;
	// 	results_m_3_0 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_3_1;
	// 	var row = 3;
	// 	var motif = 1;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_3_1'] = motif_arr;
	// 	results_m_3_1 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_3_2;
	// 	var row = 3;
	// 	var motif = 2;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_3_2'] = motif_arr;
	// 	results_m_3_2 = [];

	// 	var i=0;
	// 	var k=0;
	// 	var arr = results_m_3_3;
	// 	var row = 3;
	// 	var motif = 3;
	// 	var motif_arr = [];
	// 	while(i<arr.length){
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":1
	// 		};
	// 		var axis_arr = arr[i];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		var map = {
	// 			"seq": seq,
	// 			"motif_start": start_arr[k],
	// 			"row":row,
	// 			"motif":motif,
	// 			"tss":0
	// 		};
	// 		var axis_arr = arr[i+1];
	// 		for(var j=0;j<axis_arr.length;j++){
	// 			map['Axis'+(j+1)] = axis_arr[j];
	// 		}
	// 		motif_arr.push(map);
	// 		i+=2;
	// 		k++;
	// 	}
	// 	seq_map['m_3_3'] = motif_arr;
	// 	results_m_3_3 = [];

	// 	return (seq_map);
	// },

	// predictRegression(all_seq_map, cb){
	// 	var motif_results = {};
	// 	var itr = 15;
	// 	logisticRegression.predictAsync(all_seq_map.m_0_0, "m_0_0.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_0_1, "m_0_1.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_0_2, "m_0_2.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_1_0, "m_1_0.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_1_1, "m_1_1.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_1_2, "m_1_2.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_1_3, "m_1_3.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_2_0, "m_2_0.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_2_1, "m_2_1.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_2_2, "m_2_2.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_2_3, "m_2_3.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_3_0, "m_3_0.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_3_1, "m_3_1.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_3_2, "m_3_2.rda", constants.MOTIF_PROB,1, callback);

	// 	logisticRegression.predictAsync(all_seq_map.m_3_3, "m_3_3.rda", constants.MOTIF_PROB,1, callback);

	// 	//var results_80 = logisticRegression.predict(data_80_reg, "regression_model_80.rda", constants.WINDOW_80_PROB);
	// 	function callback(e,r, flag){
	// 		console.log('========',itr)
	// 		while(r.length){
	// 			var obj = r.pop();
	// 			if(motif_results[obj.seq] === undefined)
	// 				motif_results[obj.seq] = {};
	// 			if(motif_results[obj.seq][obj.motif_start] === undefined)
	// 				motif_results[obj.seq][obj.motif_start] = {};
	// 			if(motif_results[obj.seq][obj.motif_start][obj.row] === undefined)
	// 				motif_results[obj.seq][obj.motif_start][obj.row] = {};
	// 			if(motif_results[obj.seq][obj.motif_start][obj.row][obj.motif] === undefined)
	// 				motif_results[obj.seq][obj.motif_start][obj.row][obj.motif] = {};

	// 			motif_results[obj.seq][obj.motif_start][obj.row][obj.motif][obj.tss] = obj.result;

	// 		}

	// 		itr = itr-flag;

	// 		if(itr === 0)
	// 			return self.processResult(motif_results,cb);
	// 	}
	// },

	// processResult: function(motif_results, cb){
	// 	var final_result_row = {};
	// 	Object.keys(motif_results).forEach(function(seq){
	// 		var map_1 = motif_results[seq];
	// 		final_result_row[seq] = {};
	// 		Object.keys(map_1).forEach(function(start){
	// 			var map_2 = map_1[start];
	// 			final_result_row[seq][start] = {};
	// 			Object.keys(map_2).forEach(function(row){
	// 				final_result_row[seq][start][row] = {};
	// 				var map_3 = map_2[row];
	// 				if(row == 0)
	// 					final_result_row[seq][start][row] = anyTwo(map_3);
	// 				else
	// 					final_result_row[seq][start][row] = anyThree(map_3);
	// 			});
	// 		});
	// 	});
	// 	var final_result = {};

	// 	Object.keys(final_result_row).forEach(function(seq){
	// 		if(final_result[seq] === undefined)
	// 			final_result[seq] = {};
	// 		Object.keys(final_result_row[seq]).forEach(function(start){
	// 			var map = final_result_row[seq][start];
	// 			if(final_result[seq][start] === undefined)
	// 				final_result[seq][start] = {};
	// 			var sum_tss = 0;
	// 			var sum_notss = 0;
	// 			Object.keys(map).forEach(function(row){
	// 				sum_tss+=map[row][1];
	// 				sum_notss += map[row][0];
	// 			});
	// 			final_result[seq][start] = {
	// 				0: (sum_notss>=1)?1:0,
	// 				1: (sum_tss>=1)?1:0
	// 			};
	// 		});
	// 	});


	// 	return cb(null,final_result)

	// 	function anyTwo(map){
	// 		var sum_tss = 0;
	// 		var sum_notss = 0;
	// 		var result_tss, result_notss;
	// 		Object.keys(map).forEach(function(m){
	// 			sum_tss+= map[m][1];
	// 			sum_notss+= map[m][0];
	// 		});

	// 		if(sum_tss>=2)
	// 			result_tss = 1;
	// 		else result_tss = 0;
	// 		if(sum_notss>=2)
	// 			result_notss = 1;
	// 		else result_notss = 0;
			
	// 		return {
	// 			0:result_notss,
	// 			1:result_tss
	// 		}
	// 	}
	// 	function anyThree(map){
	// 		var sum_tss = 0;
	// 		var sum_notss = 0;
	// 		var result_tss, result_notss;
	// 		Object.keys(map).forEach(function(m){
	// 			sum_tss+= map[m][1];
	// 			sum_notss+= map[m][0];
	// 		});

	// 		if(sum_tss>=3)
	// 			result_tss = 1;
	// 		else result_tss = 0;
	// 		if(sum_notss>=3)
	// 			result_notss = 1;
	// 		else result_notss = 0;
			
	// 		return {
	// 			0:result_notss,
	// 			1:result_tss
	// 		}
	// 	}
	// }
};

var self = module.exports = motifsAlgorithm;
