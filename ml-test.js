const PCA = require('ml-pca');
const dataset = require('./bin');
var fs = require('fs');


const pca = new PCA(dataset.pcaTrainingDataset_40,{
	center: true,
	scale: false
});

const newPoints = dataset.pcaTrainingDataset_40;

var newPca = pca.predict(newPoints);
console.log(newPca.length)
var final = 'Axis1,Axis2,Axis3,Axis4,Axis5,Axis6,Tss\n';
for(var i=0;i<16519; i++){
	for(var j=0;j<6; j++){
		final+= newPca[i][j];
		final+=',';
	}
	final+='1\n';
}
for(var i=16519;i<33036; i++){
	for(var j=0;j<6; j++){
		final+= newPca[i][j];
		final+=',';
	}
	final+='0\n';
}


fs.writeFile('./bin/regressionTrainingDataset40.csv',final,console.log)