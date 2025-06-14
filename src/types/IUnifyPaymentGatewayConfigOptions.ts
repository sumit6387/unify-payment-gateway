import { EnvironmentEnum } from "../enums/EnvironmentEnum";
import { ProviderTypes } from "./ProviderType";

export interface IUnifyPaymentGatewayConfigOptions {
    provider: ProviderTypes,
    clientId: string,
    clientSecret: string | null,
    salt?: string | null,
    environment?: EnvironmentEnum,
}