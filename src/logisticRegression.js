"use strict";

module.exports = {
	predict: function(data_arr, equation_map, threshold){
		var equation_arr = equation_map.coeff;
		var log_odds = 0;
		for(var i=0;i<equation_arr.length;i++){
			var temp = data_arr[i] * equation_arr[i];
			log_odds+=temp;
		}
		
		log_odds+=equation_map.intercept;
		log_odds = -1 * log_odds;
		var prob = 1/(1+Math.exp(log_odds));
		return (prob>=threshold) ? 1:0;
	}
};