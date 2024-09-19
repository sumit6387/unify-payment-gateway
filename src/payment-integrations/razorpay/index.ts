
export class RazorPay {
    private readonly _keyId: string;
    private readonly _keySecret: string;
    constructor(keyId: string, keySecret: string) {
        if (keyId == null || keySecret == null) {
            throw new Error("keyId and keySecret are required");
        }
        this._keyId = keyId;
        this._keySecret = keySecret;
    }
}