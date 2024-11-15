import { RazorpayPaginationOptions } from "razorpay/dist/types/api";
import { ProviderTypes } from "../enums/ProviderEnum";
import { ICustomer } from "../interfaces/razorpay/ICustomer";
import { RazorPay } from "../payment-integrations/razorpay";
import { Customer as RazorPayCustomer } from "../payment-integrations/razorpay/Customer";
import { IUnifyPaymentGatewayConfigOptions } from "../types/IUnifyPaymentGatewayConfigOptions";
import { ICustomerCreatePayload, ICustomerResponse, ICustomerUpdatePayload, ICustomerListResponse, ICustomerBankPayload, ICustomerBankResponse } from "../types/razorpay/ICustomer";

export class Customer implements ICustomer {
    private readonly _config: IUnifyPaymentGatewayConfigOptions;
    private readonly customer!: RazorPayCustomer;
    constructor(config: IUnifyPaymentGatewayConfigOptions) {
        this._config = config;
        if (this._config.provider == ProviderTypes.RAZORPAY) {
            const razopay = new RazorPay(this._config.clientId, this._config.clientSecret);
            this.customer = razopay.customer;
        }
    }
    async create(payload: ICustomerCreatePayload): Promise<ICustomerResponse> {
        return await this.customer.create(payload);
    }
    async update(customerId: string, payload: ICustomerUpdatePayload): Promise<ICustomerResponse> {
        return this.customer.update(customerId, payload);
    }
    async all(options: RazorpayPaginationOptions): Promise<ICustomerListResponse> {
        return this.customer.all(options);
    }
    async fetchCustomerById(customerId: string): Promise<ICustomerResponse> {
        return this.customer.fetchCustomerById(customerId);
    }
    async addBankAccount(customerId: string, payload: ICustomerBankPayload): Promise<ICustomerResponse> {
        return await this.customer.addBankAccount(customerId, payload);
    }
    async deleteBankAccount(customerId: string, accountId: string): Promise<ICustomerBankResponse> {
        return this.customer.deleteBankAccount(customerId, accountId);
    }
}