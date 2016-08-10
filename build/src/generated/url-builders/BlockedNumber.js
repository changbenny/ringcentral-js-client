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
var BlockedNumber = (function (_super) {
    __extends(BlockedNumber, _super);
    function BlockedNumber(prv, id, service) {
        _super.call(this, "blocked-number", id, prv, service);
    }
    /**
    Get Blocked Number by ID
    */
    BlockedNumber.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Blocked Number List
    // FIXME: Assume that list operation only allow query parameters
    */
    BlockedNumber.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    /**
        Add New Blocked Number
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    BlockedNumber.prototype.post = function (body, query) {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Blocked Number Label
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    BlockedNumber.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Blocked Number by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    BlockedNumber.prototype.delete = function (query) {
        return this.getService().delete(this.getEndpoint(), query);
    };
    return BlockedNumber;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlockedNumber;
