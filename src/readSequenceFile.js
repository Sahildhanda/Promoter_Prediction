"use strict";

var fs = require('fs');
var utils = require('../utils');
var sequenceMap = utils.sequenceMap;

module.exports = function (file, cb){
	if(!file)
		return cb("No Input File.");

	fs.readFile(file, "utf8", function(e,r){
		if(e) return cb("Error in reading input sequence file.");

		r = r.split('\n');
		var itr = 1;
		r.forEach(function(seq){
			if(seq && seq !== undefined && seq !== '' && seq.length >1000){
				sequenceMap[itr] = seq;
				itr++;
			}
			else{
				console.log('Invalid Sequence: ' +itr);
				itr++
			}
		});

		return cb();
	});
};
