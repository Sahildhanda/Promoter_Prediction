"use strict";

var lib = require('../lib');
var constants = lib.constants;

var processResults = {
	predictSequencewiseTss: function(final_map){
		var result_map = {};

		Object.keys(final_map).forEach(function(seq){
			var start_arr = Object.keys(final_map[seq]);
			result_map[seq] = {};
			for(var i=0; i<start_arr.length; i++){
				var tss = 0;
				for(var j=i;j<i+constants.RESULT_ITR_WINDOW;j++){
					if(start_arr[j] && final_map[seq][start_arr[j]]!== undefined)
						tss+=final_map[seq][start_arr[j]];
				}
				if(tss>=constants.RESULT_ITR_WINDOW_THRESH){
					result_map[seq][start_arr[i]] = 1;
				}
				else{
					result_map[seq][start_arr[i]] = 0;
				}
			}
		});
		return result_map;
	},

	getTssPositions: function(result_map){
		var map_positions = {};
		Object.keys(result_map).forEach(function(seq){

			var start_arr = Object.keys(result_map[seq]);
			var start_len = start_arr.length;
			var map = result_map[seq];
			var positions = [];
			var i=0;

			while(i<start_len){
				i++;
				if(map[start_arr[i-1]] == 1 && map[start_arr[i]] == 1){
					var start = start_arr[i-1];
					var j = i;
					while(map[start_arr[j+1]] == 1 && j<start_len-1){
						j++;
					}
					console.log(start_arr[j])
					var stop = start_arr[j];
					if((stop - start) > constants.IGNORE_TSS_SEQ_THRESH){
						positions.push(start+"-"+stop);
						i=j;
					}
				}

			}
			map_positions[seq] = positions;
		});
		return map_positions;
	}
};

module.exports = processResults;