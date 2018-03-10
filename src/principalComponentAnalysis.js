"use strict";

const ml_pca = require('ml-pca');

exports.init = function(init_file){
	var pca = new ml_pca(init_file,{
		center: true,
		scale: false
	});
	return pca;
}

