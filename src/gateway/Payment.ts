import { ProviderTypes } from "../enums/ProviderEnum";
import { IPayment } from "../interfaces/razorpay/IPayment";
import { RazorPay, } from "../payment-integrations/razorpay";
import { Payment as RazorPayPayment } from "../payment-integrations/razorpay/Payment";
import { IUnifyPaymentGatewayConfigOptions } from "../types/IUnifyPaymentGatewayConfigOptions";

export class Payment implements IPayment {
    private readonly _config: IUnifyPaymentGatewayConfigOptions;
    private readonly payment!: RazorPayPayment;
    constructor(config: IUnifyPaymentGatewayConfigOptions) {
        this._config = config;
        if (this._config.provider == ProviderTypes.RAZORPAY) {
            const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
            this.payment = razopay.payment;
        }
    }
}