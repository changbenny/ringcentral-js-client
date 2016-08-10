"use strict";
var AnsweringRuleInfo_1 = require("./AnsweringRuleInfo");
var CallerInfo_1 = require("./CallerInfo");
console.log(AnsweringRuleInfo_1.default);
var nc = new CallerInfo_1.default();
var ari = new AnsweringRuleInfo_1.default();
nc.phoneNumber = "hello";
console.log(">>>", ari, nc);
// string -> enum
var out = "a";
var e = out; // No runtime and compile time check.
console.log("ok," + e);
