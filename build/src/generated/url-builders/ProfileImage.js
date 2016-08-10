"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var ProfileImage = (function (_super) {
    __extends(ProfileImage, _super);
    function ProfileImage(prv, id, service) {
        _super.call(this, "profile-image", id, prv, service);
    }
    /**
    Get Scaled Profile Image
    */
    ProfileImage.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.response();
        });
    };
    return ProfileImage;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileImage;
