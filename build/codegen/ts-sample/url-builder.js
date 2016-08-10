"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UrlSection_1 = require("../../src/UrlSection");
var Account_1 = require("../../src/generated/url-builders/Account");
var Client_1 = require("../../src/Client");
var auth_1 = require("../../src/test/auth");
/*
/account/{accountId}/call-log
/account/{accountId}/extention/{extensionId}/call-log
*/
/**
 * RingcentralClient
 */
var RingcentralClient = (function () {
    function RingcentralClient(service) {
        this._service = service;
    }
    RingcentralClient.prototype.account = function (id) {
        return new Account_1.default(null, id, this._service);
    };
    return RingcentralClient;
}());
// url/Account.ts
/**
 * UAccount
 */
var Account = (function (_super) {
    __extends(Account, _super);
    function Account(service, id) {
        _super.call(this, "account", id || "~", null, service);
    }
    Account.prototype.callLog = function (id) {
        return new CallLog(id, this);
    };
    Account.prototype.extention = function (id) {
        return new Extension(id, this);
    };
    Account.prototype.businessAddress = function (id) {
        return new BusinessAddress(id, this);
    };
    Account.prototype.get = function () {
        return this.getService().get(this.getEndpoint()).then(function (res) {
            return res.json();
        });
    };
    return Account;
}(UrlSection_1.default));
/**
 * BusinessAddress
 */
var BusinessAddress = (function (_super) {
    __extends(BusinessAddress, _super);
    function BusinessAddress(id, prv) {
        _super.call(this, "business-address", id, prv);
    }
    /**
     * BusinessAddress sample
     *  { street: 'Simin',
         city: 'San Mateo',
         state: 'ON',
         zip: '300188',
         country: 'Canada' },
      company: 'RC',
      email: 'a7031x@ringcentral.com' }
    
      // TODO: Assume that put method allow only body parameters
    */
    BusinessAddress.prototype.put = function (body) {
        return this.getService().put(this.getEndpoint(), body).then(function (data) {
            return new UpdateResponse(data);
        });
    };
    return BusinessAddress;
}(UrlSection_1.default));
/**
 * UpdateResponse
 */
var UpdateResponse = (function () {
    function UpdateResponse(data) {
        this.uri = data["uri"];
        this.company = data["company"];
        this.email = data["email"];
        this.businessAddress = data["businessAddress"];
    }
    return UpdateResponse;
}());
/**
 * CallLog
 */
var CallLog = (function (_super) {
    __extends(CallLog, _super);
    function CallLog(id, prv) {
        _super.call(this, "call-log", id, prv);
    }
    CallLog.prototype.get = function () {
        this.getService().get();
        return null;
    };
    CallLog.prototype.list = function () {
        return;
    };
    return CallLog;
}(UrlSection_1.default));
/**
 * CallLogInfo
 */
var CallLogInfo = (function () {
    function CallLogInfo() {
    }
    return CallLogInfo;
}());
/**
 * Extension
 */
var Extension = (function (_super) {
    __extends(Extension, _super);
    function Extension(id, prv) {
        _super.call(this, "extension", id || "~", prv);
    }
    Extension.prototype.callLog = function (id) {
        return new CallLog(id, this);
    };
    Extension.prototype.companyPager = function (id) {
        return new CompanyPager(this, id);
    };
    Extension.prototype.list = function (options) {
        return this.getService().get(this.getEndpoint(false), options).then(function (res) {
            return res.json();
        });
    };
    return Extension;
}(UrlSection_1.default));
/**
 * CompanyPager
 */
var CompanyPager = (function (_super) {
    __extends(CompanyPager, _super);
    function CompanyPager(prv, id) {
        _super.call(this, "company-pager", id, prv);
    }
    /*
        FIXME: Assumes post doe not accept query parameters, only body parameters are accepted
        FIXME: All properties of body will be optional
    */
    CompanyPager.prototype.post = function (body) {
        return this.getService().post(this.getEndpoint(false), body).then(function (res) {
            return res.json();
        });
    };
    return CompanyPager;
}(UrlSection_1.default));
auth_1.default.then(function (rcService) {
    var client = new Client_1.default(rcService);
    // # delete
    client.account().extension().callLog().delete().then(function (res) {
        console.log("delete ok", res);
    }).catch(function (e) {
        console.log("Delete fail", e);
    });
    // # put
    client.account().extension().addressBook().contact("397569004").get().then(function (contacts) {
        console.log("@@@ original contact", contacts);
        client.account().extension().addressBook().contact("397569004").put({ lastName: "updatedAt" + Date.now() }).then(function (updated) {
            console.log("Updated contact", updated);
        }).catch(function (e) {
            console.error("Fail update contact", e);
        });
    });
    // # post
    client.account().extension().addressBook().contact().post({ firstName: "Kevin" }).then(function (res) {
        console.log("Create Contact", res);
    }).catch(function (e) {
        console.error("Error", e.apiResponse._request, e);
    });
    client.account().extension().companyPager().post({
        to: [{ extensionNumber: "109" }],
        text: "test generated post pager message"
    }).then(function (msgInfo) {
        console.log(">>> Post pager message result", msgInfo);
    }).catch(function (e) {
        console.error("Fail to send company page", e);
    });
    // Get By ID
    client.account().get().then(function (ac) {
        console.log(">>> My account info", ac);
    }).catch(function (e) {
        console.error("Fail to get account info", e);
    });
    // Get a list
    client.account().extension().list({ perPage: 2 }).then(function (extensionPages) {
        console.log(">>>extension list slice", extensionPages);
    }).catch(function (e) {
        console.error("Fail to get extensions", e);
    });
    client._service.get("/account/~/extension/~").then(function (res) {
        console.log("ExtensionInfo", res.json());
    });
    client._service.put("/account/~/extension/~", {
        contact: {
            lastName: "Stolyarchuk3"
        }
    }).then(function (res) {
        console.log("Put extension result", res.json());
    }).catch(function (e) {
        console.error("put extension error:" + e);
    });
    /**/
}).catch(function (e) {
    console.error("Fail to login: " + e);
});
