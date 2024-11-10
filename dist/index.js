"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("./gateway/Order");
const Payment_1 = require("./gateway/Payment");
const Customer_1 = require("./gateway/Customer");
class UnifyPaymentGatewayClient {
    constructor(config) {
        this._config = config;
        this.order = new Order_1.Order(config);
        this.customer = new Customer_1.Customer(config);
        this.payment = new Payment_1.Payment(config);
    }
}
exports.default = UnifyPaymentGatewayClient;
