"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
// This is Generated Source.
var UrlSection_1 = require("../../UrlSection");
var Contact_1 = require("./Contact");
var Group_1 = require("./Group");
var AddressBook = (function (_super) {
    __extends(AddressBook, _super);
    function AddressBook(prv, id, service) {
        _super.call(this, "address-book", id, prv, service);
    }
    /**
     * Internal identifier of a contact record in the RingCentral database
     */
    AddressBook.prototype.contact = function (id) {
        return new Contact_1.default(this, id);
    };
    /**
     * Internal identifier of a group in an address book
     */
    AddressBook.prototype.group = function (id) {
        return new Group_1.default(this, id);
    };
    return AddressBook;
}(UrlSection_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddressBook;
