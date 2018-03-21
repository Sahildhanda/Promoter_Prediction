"use strict";

var lib = require('../lib');
var utils = require('../utils');

var constants = lib.constants;
var sequence_map = utils.sequenceMap;

var predicted_results = utils.predictedResultsMap.predicted_results;

function extractWindow(start, stop, sequence){
	return sequence.substring(start, stop);
}

function calculateAbove60Score(seq){
	var score = 0;
	for(var i=0;i<seq.length;i++){
		if(seq[i] === 'A'){
			if(seq[i] === 'A' && seq[i-1] !== 'A')
				score = score++;
			
			else if(seq[i] === 'A' && seq[i-1] === 'A' && seq[i-2] !== 'A')
				score = score+2;

			else if(seq[i] === 'A' && seq[i-1] === 'A' && seq[i-2] === 'A' && seq[i-3] !== 'A')
				score = score+3;

			else if(seq[i] === 'A' && seq[i-1] === 'A' && seq[i-2] === 'A' && seq[i-3] === 'A' && seq[i-4] !== 'A')
				score = score+4;

			else if(seq[i] === 'A' && seq[i-1] === 'A' && seq[i-2] === 'A' && seq[i-3] === 'A' && seq[i-4] === 'A' && seq[i-5] !== 'A')
				score = score+5;

			else if(seq[i] === 'A' && seq[i-1] === 'A' && seq[i-2] === 'A' && seq[i-3] === 'A' && seq[i-4] === 'A' && seq[i-5] === 'A' && seq[i-6] !== 'A')
				score = score+6;

			else if(seq[i] === 'A' && seq[i-1] === 'A' && seq[i-2] === 'A' && seq[i-3] === 'A' && seq[i-4] === 'A' && seq[i-5] === 'A' && seq[i-6] === 'A')
				score = score+7;

		}

		else if(seq[i] === 'T'){
			if(seq[i] === 'T' && seq[i-1] !== 'T')
				score = score++;
			
			else if(seq[i] === 'T' && seq[i-1] === 'T' && seq[i-2] !== 'T')
				score = score+2;

			else if(seq[i] === 'T' && seq[i-1] === 'T' && seq[i-2] === 'T' && seq[i-3] !== 'T')
				score = score+3;

			else if(seq[i] === 'T' && seq[i-1] === 'T' && seq[i-2] === 'T' && seq[i-3] === 'T' && seq[i-4] !== 'T')
				score = score+4;

			else if(seq[i] === 'T' && seq[i-1] === 'T' && seq[i-2] === 'T' && seq[i-3] === 'T' && seq[i-4] === 'T' && seq[i-5] !== 'T')
				score = score+5;

			else if(seq[i] === 'T' && seq[i-1] === 'T' && seq[i-2] === 'T' && seq[i-3] === 'T' && seq[i-4] === 'T' && seq[i-5] === 'T' && seq[i-6] !== 'T')
				score = score+6;

			else if(seq[i] === 'A' && seq[i-1] === 'T' && seq[i-2] === 'T' && seq[i-3] === 'T' && seq[i-4] === 'T' && seq[i-5] === 'T' && seq[i-6] === 'T')
				score = score+7;

		}	

	}

	return score;
}

function compareATContentAbove60(seq1, seq2){
	var score_1 = calculateAbove60Score(seq1);
	var score_2 = calculateAbove60Score(seq2);

	return (score_1>score_2) ? 1:0;
}

function compareATContent(seq1,seq2){
	var freqA_1=0,freqT_1=0,freqA_2=0,freqT_2=0;
	if((seq1.match(/A/gi)) !== null)
		freqA_1 = seq1.match(/A/gi).length;
	if((seq1.match(/T/gi))!== null)
		freqT_1 = seq1.match(/T/gi).length;
	if((seq2.match(/A/gi)) !== null)
		freqA_2 = seq2.match(/A/gi).length;
	if((seq2.match(/T/gi))!== null)
		freqT_2 = seq2.match(/T/gi).length;

	return((freqA_1+freqT_1)>(freqA_2+freqT_2)?1:0)
}

