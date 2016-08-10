"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var PagingResult_1 = require("../../PagingResult");
var PhoneNumber = (function (_super) {
    __extends(PhoneNumber, _super);
    function PhoneNumber(prv, id, service) {
        _super.call(this, "phone-number", id, prv, service);
    }
    /**
    Get Phone Number by ID
    */
    PhoneNumber.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Account Phone Numbers
    // FIXME: Assume that list operation only allow query parameters
    */
    PhoneNumber.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    return PhoneNumber;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PhoneNumber;
