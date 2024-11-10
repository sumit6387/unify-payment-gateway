"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorPay = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const Order_1 = require("./Order");
const Payment_1 = require("./Payment");
const Customer_1 = require("./Customer");
class RazorPay {
    constructor(keyId, keySecret) {
        if (keyId == null || keySecret == null) {
            throw new Error("keyId and keySecret are required");
        }
        this._keyId = keyId;
        this._keySecret = keySecret;
        this._instance = new razorpay_1.default({
            key_id: this._keyId,
            key_secret: this._keySecret,
        });
        this.order = new Order_1.Order(this._instance);
        this.payment = new Payment_1.Payment(this._instance);
        this.customer = new Customer_1.Customer(this._instance);
    }
}
exports.RazorPay = RazorPay;
