"use strict";

var utils = require('../utils');
var lib = require('../lib');
var sequence_map = utils.sequenceMap;
var constants = lib.constants;


var getParameterDetails = {
	iterateSequences: function(cb){
		var keys = Object.keys(sequence_map);

		return recurser(keys);

		function recurser(keys){
			if(!keys.length) return cb();
			var key = keys.pop();
			self.calculateParameters(key, function(e){
				if(e) return cb(e);
				return recurser(keys);

			});
		}
	},

	calculateParameters: function(key, cb){
		console.log(key)
		return cb();
	}

};

var self = module.exports = getParameterDetails;