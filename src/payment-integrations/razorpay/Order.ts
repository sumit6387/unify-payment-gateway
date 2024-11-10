import Razorpay from "razorpay";
import { IOrderCreatePayload, IOrderListResponse, IOrderPaymentListResponse, IOrderQuery, IOrderResponse } from "../../types/razorpay/IOrder";
import { IOrder } from "../../interfaces/razorpay/IOrder";


export class Order implements IOrder {
    private readonly _razorPayInstance: Razorpay;

    constructor(instance: Razorpay) {
        this._razorPayInstance = instance;
    }
    async fetchPayments(orderId: string): Promise<IOrderPaymentListResponse> {
        const order = await this._razorPayInstance.orders.fetchPayments(orderId) as IOrderPaymentListResponse;
        return order;
    }
    async fetch(orderId: string): Promise<IOrderResponse> {
        const order = await this._razorPayInstance.orders.fetch(orderId) as IOrderResponse;
        return order;
    }
    async all(options: IOrderQuery): Promise<IOrderListResponse> {
        const orders = await this._razorPayInstance.orders.all(options) as IOrderListResponse;
        return orders;
    }
    async createOrder(order: IOrderCreatePayload): Promise<IOrderResponse> {
        const data = await this._razorPayInstance.orders.create(order) as IOrderResponse;
        return data;
    }
}