"use strict";
var AddonInfo = (function () {
    function AddonInfo() {
    }
    AddonInfo.prototype.getPropertyMappings = function () {
        return [
            { property: "id", Class: null /* string */, isArray: false, isRequired: false },
            { property: "count", Class: null /* number */, isArray: false, isRequired: false }
        ];
    };
    AddonInfo.prototype.getClassName = function () {
        return "AddonInfo";
    };
    return AddonInfo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddonInfo;
