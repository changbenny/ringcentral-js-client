"use strict";
/**
The outer class
*/
var CallerInfo = (function () {
    function CallerInfo() {
    }
    CallerInfo.prototype.getPropertyMappings = function () {
        return [
            { property: "phoneNumber", Class: null /* string */, isArray: false, isRequired: false },
            { property: "extensionNumber", Class: null /* string */, isArray: false, isRequired: false },
            { property: "location", Class: null /* string */, isArray: false, isRequired: false },
            { property: "name", Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CallerInfo.prototype.getClassName = function () {
        return "CallerInfo";
    };
    return CallerInfo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CallerInfo;
