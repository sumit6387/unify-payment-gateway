"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const ProviderEnum_1 = require("../enums/ProviderEnum");
const razorpay_1 = require("../payment-integrations/razorpay");
class Order {
    constructor(config) {
        this._config = config;
        if (this._config.provider == ProviderEnum_1.ProviderTypes.RAZORPAY) {
            const razopay = new razorpay_1.RazorPay(this._config.clientId, this._config.clientSecret);
            this.order = razopay.order;
        }
    }
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.order.createOrder(order);
        });
    }
    all(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.order.all(options);
        });
    }
    fetch(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.order.fetch(orderId);
        });
    }
    fetchPayments(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.order.fetchPayments(orderId);
        });
    }
}
exports.Order = Order;
