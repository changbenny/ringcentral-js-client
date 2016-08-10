"use strict";
/**
 * PagingResult
 */
var PagingResult = (function () {
    function PagingResult(data) {
        this.records = data["records"];
        this.navigation = data["navigation"];
        this.paging = data["paging"];
    }
    return PagingResult;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagingResult;
function convertArray(ar, constr) {
    var typedAr = [];
    for (var i = 0; i < ar.length; i++) {
        typedAr.push(new constr(ar[i]));
    }
    return typedAr;
}
