"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Reserve = (function (_super) {
    __extends(Reserve, _super);
    function Reserve(prv, id, service) {
        _super.call(this, "reserve", id, prv, service);
    }
    /**
        Reserve Phone Number
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Reserve.prototype.post = function (body, query) {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    };
    return Reserve;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Reserve;
