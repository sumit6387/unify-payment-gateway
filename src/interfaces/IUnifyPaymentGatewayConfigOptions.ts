import { EnvironmentEnum } from "../enums/EnvironmentEnum";
import { ProviderEnum } from "../enums/ProviderEnum";

export interface IUnifyPaymentGatewayConfigOptions {
    provider: ProviderEnum,
    clientId: string,
    clientSecret: string,
    environment: EnvironmentEnum,
}