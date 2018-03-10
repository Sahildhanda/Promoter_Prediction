const PCA = require('ml-pca');
const dataset = require('./bin');
var fs = require('fs');


const pca = new PCA(dataset.pcaTrainingDataset_40,{
	center: true,
	scale: false
});

const newPoints = dataset.pcaTrainingDataset_40;

var newPca = pca.predict(newPoints);
console.log(newPca[1])
// var final = '';
// for(var i=0;i<newPca.length; i++){
// 	for(var j=0;j<newPca[i].length; j++){
// 		final+= newPca[i][j];
// 		final+=',';
// 	}
// 	final+='\n';
// }

// fs.writeFile('./bin/data_40_testPca.csv',final,console.log)