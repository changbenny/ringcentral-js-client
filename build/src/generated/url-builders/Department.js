"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Members_1 = require("./Members");
var Department = (function (_super) {
    __extends(Department, _super);
    function Department(prv, id, service) {
        _super.call(this, "department", id, prv, service);
    }
    Department.prototype.members = function (id) {
        return new Members_1.default(this, id);
    };
    return Department;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Department;
