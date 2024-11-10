import { IUnifyPaymentGatewayConfigOptions } from "./types/IUnifyPaymentGatewayConfigOptions"
import { Order } from "./gateway/Order";
import { Payment } from "./gateway/Payment";
import { Customer } from "./gateway/Customer";

class UnifyPaymentGatewayClient {
  private readonly _config: IUnifyPaymentGatewayConfigOptions;
  private readonly order: Order;
  private readonly payment: Payment;
  private readonly customer: Customer;
  constructor(config: IUnifyPaymentGatewayConfigOptions) {
    this._config = config;
    this.order = new Order(config);
    this.customer = new Customer(config);
    this.payment = new Payment(config);
  }

}

export default UnifyPaymentGatewayClient;