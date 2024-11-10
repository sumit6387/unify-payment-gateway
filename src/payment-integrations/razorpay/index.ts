import Razorpay from "razorpay";
import { Order } from "./Order";
import { IOrderPaymentListResponse, IOrderResponse } from "../../types/razorpay/IOrder";
import { Payment } from "./Payment";
import { Customer } from "./Customer";
export class RazorPay {
    private readonly _keyId: string;
    private readonly _keySecret: string;
    private readonly _instance: Razorpay;
    public readonly order: Order;
    public readonly payment: Payment;
    public readonly customer: Customer;
    constructor(keyId: string, keySecret: string) {
        if (keyId == null || keySecret == null) {
            throw new Error("keyId and keySecret are required");
        }
        this._keyId = keyId;
        this._keySecret = keySecret;
        this._instance = new Razorpay({
            key_id: this._keyId,
            key_secret: this._keySecret,
        });
        this.order = new Order(this._instance);
        this.payment = new Payment(this._instance);
        this.customer = new Customer(this._instance);
    }

}