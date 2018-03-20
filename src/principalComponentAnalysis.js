"use strict";

module.exports = {
	getPCAs: function(data_arr, equation_map){
		var axis_arr = [];

		Object.keys(equation_map).forEach(function(key){
			var equation_arr = equation_map[key];
			var sum = 0;
			for(var i=0;i<equation_arr.length;i++){
				var temp = data_arr[i] * equation_arr[i];
				sum+=temp;
			}
			axis_arr.push(sum);
		});
		return axis_arr;
	}
};

