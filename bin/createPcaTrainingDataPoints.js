"use strict";

var fs = require('fs');
var utils = require('../utils');
var parameters_map = utils.parameterMap;

var start = 465,
	end = 505

var main_arr = "[";
module.exports = function(){
	var moving_averages_map = parameters_map.moving_averages_map;
	Object.keys(moving_averages_map).forEach(function(seq){
		var param_map = moving_averages_map[seq];
		main_arr+="[";
		Object.keys(param_map).forEach(function(param){
			var arr = param_map[param];
			var sum = 0;
			var itr = 0;
			for(var i=start-1; i<=end-1; i++){
				sum+=arr[i];
				itr++;
			}
			var avg = (sum/itr).toFixed(6);
			main_arr+=avg;
			main_arr+=",";
		});
		main_arr+="]";
		main_arr+="\n";
	});
	main_arr+="]";
	fs.writeFile('./bin/pcaTrainingDataset_40.js',main_arr,console.log);
}