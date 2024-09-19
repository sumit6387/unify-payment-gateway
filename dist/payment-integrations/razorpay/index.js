"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorPay = void 0;
class RazorPay {
    constructor(keyId, keySecret) {
        if (keyId == null || keySecret == null) {
            throw new Error("keyId and keySecret are required");
        }
        this._keyId = keyId;
        this._keySecret = keySecret;
    }
}
exports.RazorPay = RazorPay;
