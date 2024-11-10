import { RazorpayPaginationOptions } from "razorpay/dist/types/api";
import { ICustomerBankPayload, ICustomerBankResponse, ICustomerCreatePayload, ICustomerListResponse, ICustomerResponse, ICustomerUpdatePayload } from "../../types/razorpay/ICustomer";

export interface ICustomer {
    create(payload: ICustomerCreatePayload): Promise<ICustomerResponse>;
    update(customerId: string, payload: ICustomerUpdatePayload): Promise<ICustomerResponse>;
    all(options: RazorpayPaginationOptions): Promise<ICustomerListResponse>;
    fetchCustomerById(customerId: string): Promise<ICustomerResponse>;

    // bank
    addBankAccount(customerId: string, payload: ICustomerBankPayload): Promise<ICustomerResponse>;
    deleteBankAccount(customerId: string, accountId: string): Promise<ICustomerBankResponse>;

}