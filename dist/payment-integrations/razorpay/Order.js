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
class Order {
    constructor(instance) {
        this._razorPayInstance = instance;
    }
    fetchPayments(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this._razorPayInstance.orders.fetchPayments(orderId);
            return order;
        });
    }
    fetch(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this._razorPayInstance.orders.fetch(orderId);
            return order;
        });
    }
    all(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this._razorPayInstance.orders.all(options);
            return orders;
        });
    }
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._razorPayInstance.orders.create(order);
            return data;
        });
    }
}
exports.Order = Order;
