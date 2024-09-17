import { ProviderEnum } from "./enums/ProviderEnum";
import { IUnifyPaymentGatewayConfigOptions } from "./interfaces/IUnifyPaymentGatewayConfigOptions";

class UnifyPaymentGatewayClient {
  private readonly _config: IUnifyPaymentGatewayConfigOptions;
  constructor(config: IUnifyPaymentGatewayConfigOptions) {
    this._config = config;
  }
}

export default UnifyPaymentGatewayClient;