/**
 * Refund Results Model - https://hack.softheon.io/api/payments/docs/general/schemas/#refundresultmodel
 * 
 * @export
 * @class RefundResults
 */
export class RefundResults {
    /**
     * The current status of the refund
     * 
     * @type {string}
     * @memberof RefundResults
     */
    public status: string; 

    /**
     * The refund result code
     * 
     * @type {string}
     * @memberof RefundResults
     */
    public code: string;

    /**
     * The refund result message
     * 
     * @type {string}
     * @memberof RefundResults
     */
    public message: string;

    /**
     * The merchant transaction ID number for the payment that is being refunded
     * 
     * @type {string}
     * @memberof RefundResults
     */
    public merchantTransactionId: string;

    /**
     * The unique ID of the provider account that was used to make this refund
     * 
     * @type {string}
     * @memberof RefundResults
     */
    public providerAccountId: string;

    /**
     * The amount to be refunded. 
     * If an amount less than the original payment amount is specified, a partial refund will be processed. If no amount is specified, a full refund will be processed
     * 
     * @type {number}
     * @memberof RefundResults
     */
    public amount: number;

    /**
     * The reason for issuing the refund
     * 
     * @type {string}
     * @memberof RefundResults
     */
    public reason: string;

    /**
     * The timestamp indicating when the refund was created
     * 
     * @type {Date}
     * @memberof RefundResults
     */
    public createdDate: Date;
}
