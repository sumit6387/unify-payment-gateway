import Razorpay from "razorpay";
import { ICustomerBankPayload, ICustomerBankResponse, ICustomerCreatePayload, ICustomerListResponse, ICustomerResponse, ICustomerUpdatePayload } from "../../types/razorpay/ICustomer";
import { RazorpayPaginationOptions } from "razorpay/dist/types/api";
import { ICustomer } from "../../interfaces/razorpay/ICustomer";

export class Customer implements ICustomer {
    private readonly _razorPayInstance: Razorpay;

    constructor(instance: Razorpay) {
        this._razorPayInstance = instance;
    }

    async all(options: RazorpayPaginationOptions): Promise<ICustomerListResponse> {
        var customers = await this._razorPayInstance.customers.all(options) as ICustomerListResponse;
        return customers;
    }
    async update(customerId: string, payload: ICustomerUpdatePayload): Promise<ICustomerResponse> {
        const customer = await this._razorPayInstance.customers.edit(customerId, payload) as ICustomerResponse;
        return customer;
    }
    async create(payload: ICustomerCreatePayload): Promise<ICustomerResponse> {
        const customer = await this._razorPayInstance.customers.create(payload) as ICustomerResponse;
        return customer;
    }
    async fetchCustomerById(customerId: string): Promise<ICustomerResponse> {
        const customer = await this._razorPayInstance.customers.fetch(customerId) as ICustomerResponse;
        return customer;
    }
    async addBankAccount(customerId: string, payload: ICustomerBankPayload): Promise<ICustomerResponse> {
        const customer = await this._razorPayInstance.customers.addBankAccount(customerId, payload) as ICustomerResponse;
        return customer;
    }

    async deleteBankAccount(customerId: string, accountId: string): Promise<ICustomerBankResponse> {
        const bank = await this._razorPayInstance.customers.deleteBankAccount(customerId, accountId) as ICustomerBankResponse;
        return bank;
    }


}