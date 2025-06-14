import { IOrder } from "../../interfaces/razorpay/IOrder";
import { IUnifyPaymentGatewayConfigOptions } from "../../types/IUnifyPaymentGatewayConfigOptions";
import { IOrderCreatePayload, IOrderListResponse, IOrderPaymentListResponse, IOrderPaymentPayUResponse, IOrderQuery, IOrderResponse } from "../../types/razorpay/IOrder";
import crypto from "crypto";

export class PayU implements IOrder {
    private readonly _config: IUnifyPaymentGatewayConfigOptions;
    constructor(config: IUnifyPaymentGatewayConfigOptions) {
        if(!config.salt)
            throw new Error("PayU requires a salt in the configuration");
        if(!config.clientId)
            throw new Error("PayU requires a merchant in the configuration");
        _config = config;
    }
    all(options: IOrderQuery): Promise<IOrderListResponse> {
        throw new Error("Method not implemented.");
    }
    fetch(orderId: string): Promise<IOrderResponse> {
        throw new Error("Method not implemented.");
    }
    fetchPayments(orderId: string): Promise<IOrderPaymentListResponse> {
        throw new Error("Method not implemented.");
    }
    async createOrder(orderPayload: IOrderCreatePayload): Promise<IOrderPaymentPayUResponse> {
        const hashString = `${this._config.clientId}|${orderPayload.txn_id}|${orderPayload.amount}|${orderPayload.product_info}|${orderPayload.name}|${orderPayload.email}|||||||||||${this._config.salt}`;
        const hash = crypto.createHash('sha512').update(hashString).digest('hex');
        const order: IOrderPaymentPayUResponse = {
            amount: orderPayload.amount,
            name: orderPayload.name,
            email: orderPayload.email,
            phone: orderPayload.phone,
            product_info: orderPayload.product_info,
            txn_id: orderPayload.txn_id,
            merchantKey: this._config.clientId,
            hash: hash,
            service_provider: "payu_paisa"
        }
        // Implement the logic to create an order using the PayU instance
        return order;
    }

}