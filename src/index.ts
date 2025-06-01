import { IUnifyPaymentGatewayConfigOptions } from "./types/IUnifyPaymentGatewayConfigOptions"
import { Order } from "./gateway/Order";
import { Payment } from "./gateway/Payment";
import { Customer } from "./gateway/Customer";

class UnifyPaymentGatewayClient {
  private readonly _config: IUnifyPaymentGatewayConfigOptions;
  public readonly order: Order;
  public readonly payment: Payment;
  public readonly customer: Customer;
  constructor(config: IUnifyPaymentGatewayConfigOptions) {
    this._config = config;
    this.order = new Order(config);
    this.customer = new Customer(config);
    this.payment = new Payment(config);
  }

}

export default UnifyPaymentGatewayClient;
export { UnifyPaymentGatewayClient, IUnifyPaymentGatewayConfigOptions };
export * from "./types/IUnifyPaymentGatewayConfigOptions";
export * from "./types/razorpay/IOrder";
export * from "./types/razorpay/ICustomer";
export * from "./enums/EnvironmentEnum";
export * from "./enums/ProviderEnum";
export * from "./enums/CurrencyEnum";
export * from "./interfaces/razorpay/IOrder";
export * from "./interfaces/razorpay/IPayment";
export * from "./interfaces/razorpay/ICustomer";