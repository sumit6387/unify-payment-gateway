import { CurrencyEnum } from "../../enums/CurrencyEnum";

export type IOrderCreatePayload = {
    amount: number;
    currency: CurrencyEnum;
    receipt?: string;
    partial_payment?: boolean;
    notes: Record<string, string>
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
    notes: any;
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

export type IOrderPaymentResponse = {
    id: string;
    entity: string;
    amount: number;
    currency: string;
    status: string;
    order_id: string;
    invoice_id: any;
    international: boolean
    method: string;
    amount_refunded: number;
    refund_status: any;
    captured: boolean
    description: string;
    card_id: string;
    bank: any;
    wallet: any;
    vpa: any;
    email: string;
    contact: string;
    notes: Record<string, string>;
    fee: number;
    tax: number;
    error_code: any;
    error_description: any;
    created_at: number;
}