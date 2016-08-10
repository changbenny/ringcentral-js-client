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
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(prv, id, service) {
        _super.call(this, "contact", id, prv, service);
    }
    /**
    Get Contact by ID
    */
    Contact.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Contact List
    // FIXME: Assume that list operation only allow query parameters
    */
    Contact.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    /**
        Create New Contact
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Contact.prototype.post = function (body, query) {
        return this.getService().post(this.getEndpoint(false), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Update Contact by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Contact.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Contact by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    Contact.prototype.delete = function (query) {
        return this.getService().delete(this.getEndpoint(), query);
    };
    return Contact;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Contact;
