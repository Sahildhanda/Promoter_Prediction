"use strict";

var fs = require('fs');
var bin = require('../bin');

var final = '';
var data = bin.pcaTrainingDataset_40;

for(var i=0;i<data.length; i++){
	for(var j=0;j<data[i].length; j++){
		final+='  ';
		final+= data[i][j];
	}
	final+='\n';
}

fs.writeFile('./bin/temp_data.txt',final,console.log)