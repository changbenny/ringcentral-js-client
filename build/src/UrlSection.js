"use strict";
/**
 * UrlParts
 */
var UrlSection = (function () {
    function UrlSection(name, value, prv, service) {
        this._service = service;
        this.name = name;
        this.value = value || null;
        this.previous = prv;
    }
    UrlSection.prototype.toString = function (withValue) {
        if (withValue === void 0) { withValue = true; }
        var str = "/" + this.name;
        if (withValue && this.value) {
            str += "/" + this.value;
        }
        return str;
    };
    UrlSection.prototype.getEndpoint = function (withValue) {
        if (withValue === void 0) { withValue = true; }
        var end = "";
        if (this.previous) {
            end = this.previous.getEndpoint();
        }
        return end + this.toString(withValue);
    };
    UrlSection.prototype.getService = function () {
        var sec = this;
        while (sec) {
            if (sec._service) {
                return sec._service;
            }
            if (sec.previous) {
                sec = sec.previous;
            }
        }
    };
    return UrlSection;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UrlSection;
