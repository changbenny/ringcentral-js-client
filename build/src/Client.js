"use strict";
var Account_1 = require("./generated/url-builders/Account");
var ClientInfo_1 = require("./generated/url-builders/ClientInfo");
var NumberPool_1 = require("./generated/url-builders/NumberPool");
var Client = (function () {
    function Client(service) {
        this._service = service;
    }
    Client.prototype.account = function (id) {
        return new Account_1.default(null, id, this._service);
    };
    Client.prototype.clientInfo = function () {
        return new ClientInfo_1.default(null, null, this._service);
    };
    Client.prototype.numberPool = function () {
        return new NumberPool_1.default(null, null, this._service);
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Client;
