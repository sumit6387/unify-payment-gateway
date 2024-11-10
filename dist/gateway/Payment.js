"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const ProviderEnum_1 = require("../enums/ProviderEnum");
const razorpay_1 = require("../payment-integrations/razorpay");
class Payment {
    constructor(config) {
        this._config = config;
        if (this._config.provider == ProviderEnum_1.ProviderTypes.RAZORPAY) {
            const razopay = new razorpay_1.RazorPay(this._config.clientId, this._config.clientSecret);
            this.payment = razopay.payment;
        }
    }
}
exports.Payment = Payment;
