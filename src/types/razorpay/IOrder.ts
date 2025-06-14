import { CurrencyEnum } from "../../enums/CurrencyEnum";

export type IOrderCreatePayload = {
    amount: number;
    currency: CurrencyEnum;
    receipt?: string;
    partial_payment?: boolean;
    notes: Record<string, string>;
    name?: string;
    email?: string;
    phone?: string;
    product_info?: string;
    txn_id?: string;
}



export type IOrderResponse = {
    id: string;
    entity: string;
    amount: number,
    amount_paid: number;
    amount_due: number;
    currency: CurrencyEnum;
    receipt?: string;
    offer_id?: string;
    status: string,
    attempts: number;
    notes: string;
    created_at: number
}

export type IOrderListResponse = {
    entity: string;
    count: number;
    items: IOrderResponse[]
}

export type IOrderQuery = {
    from?: number;
    to?: number;
    count?: number;
    skip?: number;
}

export type IOrderPaymentListResponse = {
    entity: string;
    count: number;
    items: IOrderPaymentResponse[]
}

export type IOrderPaymentPayUResponse = {
    amount: number;
    name?: string;
    email?: string;
    phone?: string;
    product_info?: string;
    txn_id?: string;
    merchantKey?: string;
    hash?: string;
    service_provider?: string;
}

export type IOrderPaymentResponse = {
    id: string;
    entity: string;
    amount: number;
    currency: string;
    status: string;
    order_id: string;
    invoice_id: string;
    international: boolean
    method: string;
    amount_refunded: number;
    refund_status: string;
    captured: boolean
    description: string;
    card_id: string;
    bank: string;
    wallet: string;
    vpa: string;
    email: string;
    contact: string;
    notes: Record<string, string>;
    fee: number;
    tax: number;
    error_code: string;
    error_description: string;
    created_at: number;
}