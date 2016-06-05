/// <reference path="./externals.d.ts" />

import accountClient = require('./clients/Account');
import callLogClient = require('./clients/CallLog');
import dictionaryClient = require('./clients/Dictionary');
import extensionClient = require('./clients/Extension');
import messagesClient = require('./clients/Messages');
import notificationsClient = require('./clients/NotificationsSubscriptionAPI');
import presenceClient = require('./clients/Presence');
import ringoutClient = require('./clients/RingOut');
import forwardingNumbersClient = require('./clients/ForwardingNumbers');
import blockedNumbersClient = require('./clients/blockedNumbers');

class Client {

    public static version = '0.1.0';

    private _sdk;
    private _account:accountClient.Account;
    private _callLog:callLogClient.CallLog;
    private _dictionary:dictionaryClient.Dictionary;
    private _extension:extensionClient.Extension;
    private _messages:messagesClient.Messages;
    private _notifications:notificationsClient.NotificationsSubscriptionAPI;
    private _presence:presenceClient.Presence;
    private _ringout:ringoutClient.RingOut;
    private _forwardingNumbers:forwardingNumbersClient.ForwardingNumbers;
    private _blockedNumbers:blockedNumbersClient.BlockedNumbers;

    constructor(sdk) {

        this._sdk = sdk;

        this._account = new accountClient.Account(sdk);
        this._callLog = new callLogClient.CallLog(sdk);
        this._dictionary = new dictionaryClient.Dictionary(sdk);
        this._extension = new extensionClient.Extension(sdk);
        this._messages = new messagesClient.Messages(sdk);
        this._notifications = new notificationsClient.NotificationsSubscriptionAPI(sdk);
        this._presence = new presenceClient.Presence(sdk);
        this._ringout = new ringoutClient.RingOut(sdk);
        this._forwardingNumbers = new forwardingNumbersClient.ForwardingNumbers(sdk);
        this._blockedNumbers = new blockedNumbersClient.BlockedNumbers(sdk);

    }

    account() { return this._account; }
    callLog() { return this._callLog; }
    dictionary() { return this._dictionary; }
    extension() { return this._extension; }
    messages() { return this._messages; }
    notifications() { return this._notifications; }
    presence() { return this._presence; }
    ringout() { return this._ringout; }
    forwardingNumbers() { return this._forwardingNumbers; }
    blockedNumbers() { return this._blockedNumbers; }

}

export = Client;