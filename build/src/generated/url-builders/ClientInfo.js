"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var CustomData_1 = require("./CustomData");
var ClientInfo = (function (_super) {
    __extends(ClientInfo, _super);
    function ClientInfo(prv, id, service) {
        _super.call(this, "client-info", id, prv, service);
    }
    /**
     * Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won&#x27;t be allowed to create any custom data key for that extension
     */
    ClientInfo.prototype.customData = function (id) {
        return new CustomData_1.default(this, id);
    };
    return ClientInfo;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClientInfo;
