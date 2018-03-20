"use strict";

var fs = require('fs');

var writeFile = {
	write: function(path, data, cb){
		fs.writeFile(path, data, function(e,r){
			if(e) return cb(e);
			return cb(null,r);
		});
	},

	writeResults: function(path, map, cb){
		var tss = '';
		var notss = '';
		var headers = 'Seq,0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320,328,336,344,352,360,368,376,384,392,400,408,416,424,432,440,448,456,464,472,480,488,496,504,512,520,528,536,544,552,560,568,576,584,592,600,608\n';
		tss+=headers;
		notss+=headers;
		Object.keys(map).forEach(function(seq){
			tss+=seq+',';
			notss+=seq+',';
			Object.keys(map[seq]).forEach(function(start){
				tss+=map[seq][start][0]+',';
				notss+=map[seq][start][1]+',';

			});
			tss+='\n';
			notss+='\n';
		});

		fs.writeFile(path+'_tss.csv', tss,function(e,r){
			fs.writeFile(path+'_notss.csv',notss,cb);
		});
	}
};

module.exports = writeFile;