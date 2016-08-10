"use strict";
var AnsweringRuleInfo = (function () {
    function AnsweringRuleInfo() {
    }
    AnsweringRuleInfo.prototype.getPropertyMappings = function () {
        return [
            { property: "uri", Class: null /* string */, isArray: false, isRequired: false },
            { property: "type", Class: AnsweringRuleInfoType, isArray: false, isRequired: false },
            { property: "calledNumbers", Class: CalleeInfo, isArray: true, isRequired: false },
            { property: "callers", Class: CallerInfo, isArray: true, isRequired: false },
        ];
    };
    AnsweringRuleInfo.prototype.getClassName = function () {
        return "AnsweringRuleInfo";
    };
    return AnsweringRuleInfo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AnsweringRuleInfo;
var CalleeInfo = (function () {
    function CalleeInfo() {
    }
    CalleeInfo.prototype.getPropertyMappings = function () {
        return [
            { property: "phoneNumber", Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CalleeInfo.prototype.getClassName = function () {
        return "CalleeInfo";
    };
    return CalleeInfo;
}());
exports.CalleeInfo = CalleeInfo;
/**
    The nested class
*/
var CallerInfo = (function () {
    function CallerInfo() {
    }
    CallerInfo.prototype.getPropertyMappings = function () {
        return [
            { property: "callerId", Class: null /* string */, isArray: false, isRequired: false },
            { property: "name", Class: null /* string */, isArray: false, isRequired: false }
        ];
    };
    CallerInfo.prototype.getClassName = function () {
        return "CallerInfo";
    };
    return CallerInfo;
}());
exports.CallerInfo = CallerInfo;
(function (AnsweringRuleInfoType) {
    AnsweringRuleInfoType[AnsweringRuleInfoType["BusinessHours"] = 0] = "BusinessHours";
    AnsweringRuleInfoType[AnsweringRuleInfoType["AfterHours"] = 1] = "AfterHours";
    AnsweringRuleInfoType[AnsweringRuleInfoType["Custom"] = 2] = "Custom";
})(exports.AnsweringRuleInfoType || (exports.AnsweringRuleInfoType = {}));
var AnsweringRuleInfoType = exports.AnsweringRuleInfoType;
(function (AnsweringRuleInfoCallHandlingAction) {
    AnsweringRuleInfoCallHandlingAction[AnsweringRuleInfoCallHandlingAction["ForwardCalls"] = 0] = "ForwardCalls";
    AnsweringRuleInfoCallHandlingAction[AnsweringRuleInfoCallHandlingAction["TakeMessagesOnly"] = 1] = "TakeMessagesOnly";
    AnsweringRuleInfoCallHandlingAction[AnsweringRuleInfoCallHandlingAction["PlayAnnouncementOnly"] = 2] = "PlayAnnouncementOnly";
    AnsweringRuleInfoCallHandlingAction[AnsweringRuleInfoCallHandlingAction["UnconditionalForwarding"] = 3] = "UnconditionalForwarding";
})(exports.AnsweringRuleInfoCallHandlingAction || (exports.AnsweringRuleInfoCallHandlingAction = {}));
var AnsweringRuleInfoCallHandlingAction = exports.AnsweringRuleInfoCallHandlingAction;
