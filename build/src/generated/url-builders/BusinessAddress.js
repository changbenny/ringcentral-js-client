"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var BusinessAddress = (function (_super) {
    __extends(BusinessAddress, _super);
    function BusinessAddress(prv, id, service) {
        _super.call(this, "business-address", id, prv, service);
    }
    /**
    Get Company Business Address
    */
    BusinessAddress.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Company Business Address
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    BusinessAddress.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    return BusinessAddress;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BusinessAddress;