var sequenceAlgorithm = {
	iterateSequences: function(){
		var keys = Object.keys(sequence_map);

		keys.forEach(function(key){
			//console.log(key)
			self.getGCContent(key);
		});

		return;
	},
	
	getGCContent: function(key){
		var sequence = sequence_map[key];
		var freq_G = sequence.match(/G/gi).length,
			freq_C = sequence.match(/C/gi).length;
		var sum = freq_G+freq_C;
		var len = sequence.length;
		var percent = (sum/len)*100;

		if(percent>60)
			return self.above60Algo(key);
		else
			return self.below60Algo(key);
	},
	
	above60Algo: function(key){
		var i=0;
		var sequence = sequence_map[key];
		var len = sequence.length;
		if(predicted_results[key] === undefined)
			predicted_results[key] = {};

		while((i+constants.ITR_WINDOW_SIZE+constants.NO_TSS_WINDOW_LENGTH+constants.ITR_WINDOW_SIZE)<=len){
			var tss_motif_start = i;
			var tss_motif_stop = tss_motif_start+constants.ITR_WINDOW_SIZE;
			var no_tss_motif_start = tss_motif_stop+constants.NO_TSS_WINDOW_LENGTH;
			var no_tss_motif_stop = no_tss_motif_start+constants.ITR_WINDOW_SIZE;

			var tss_window_20 = extractWindow(tss_motif_stop-20, tss_motif_stop, sequence);
			var no_tss_window_20 = extractWindow(no_tss_motif_stop-20, no_tss_motif_stop, sequence);
			
			var result_20 = compareATContentAbove60(tss_window_20, no_tss_window_20);

			var tss_window_40 = extractWindow(tss_motif_stop-40, tss_motif_stop, sequence);
			var no_tss_window_40 = extractWindow(no_tss_motif_stop-40, no_tss_motif_stop, sequence);
			
			var result_40 = compareATContentAbove60(tss_window_40, no_tss_window_40);

			var tss_window_80 = extractWindow(tss_motif_stop-80, tss_motif_stop, sequence);
			var no_tss_window_80 = extractWindow(no_tss_motif_stop-80, no_tss_motif_stop, sequence);

			var result_80 = compareATContentAbove60(tss_window_80, no_tss_window_80);

			if(predicted_results[key][tss_motif_start] === undefined)
				predicted_results[key][tss_motif_start] = {};

			var sum = result_20+result_40+result_80;

			if(sum>=2)
				predicted_results[key][tss_motif_start]['sequence_algo'] = 1;
			else
				predicted_results[key][tss_motif_start]['sequence_algo'] = 0;

			i+=constants.SKIP_WINDOW_SEQUENCE;
		}

		return;
	},

	below60Algo: function(key){
		var i=0;
		var sequence = sequence_map[key];
		var len = sequence.length;
		if(predicted_results[key] === undefined)
			predicted_results[key] = {};

		while((i+constants.ITR_WINDOW_SIZE+constants.NO_TSS_WINDOW_LENGTH+constants.ITR_WINDOW_SIZE)<=len){
			var tss_motif_start = i;
			var tss_motif_stop = tss_motif_start+constants.ITR_WINDOW_SIZE;
			var no_tss_motif_start = tss_motif_stop+constants.NO_TSS_WINDOW_LENGTH;
			var no_tss_motif_stop = no_tss_motif_start+constants.ITR_WINDOW_SIZE;

			var tss_window_20 = extractWindow(tss_motif_stop-20, tss_motif_stop, sequence);
			var no_tss_window_20 = extractWindow(no_tss_motif_stop-20, no_tss_motif_stop, sequence);
			
			var result_20 = compareATContent(tss_window_20, no_tss_window_20);

			var tss_window_40 = extractWindow(tss_motif_stop-40, tss_motif_stop, sequence);
			var no_tss_window_40 = extractWindow(no_tss_motif_stop-40, no_tss_motif_stop, sequence);
			
			var result_40 = compareATContent(tss_window_40, no_tss_window_40);

			var tss_window_80 = extractWindow(tss_motif_stop-80, tss_motif_stop, sequence);
			var no_tss_window_80 = extractWindow(no_tss_motif_stop-80, no_tss_motif_stop, sequence);

			var result_80 = compareATContent(tss_window_80, no_tss_window_80);

			if(predicted_results[key][tss_motif_start] === undefined)
				predicted_results[key][tss_motif_start] = {};

			var sum = result_20+result_40+result_80;

			if(sum>=2)
				predicted_results[key][tss_motif_start]['sequence_algo'] = 1;
			else
				predicted_results[key][tss_motif_start]['sequence_algo'] = 0;

			i+=constants.SKIP_WINDOW_SEQUENCE;
		}

		return;
	}

};

var self = module.exports = sequenceAlgorithm;