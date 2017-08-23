/**
 * Payment Method Model - https://hack.softheon.io/api/payments/docs/general/schemas/#paymentmethodmodel
 * 
 * @export
 * @class PaymentMethod
 */
export class PaymentMethod {
    /**
     * The credit card or bank account token that will be used for payment
     * 
     * @type {string}
     * @memberof PaymentMethod
     */
    public paymentToken: string;

    /**
     * The type of funding source that will be used for the payment. Can be Credit Card or ACH
     * 
     * @type {string}
     * @memberof PaymentMethod
     */
    public type: string;
}
