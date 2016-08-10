"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Country_1 = require("./Country");
var Language_1 = require("./Language");
var Location_1 = require("./Location");
var State_1 = require("./State");
var Timezone_1 = require("./Timezone");
var Dictionary = (function (_super) {
    __extends(Dictionary, _super);
    function Dictionary(prv, id, service) {
        _super.call(this, "dictionary", id, prv, service);
    }
    /**
     * Internal identifier of a country
     */
    Dictionary.prototype.country = function (id) {
        return new Country_1.default(this, id);
    };
    /**
     * Internal identifier of a language
     */
    Dictionary.prototype.language = function (id) {
        return new Language_1.default(this, id);
    };
    Dictionary.prototype.location = function (id) {
        return new Location_1.default(this, id);
    };
    /**
     * Internal identifier of a state
     */
    Dictionary.prototype.state = function (id) {
        return new State_1.default(this, id);
    };
    /**
     * Internal identifier of a timezone
     */
    Dictionary.prototype.timezone = function (id) {
        return new Timezone_1.default(this, id);
    };
    return Dictionary;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dictionary;
