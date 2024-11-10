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
class Customer {
    constructor(instance) {
        this._razorPayInstance = instance;
    }
    all(options) {
        return __awaiter(this, void 0, void 0, function* () {
            var customers = yield this._razorPayInstance.customers.all(options);
            return customers;
        });
    }
    update(customerId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this._razorPayInstance.customers.edit(customerId, payload);
            return customer;
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this._razorPayInstance.customers.create(payload);
            return customer;
        });
    }
    fetchCustomerById(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this._razorPayInstance.customers.fetch(customerId);
            return customer;
        });
    }
    addBankAccount(customerId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this._razorPayInstance.customers.addBankAccount(customerId, payload);
            return customer;
        });
    }
    deleteBankAccount(customerId, accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const bank = yield this._razorPayInstance.customers.deleteBankAccount(customerId, accountId);
            return bank;
        });
    }
}
exports.Customer = Customer;
