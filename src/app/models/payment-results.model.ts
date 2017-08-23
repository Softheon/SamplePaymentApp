/**
 * Payment Results Model - https://hack.softheon.io/api/payments/docs/general/schemas/#paymentresultmodel
 * 
 * @export
 * @class PaymentResults
 */
export class PaymentResults {
    /**
     * The current status of the payment. Can be Authorized, Declined, Failed, Charge Back, Refunded or Partially Refunded
     * 
     * @type {string}
     * @memberof PaymentResults
     */
    public status: string;

    /**
     * The payment result code
     * 
     * @type {string}
     * @memberof PaymentResults
     */
    public code: string;

    /**
     * The payment result message
     * 
     * @type {string}
     * @memberof PaymentResults
     */
    public message: string;

    /**
     * The unique ID of the provider account that was used to make this payment
     * 
     * @type {string}
     * @memberof PaymentResults
     */
    public providerAccountId: string;

    /**
     * The merchant transaction identifie
     * 
     * @type {string}
     * @memberof PaymentResults
     */
    public merchantTransactionId: string;

    /**
     * The transaction processing fee
     * 
     * @type {number}
     * @memberof PaymentResults
     */
    public merchantTransactionFee: number;
}
