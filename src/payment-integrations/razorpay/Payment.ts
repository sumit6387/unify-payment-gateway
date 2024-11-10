import Razorpay from "razorpay";
import { IPayment } from "../../interfaces/razorpay/IPayment";

export class Payment implements IPayment {
    private readonly _razorPayInstance: Razorpay;

    constructor(instance: Razorpay) {
        this._razorPayInstance = instance;
    }
}