declare enum EnvironmentEnum {
    SANDBOX = "sandbox",
    TEST = "test",
    PRODUCTION = "production",
    LIVE = "live"
}

type ProviderTypes = "payu" | "razorpay";

interface IUnifyPaymentGatewayConfigOptions {
    provider: ProviderTypes;
    clientId: string;
    clientSecret: string;
    environment?: EnvironmentEnum;
}

declare class UnifyPaymentGatewayClient {
    private readonly _config;
    private readonly order;
    private readonly payment;
    private readonly customer;
    constructor(config: IUnifyPaymentGatewayConfigOptions);
}

export { UnifyPaymentGatewayClient as default };
