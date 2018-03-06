const PCA = require('ml-pca');
const dataset = require('ml-dataset-iris').getNumbers();

const pca = new PCA(dataset);

console.log(pca)
console.log(pca.getExplainedVariance());