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
var CallLog = (function (_super) {
    __extends(CallLog, _super);
    function CallLog(prv, id, service) {
        _super.call(this, "call-log", id, prv, service);
    }
    /**
    Get Extension Call Log Record by ID
    */
    CallLog.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Extension Call Log
    // FIXME: Assume that list operation only allow query parameters
    */
    CallLog.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    /**
        Delete Extension Call Log
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    CallLog.prototype.delete = function (query) {
        return this.getService().delete(this.getEndpoint(), query);
    };
    return CallLog;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CallLog;
