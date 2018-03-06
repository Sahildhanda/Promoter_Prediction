"use strict";

var src = require('./src');
var utils = require('./utils');

var args = process.argv.slice(2);
var filePath = args[0];

if(!filePath){
	console.log("Please enter the sequence file path.");
}

else{
	src.readSequenceFile(filePath, function(e){
		if(e) return console.log(e);

		src.getParametersDetails.calculateParameters(1,function(e){
			if(e) return console.log(e);
			
		});
	});
}

