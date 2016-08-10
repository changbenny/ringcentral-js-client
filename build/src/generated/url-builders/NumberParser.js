"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Parse_1 = require("./Parse");
var NumberParser = (function (_super) {
    __extends(NumberParser, _super);
    function NumberParser(prv, id, service) {
        _super.call(this, "number-parser", id, prv, service);
    }
    NumberParser.prototype.parse = function (id) {
        return new Parse_1.default(this, id);
    };
    return NumberParser;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NumberParser;
