import { IOrderCreatePayload, IOrderListResponse, IOrderPaymentListResponse, IOrderPaymentPayUResponse, IOrderQuery, IOrderResponse } from "../../types/razorpay/IOrder";

export interface IOrder {
    createOrder(order: IOrderCreatePayload): Promise<IOrderResponse | IOrderPaymentPayUResponse>;
    all(options: IOrderQuery): Promise<IOrderListResponse>;
    fetch(orderId: string): Promise<IOrderResponse>;
    fetchPayments(orderId: string): Promise<IOrderPaymentListResponse>;
}