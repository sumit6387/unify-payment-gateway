import { ProviderTypes } from "../enums/ProviderEnum";
import { IOrder } from "../interfaces/razorpay/IOrder";
import { Order as RazorPayOrder } from "../payment-integrations/razorpay/Order";
import { RazorPay } from "../payment-integrations/razorpay";
import { IUnifyPaymentGatewayConfigOptions } from "../types/IUnifyPaymentGatewayConfigOptions";
import { IOrderCreatePayload, IOrderResponse, IOrderQuery, IOrderListResponse, IOrderPaymentListResponse, IOrderPaymentPayUResponse } from "../types/razorpay/IOrder";
import { PayU } from "../payment-integrations/payu";

export class Order implements IOrder {
    private readonly _config: IUnifyPaymentGatewayConfigOptions;
    private readonly order!: RazorPayOrder | PayU;
    constructor(config: IUnifyPaymentGatewayConfigOptions) {
        this._config = config;
        if (this._config.provider == ProviderTypes.RAZORPAY) {
            const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
            this.order = razopay.order;
        }else if(this._config.provider == ProviderTypes.PAYU){
            this.order = new PayU(this._config);
        }
    }
    async createOrder(order: IOrderCreatePayload): Promise<IOrderResponse | IOrderPaymentPayUResponse> {
        if(this._config.provider == ProviderTypes.RAZORPAY){
            return await this.order.createOrder(order);
        }else{
            return await this.order.createOrder(order);
        }
    }
    async all(options: IOrderQuery): Promise<IOrderListResponse> {
        if(this._config.provider == ProviderTypes.PAYU)
            throw new Error("PayU does not support this method for payu");
        return await this.order.all(options);
    }
    async fetch(orderId: string): Promise<IOrderResponse> {
        if(this._config.provider == ProviderTypes.PAYU)
            throw new Error("PayU does not support this method for payu");
        return await this.order.fetch(orderId);
    }
    async fetchPayments(orderId: string): Promise<IOrderPaymentListResponse> {
        if(this._config.provider == ProviderTypes.PAYU)
            throw new Error("PayU does not support this method for payu");
        return await this.order.fetchPayments(orderId);
    }
}