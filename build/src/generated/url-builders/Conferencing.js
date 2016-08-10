"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Conferencing = (function (_super) {
    __extends(Conferencing, _super);
    function Conferencing(prv, id, service) {
        _super.call(this, "conferencing", id, prv, service);
    }
    /**
    Get Conferencing info
    */
    Conferencing.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Conferencing info
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Conferencing.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    return Conferencing;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Conferencing;
