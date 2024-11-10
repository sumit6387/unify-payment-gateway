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
exports.Customer = void 0;
const ProviderEnum_1 = require("../enums/ProviderEnum");
const razorpay_1 = require("../payment-integrations/razorpay");
class Customer {
    constructor(config) {
        this._config = config;
        if (this._config.provider == ProviderEnum_1.ProviderTypes.RAZORPAY) {
            const razopay = new razorpay_1.RazorPay(this._config.clientId, this._config.clientSecret);
            this.customer = razopay.customer;
        }
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customer.create(payload);
        });
    }
    update(customerId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customer.update(customerId, payload);
        });
    }
    all(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customer.all(options);
        });
    }
    fetchCustomerById(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customer.fetchCustomerById(customerId);
        });
    }
    addBankAccount(customerId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customer.addBankAccount(customerId, payload);
        });
    }
    deleteBankAccount(customerId, accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customer.deleteBankAccount(customerId, accountId);
        });
    }
}
exports.Customer = Customer;
