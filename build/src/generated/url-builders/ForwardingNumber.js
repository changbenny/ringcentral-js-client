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
var ForwardingNumber = (function (_super) {
    __extends(ForwardingNumber, _super);
    function ForwardingNumber(prv, id, service) {
        _super.call(this, "forwarding-number", id, prv, service);
    }
    /**
    Get Forwarding Numbers
    // FIXME: Assume that list operation only allow query parameters
    */
    ForwardingNumber.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    /**
        Add New Forwarding Number
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    ForwardingNumber.prototype.post = function (body, query) {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    };
    return ForwardingNumber;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ForwardingNumber;
