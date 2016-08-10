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
var Recording = (function (_super) {
    __extends(Recording, _super);
    function Recording(prv, id, service) {
        _super.call(this, "recording", id, prv, service);
    }
    /**
     * Internal identifier of a message attachment
     */
    Recording.prototype.content = function (id) {
        return new Content_1.default(this, id);
    };
    /**
    Get Call Recording Metadata
    */
    Recording.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    return Recording;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Recording;
