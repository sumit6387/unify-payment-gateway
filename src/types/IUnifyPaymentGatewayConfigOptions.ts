import { EnvironmentEnum } from "../enums/EnvironmentEnum";
import { ProviderTypes } from "./ProviderType";

export interface IUnifyPaymentGatewayConfigOptions {
    provider: ProviderTypes,
    clientId: string,
    clientSecret: string,
    environment?: EnvironmentEnum,
}