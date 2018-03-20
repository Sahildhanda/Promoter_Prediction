"use strict";

var R = require("r-script");
var a = [ { Tss: 1, A: 2, B: 3 }, { Tss: 0, A: 45, B: 6 } ];
var out = R("glm_temp.R")
  .data({a:a})
  .callSync();
  
console.log("dasdsadsa",out);
