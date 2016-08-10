/// <reference path="../typings/tsd.d.ts" />
"use strict";
var fetch = require("node-fetch");
var Ringcentral = require("ringcentral");
var config_1 = require("./config");
var ringcentral;
var p = fetch(config_1.default.authDataUrl).then(function (res) {
    return res.json();
}).then(function (auth) {
    ringcentral = new Ringcentral(auth.app).platform();
    return ringcentral.login(auth.user);
}).then(function (res) {
    return ringcentral;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = p;
