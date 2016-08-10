"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Content_1 = require("./Content");
var PagingResult_1 = require("../../PagingResult");
var MessageStore = (function (_super) {
    __extends(MessageStore, _super);
    function MessageStore(prv, id, service) {
        _super.call(this, "message-store", id, prv, service);
    }
    /**
     * Internal identifier of a message attachment
     */
    MessageStore.prototype.content = function (id) {
        return new Content_1.default(this, id);
    };
    /**
    Get Message by ID
    */
    MessageStore.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    /**
    Get Message List
    // FIXME: Assume that list operation only allow query parameters
    */
    MessageStore.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return new PagingResult_1.default(res.json());
        });
    };
    /**
        Update Message by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    MessageStore.prototype.put = function (body, query) {
        return this.getService().put(this.getEndpoint(), body, query).then(function (res) {
            return res.json();
        });
    };
    /**
        Delete Message by ID
        FIXME: Assumes post only accept query and body parameters
        FIXME: All properties of body will be optional
    */
    MessageStore.prototype.delete = function (query) {
        return this.getService().delete(this.getEndpoint(), query);
    };
    return MessageStore;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageStore;
