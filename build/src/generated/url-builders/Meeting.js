"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var ServiceInfo_1 = require("./ServiceInfo");
var End_1 = require("./End");
var PagingResult_1 = require("../../PagingResult");
var Meeting = (function (_super) {
    __extends(Meeting, _super);
    function Meeting(prv, id, service) {
        _super.call(this, "meeting", id, prv, service);
    }
    Meeting.prototype.serviceInfo = function (id) {
        return new ServiceInfo_1.default(this, id);
    };
    Meeting.prototype.end = function (id) {
        return new End_1.default(this, id);
    };
    /**
    Get Meeting
    */
    Meeting.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Meetings List
    // FIXME: Assume that list operation only allow query parameters
    */
    Meeting.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    /**
        Create Meeting
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Meeting.prototype.post = function (body, query) {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Meeting
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Meeting.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Meeting
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Meeting.prototype.delete = function (query) {
        return this.getService().delete(this.getEndpoint(), query);
    };
    return Meeting;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Meeting;
