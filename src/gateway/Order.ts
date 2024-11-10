import { ProviderTypes } from "../enums/ProviderEnum";
import { IOrder } from "../interfaces/razorpay/IOrder";
import { Order as RazorPayOrder } from "../payment-integrations/razorpay/Order";
import { RazorPay } from "../payment-integrations/razorpay";
import { IUnifyPaymentGatewayConfigOptions } from "../types/IUnifyPaymentGatewayConfigOptions";
import { IOrderCreatePayload, IOrderResponse, IOrderQuery, IOrderListResponse, IOrderPaymentListResponse } from "../types/razorpay/IOrder";

export class Order implements IOrder {
    private readonly _config: IUnifyPaymentGatewayConfigOptions;
    private readonly order!: RazorPayOrder;
    constructor(config: IUnifyPaymentGatewayConfigOptions) {
        this._config = config;
        if (this._config.provider == ProviderTypes.RAZORPAY) {
            const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
            this.order = razopay.order;
        }
    }
    async createOrder(order: IOrderCreatePayload): Promise<IOrderResponse> {
        return await this.order.createOrder(order);
    }
    async all(options: IOrderQuery): Promise<IOrderListResponse> {
        return await this.order.all(options);
    }
    async fetch(orderId: string): Promise<IOrderResponse> {
        return await this.order.fetch(orderId);
    }
    async fetchPayments(orderId: string): Promise<IOrderPaymentListResponse> {
        return await this.order.fetchPayments(orderId);
    }
}