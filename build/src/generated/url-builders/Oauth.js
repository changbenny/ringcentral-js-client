"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Authorize_1 = require("./Authorize");
var Revoke_1 = require("./Revoke");
var Token_1 = require("./Token");
var Oauth = (function (_super) {
    __extends(Oauth, _super);
    function Oauth(prv, id, service) {
        _super.call(this, "oauth", id, prv, service);
    }
    Oauth.prototype.authorize = function (id) {
        return new Authorize_1.default(this, id);
    };
    Oauth.prototype.revoke = function (id) {
        return new Revoke_1.default(this, id);
    };
    Oauth.prototype.token = function (id) {
        return new Token_1.default(this, id);
    };
    return Oauth;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Oauth;
