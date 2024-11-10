export type ICustomerCreatePayload = {
    name: string;
    contact?: number;
    email?: string;
    fail_existing?: boolean;
    gstin?: string;
    notes?: Record<string, string>
}

export type ICustomerUpdatePayload = {
    name?: string;
    email?: string;
    contact?: number
}

export type ICustomerResponse = {
    id: string;
    entity: string;
    name: string;
    contact: string;
    email: string;
    gstin: string;
    notes: Record<string, string>;
    created_at: number;
}

export type ICustomerListResponse = {
    entity: string;
    count: number;
    items: ICustomerResponse[]
}

export type ICustomerBankPayload = {
    ifsc_code: string;
    account_number: string;
    beneficiary_name: string;
    beneficiary_address1?: string;
    beneficiary_address2?: string;
    beneficiary_address3?: string;
    beneficiary_address4?: string;
    beneficiary_email?: string;
    beneficiary_mobile?: string;
    beneficiary_city?: string;
    beneficiary_state?: string;
    beneficiary_country?: string;
    beneficiary_pin?: string;
}

export type ICustomerBankResponse = {
    id: string;
    ifsc: string;
    bank_name: string;
    name: string;
    account_number: string;
    status: string;
}