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
var AddressBookSync_1 = require("./AddressBookSync");
var AddressBook_1 = require("./AddressBook");
var AnsweringRule_1 = require("./AnsweringRule");
var BlockedNumber_1 = require("./BlockedNumber");
var BusinessHours_1 = require("./BusinessHours");
var CallLog_1 = require("./CallLog");
var CallLogSync_1 = require("./CallLogSync");
var CompanyPager_1 = require("./CompanyPager");
var Conferencing_1 = require("./Conferencing");
var Device_1 = require("./Device");
var Fax_1 = require("./Fax");
var ForwardingNumber_1 = require("./ForwardingNumber");
var Grant_1 = require("./Grant");
var Meeting_1 = require("./Meeting");
var MessageStore_1 = require("./MessageStore");
var MessageSync_1 = require("./MessageSync");
var PhoneNumber_1 = require("./PhoneNumber");
var Presence_1 = require("./Presence");
var ProfileImage_1 = require("./ProfileImage");
var Ringout_1 = require("./Ringout");
var Sms_1 = require("./Sms");
var PagingResult_1 = require("../../PagingResult");
var Extension = (function (_super) {
    __extends(Extension, _super);
    function Extension(prv, id, service) {
        _super.call(this, "extension", id || "~", prv, service);
    }
    Extension.prototype.activeCalls = function (id) {
        return new ActiveCalls_1.default(this, id);
    };
    Extension.prototype.addressBookSync = function (id) {
        return new AddressBookSync_1.default(this, id);
    };
    Extension.prototype.addressBook = function (id) {
        return new AddressBook_1.default(this, id);
    };
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    Extension.prototype.answeringRule = function (id) {
        return new AnsweringRule_1.default(this, id);
    };
    /**
     * Internal identifier of a blocked number list entry
     */
    Extension.prototype.blockedNumber = function (id) {
        return new BlockedNumber_1.default(this, id);
    };
    Extension.prototype.businessHours = function (id) {
        return new BusinessHours_1.default(this, id);
    };
    /**
     * Internal identifier of a call log record
     */
    Extension.prototype.callLog = function (id) {
        return new CallLog_1.default(this, id);
    };
    Extension.prototype.callLogSync = function (id) {
        return new CallLogSync_1.default(this, id);
    };
    Extension.prototype.companyPager = function (id) {
        return new CompanyPager_1.default(this, id);
    };
    Extension.prototype.conferencing = function (id) {
        return new Conferencing_1.default(this, id);
    };
    /**
     * Internal identifier of a device
     */
    Extension.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    Extension.prototype.fax = function (id) {
        return new Fax_1.default(this, id);
    };
    Extension.prototype.forwardingNumber = function (id) {
        return new ForwardingNumber_1.default(this, id);
    };
    Extension.prototype.grant = function (id) {
        return new Grant_1.default(this, id);
    };
    /**
     * Internal identifier of a meeting
     */
    Extension.prototype.meeting = function (id) {
        return new Meeting_1.default(this, id);
    };
    /**
     * Internal identifier of a message
     */
    Extension.prototype.messageStore = function (id) {
        return new MessageStore_1.default(this, id);
    };
    Extension.prototype.messageSync = function (id) {
        return new MessageSync_1.default(this, id);
    };
    /**
     * Internal identifier of a phone number
     */
    Extension.prototype.phoneNumber = function (id) {
        return new PhoneNumber_1.default(this, id);
    };
    Extension.prototype.presence = function (id) {
        return new Presence_1.default(this, id);
    };
    /**
     * Dimensions of a profile image which will be returned in response.
     */
    Extension.prototype.profileImage = function (id) {
        return new ProfileImage_1.default(this, id);
    };
    /**
     * Internal identifier of a RingOut call
     */
    Extension.prototype.ringout = function (id) {
        return new Ringout_1.default(this, id);
    };
    Extension.prototype.sms = function (id) {
        return new Sms_1.default(this, id);
    };
    /**
    Get Extension Info by ID
    */
    Extension.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Extension List
    // FIXME: Assume that list operation only allow query parameters
    */
    Extension.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    return Extension;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Extension;
