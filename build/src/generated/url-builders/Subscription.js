"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Subscription = (function (_super) {
    __extends(Subscription, _super);
    function Subscription(prv, id, service) {
        _super.call(this, "subscription", id, prv, service);
    }
    /**
    Get Subscription by ID
    */
    Subscription.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
        Create New Subscription
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Subscription.prototype.post = function (body, query) {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Update/Renew Subscription by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Subscription.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Cancel Subscription by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Subscription.prototype.delete = function (query) {
        return this.getService().delete(this.getEndpoint(), query);
    };
    return Subscription;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Subscription;
