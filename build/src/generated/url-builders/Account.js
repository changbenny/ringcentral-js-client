"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var ActiveCalls_1 = require("./ActiveCalls");
var BusinessAddress_1 = require("./BusinessAddress");
var CallLog_1 = require("./CallLog");
var Department_1 = require("./Department");
var Device_1 = require("./Device");
var Extension_1 = require("./Extension");
var Order_1 = require("./Order");
var PhoneNumber_1 = require("./PhoneNumber");
var Recording_1 = require("./Recording");
var ServiceInfo_1 = require("./ServiceInfo");
var Account = (function (_super) {
    __extends(Account, _super);
    function Account(prv, id, service) {
        _super.call(this, "account", id || "~", prv, service);
    }
    Account.prototype.activeCalls = function (id) {
        return new ActiveCalls_1.default(this, id);
    };
    Account.prototype.businessAddress = function (id) {
        return new BusinessAddress_1.default(this, id);
    };
    /**
     * Internal identifier of a call log record
     */
    Account.prototype.callLog = function (id) {
        return new CallLog_1.default(this, id);
    };
    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    Account.prototype.department = function (id) {
        return new Department_1.default(this, id);
    };
    /**
     * Internal identifier of a device
     */
    Account.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    Account.prototype.extension = function (id) {
        return new Extension_1.default(this, id);
    };
    /**
     * Internal identifier of an order
     */
    Account.prototype.order = function (id) {
        return new Order_1.default(this, id);
    };
    /**
     * Internal identifier of a phone number
     */
    Account.prototype.phoneNumber = function (id) {
        return new PhoneNumber_1.default(this, id);
    };
    /**
     * Internal identifier of recording (returned in Call Log)
     */
    Account.prototype.recording = function (id) {
        return new Recording_1.default(this, id);
    };
    Account.prototype.serviceInfo = function (id) {
        return new ServiceInfo_1.default(this, id);
    };
    /**
    Get Account Info by ID
    */
    Account.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    return Account;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Account;
